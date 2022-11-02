import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {TypeItem} from '../../models/Pokemon';
import {Fonts} from '../../constants/Fonts';
import {Colors, pokemonTypeBackgrounds} from '../../constants/Colors';
import {Images} from '../../constants/Images';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/reducers';
import {SET_SELECTED_TYPE} from '../../redux/actions/actionTypes/pokemonsActionTypes';
import {setPokemonsByType} from '../../redux/actions/PokemonActions';

interface TypesListItemProps {
  item: TypeItem;
}

const TypesListItem: React.FC<TypesListItemProps> = ({item}) => {
  const selectedType = useSelector(
    (state: RootState) => state.pokemons.selectedType,
  );

  const dispatch = useDispatch<any>();
  const [selected, setSelected] = useState(false);

  const handleOnPressSelected = (name: string) => {
    setSelected(!selected);

    selectedType === name
      ? dispatch({
          type: SET_SELECTED_TYPE,
          payload: '',
        })
      : dispatch({
          type: SET_SELECTED_TYPE,
          payload: name,
        });

    dispatch(setPokemonsByType());
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => handleOnPressSelected(item.name)}
        style={{
          ...styles.itemContainer,
          backgroundColor: pokemonTypeBackgrounds[item.name],
        }}>
        {selectedType === item.name && (
          <Image source={Images.SELECTED_ICON} style={styles.selectedIcon} />
        )}
        <Text style={styles.itemName}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TypesListItem;

const styles = StyleSheet.create({
  itemName: {
    fontFamily: Fonts.ROBOTO_REGULAR,
    fontSize: 18,
    color: Colors.COLOR_WHITE,
    textTransform: 'capitalize',
    textAlign: 'center',
    width: '100%',
    paddingVertical: 10,
  },

  itemContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    borderRadius: 4,
  },

  selectedIcon: {
    position: 'absolute',
    zIndex: 10,
    left: -14,
  },
});
