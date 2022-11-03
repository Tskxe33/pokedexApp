import {StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {Colors} from '../../constants/Colors';
import {Fonts} from '../../constants/Fonts';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/reducers';
import {SEARCH_POKEMON} from '../../redux/actions/actionTypes/pokemonsActionTypes';

const NAPokemonPicker = () => {
  const pickerItems = useSelector(
    (state: RootState) => state.pokemons.pickerItems,
  );

  const [selectedItem, setSelectedItem] = useState();

  const dispatch = useDispatch<any>();

  const arrowOpen: any = useRef();
  const onPress = () => arrowOpen.current.onDownArrow();

  useEffect(() => {
    if (selectedItem) {
      dispatch({
        type: SEARCH_POKEMON,
        payload: selectedItem,
      });
    }
  }, [selectedItem]);

  return (
    <TouchableOpacity onPress={onPress}>
      <RNPickerSelect
        onValueChange={value => setSelectedItem(value)}
        items={pickerItems}
        useNativeAndroidPickerStyle={false}
        style={styles}
        value={selectedItem}
        ref={arrowOpen}
      />
    </TouchableOpacity>
  );
};

export default NAPokemonPicker;

const styles = StyleSheet.create({
  dropDownPicker: {
    marginTop: 25,
    width: '100%',
  },

  pickerArrow: {
    position: 'absolute',
    top: 45,
    right: 40,
    zIndex: 1,
  },

  inputAndroid: {
    fontSize: 15,
    color: Colors.COLOR_BLACK,
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontFamily: Fonts.ROBOTO_REGULAR,
  },

  inputIOS: {
    fontSize: 15,
    color: Colors.COLOR_BLACK,
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontFamily: Fonts.ROBOTO_REGULAR,
  },
});
