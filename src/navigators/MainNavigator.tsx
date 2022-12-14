import React from 'react';
import {StyleSheet, View, Platform, Text} from 'react-native';

import {AppRoute} from '../constants/AppRoute';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {RouteProp} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SwiperNavigator from './SwiperNavigator';
import {Colors} from '../constants/Colors';
import NATabBarItem from '../components/atoms/NATabBarItem';
import GridNavigator from './GridNavigator';
import TypesNavigator from './TypesNavigator';
import {Images} from '../constants/Images';

export type MainNavigatorParamList = {
  [AppRoute.SWIPER_NAVIGATOR]: undefined;
  [AppRoute.GRID_NAVIGATOR]: undefined;
  [AppRoute.TYPES_NAVIGATOR]: undefined;
};

export interface Props<Screen extends keyof MainNavigatorParamList> {
  navigation: NativeStackNavigationProp<MainNavigatorParamList, Screen>;
  route: RouteProp<MainNavigatorParamList, Screen>;
}

export type SwiperNavigatorComponentProps = Props<AppRoute.SWIPER_NAVIGATOR>;
export type GridNavigatorComponentProps = Props<AppRoute.GRID_NAVIGATOR>;
export type TypesNavigatorComponentProps = Props<AppRoute.TYPES_NAVIGATOR>;

const Tab = createBottomTabNavigator<MainNavigatorParamList>();

const MainNavigator: React.FC = () => {
  const tabBackground = <View style={styles.viewContainer}></View>;
  return (
    <Tab.Navigator
      initialRouteName={AppRoute.SWIPER_NAVIGATOR}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.mainNavigator,
      }}>
      <Tab.Screen
        name={AppRoute.SWIPER_NAVIGATOR}
        component={SwiperNavigator}
        options={() => ({
          tabBarIcon: ({focused}) => (
            <NATabBarItem
              focused={focused}
              title={'Swiper'}
              icon={Images.SWIPE_ICON}
            />
          ),
          tabBarBackground: () => tabBackground,
        })}
      />
      <Tab.Screen
        name={AppRoute.GRID_NAVIGATOR}
        component={GridNavigator}
        options={() => ({
          tabBarIcon: ({focused}) => (
            <NATabBarItem
              focused={focused}
              title={'Grid'}
              icon={Images.GRID_ICON}
            />
          ),
          tabBarBackground: () => tabBackground,
        })}
      />

      <Tab.Screen
        name={AppRoute.TYPES_NAVIGATOR}
        component={TypesNavigator}
        options={() => ({
          tabBarIcon: ({focused}) => (
            <NATabBarItem
              focused={focused}
              title={'Types'}
              icon={Images.TYPES_ICON}
            />
          ),
          tabBarBackground: () => tabBackground,
        })}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: Colors.COLOR_PRIMARY,
    ...StyleSheet.absoluteFillObject,
  },

  mainNavigator: {
    height: Platform.OS === 'ios' ? 90 : 78,
  },
});
