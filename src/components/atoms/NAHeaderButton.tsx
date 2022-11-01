import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Fonts} from '../../constants/Fonts';
import {Colors} from '../../constants/Colors';

interface NAHeaderButton {
  onPress: () => void;
}

const NAHeaderButton: React.FC<NAHeaderButton> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.buttonText}>Logout</Text>
    </TouchableOpacity>
  );
};

export default NAHeaderButton;

const styles = StyleSheet.create({
  buttonText: {
    fontFamily: Fonts.ROBOTO_REGULAR,
    fontSize: 18,
    color: Colors.COLOR_BLACK,
    paddingHorizontal: 18,
  },
});
