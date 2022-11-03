import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Fonts} from '../../constants/Fonts';
import {Colors} from '../../constants/Colors';

interface NATabBarItemProps {
  focused: boolean;
  title: string;
  icon: any;
}

const NATabBarItem: React.FC<NATabBarItemProps> = ({focused, title, icon}) => {
  return (
    <View style={styles.tabBarItemContainer}>
      <Image source={icon} style={focused ? styles.iconActive : styles.icon} />
      <Text style={focused ? styles.activeText : styles.text}>{title}</Text>
    </View>
  );
};

export default NATabBarItem;

const styles = StyleSheet.create({
  tabBarItemContainer: {
    marginTop: 5,
    alignItems: 'center',
  },

  iconActive: {
    opacity: 1,
  },

  icon: {
    opacity: 0.5,
  },

  text: {
    fontFamily: Fonts.ROBOTO_REGULAR,
    color: Colors.COLOR_WHITE,
    fontSize: 18,
    lineHeight: 21,
    textTransform: 'uppercase',
    opacity: 0.5,
  },

  activeText: {
    fontFamily: Fonts.ROBOTO_REGULAR,
    fontSize: 18,
    lineHeight: 21,
    color: Colors.COLOR_WHITE,
    textAlign: 'center',
    textTransform: 'uppercase',
  },

  activeContainer: {
    backgroundColor: Colors.COLOR_WHITE,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
