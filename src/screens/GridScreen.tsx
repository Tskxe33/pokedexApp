import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/reducers';
import GridList from '../components/organism/GridList';
import {Colors} from '../constants/Colors';
import NAPokemonPicker from '../components/molecules/NAPokemonPicker';

const GridScreen = () => {
  const pokemons = useSelector((state: RootState) => state.pokemons.pokemons);

  return (
    <View style={styles.gridContainer}>
      <GridList pokemons={pokemons} />
    </View>
  );
};

export default GridScreen;

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    paddingHorizontal: 29,
    backgroundColor: Colors.COLOR_WHITE,
  },
});
