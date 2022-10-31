import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Fonts} from '../../constants/Fonts';
import {Colors} from '../../constants/Colors';

interface NATabBarItemProps {
  focused: boolean;
  title: string;
}

const NATabBarItem: React.FC<NATabBarItemProps> = ({focused, title}) => {
  return (
    <View>
      <Text style={focused ? styles.activeText : styles.text}>{title}</Text>
    </View>
  );
};

export default NATabBarItem;

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.ROBOTO_REGULAR,
    color: Colors.COLOR_GREY_LIGHT,
    fontSize: 18,
    lineHeight: 21,
  },

  activeText: {
    fontFamily: Fonts.ROBOTO_REGULAR,
    fontSize: 18,
    lineHeight: 21,
    color: Colors.COLOR_PRIMARY_DARK,
    textAlign: 'center',
  },

  activeContainer: {
    backgroundColor: Colors.COLOR_WHITE,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
