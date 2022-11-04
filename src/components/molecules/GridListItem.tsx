import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {Pokemon} from 'pokenode-ts';
import {Colors, pokemonTypeBackgrounds} from '../../constants/Colors';
import {Fonts} from '../../constants/Fonts';
import {useNavigation} from '@react-navigation/native';
import {AppRoute} from '../../constants/AppRoute';
import FastImage from 'react-native-fast-image';

interface GridListItemProps {
  item: Pokemon;
}

const GridListItem: React.FC<GridListItemProps> = ({item}) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(AppRoute.POKEMON_DETAILS_SCREEN, {
          pokemonDetails: item,
        })
      }
      style={{
        ...styles.itemContainer,
        backgroundColor: pokemonTypeBackgrounds[item.types[0].type.name],
      }}>
      <Text style={styles.itemName}>{item.name}</Text>
      <FastImage
        source={{
          uri: item.sprites.other?.home.front_default,
          priority: FastImage.priority.normal,
        }}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

export default memo(GridListItem);

const styles = StyleSheet.create({
  itemContainer: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 10,
    marginBottom: 10,
    marginRight: 3,
  },

  image: {
    width: 48,
    height: 48,
    marginBottom: 33,
    marginTop: 10,
  },

  itemName: {
    fontFamily: Fonts.ROBOTO_REGULAR,
    fontSize: 18,
    color: Colors.COLOR_WHITE,
    textTransform: 'capitalize',
  },
});
