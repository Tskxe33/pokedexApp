import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {items} from '../../constants/PickerItems';

const NAPokemonPicker = () => {
  const [selectedItem, setSelectedItem] = useState('random');
  const arrowOpen: any = useRef();
  const onPress = () => arrowOpen.current.onDownArrow();

  useEffect(() => {
    console.log(selectedItem);
  }, [selectedItem]);
  return (
    <TouchableOpacity onPress={onPress}>
      <RNPickerSelect
        onValueChange={value => setSelectedItem(value)}
        items={items}
        useNativeAndroidPickerStyle={false}
        style={styles}
        value={selectedItem}
        ref={arrowOpen}
      />
    </TouchableOpacity>
  );
};

export default NAPokemonPicker;

const styles = StyleSheet.create({});
