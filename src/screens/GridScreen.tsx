import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/reducers';
import GridList from '../components/organism/GridList';
import {Colors} from '../constants/Colors';
import NAPopup from '../components/atoms/NAPopup';

const GridScreen = () => {
  const pokemons = useSelector((state: RootState) => state.pokemons.pokemons);
  return (
    <>
      <View style={styles.gridContainer}>
        <GridList pokemons={pokemons} />
      </View>
      <NAPopup title={`Are you sure you want to log out?`} />
    </>
  );
};

export default GridScreen;

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    backgroundColor: Colors.COLOR_WHITE,
  },
});
