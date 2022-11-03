import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';
import {Images} from '../../constants/Images';
import {Fonts} from '../../constants/Fonts';

interface NALoginButtonProps {
  handleSignIn: () => Promise<void>;
  title: string;
}

const NALoginButton: React.FC<NALoginButtonProps> = ({handleSignIn, title}) => {
  return (
    <TouchableOpacity
      onPress={handleSignIn}
      style={styles.buttonContainer}
      activeOpacity={1}>
      <Image source={Images.GOOGLE_ICON} />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default NALoginButton;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: Colors.COLOR_WHITE,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginTop: 50,
  },

  buttonText: {
    fontFamily: Fonts.ROBOTO_REGULAR,
    marginLeft: 14,
    fontSize: 16,
    color: Colors.COLOR_GREY_DARK,
  },
});
