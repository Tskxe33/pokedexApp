import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Pokemon, PokemonType} from 'pokenode-ts';
import {Colors, pokemonTypeBackgrounds} from '../../constants/Colors';
import {Fonts} from '../../constants/Fonts';
import FastImage from 'react-native-fast-image';

interface SwiperItemProps {
  pokemon: Pokemon;
  handleNavigate: (item: Pokemon) => void;
}

const {width} = Dimensions.get('window');

const SwiperItem: React.FC<SwiperItemProps> = ({pokemon, handleNavigate}) => {
  const handleRenderTypesItem = () => {
    return pokemon.types.map((item: PokemonType, index: number) => (
      <View
        key={item.slot}
        style={{
          ...styles.typeContainer,
        }}>
        <Text style={styles.typeTitle}>{item.type.name}</Text>
      </View>
    ));
  };

  return (
    <TouchableOpacity
      onPress={() => handleNavigate(pokemon)}
      activeOpacity={1}
      style={{
        ...styles.slideContainer,
        backgroundColor: pokemonTypeBackgrounds[pokemon.types[0].type.name],
      }}>
      <Text style={styles.text}>{pokemon.name}</Text>
      <FastImage
        source={{
          uri: pokemon.sprites.other?.home.front_default,
          priority: FastImage.priority.normal,
        }}
        style={styles.image}
      />
      <View style={styles.typesContainer}>{handleRenderTypesItem()}</View>
    </TouchableOpacity>
  );
};

export default SwiperItem;

const styles = StyleSheet.create({
  slideContainer: {
    width: width,
    flex: 1,
    paddingHorizontal: 29,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  text: {
    fontFamily: Fonts.ROBOTO_BOLD,
    textTransform: 'capitalize',
    color: Colors.COLOR_WHITE,
    fontSize: 30,
    letterSpacing: 1,
  },

  typesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
  },

  image: {width: 200, height: 200, marginBottom: 33},

  typeContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.COLOR_WHITE,
  },

  typeTitle: {
    fontSize: 18,
    color: Colors.COLOR_WHITE,
    textAlign: 'center',
  },
});
