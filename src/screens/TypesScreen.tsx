import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/reducers';
import TypesList from '../components/organism/TypesList';
import NAPopup from '../components/atoms/NAPopup';

const TypesScreen = () => {
  const allTypes = useSelector((state: RootState) => state.pokemons.allTypes);

  return (
    <>
      <View style={styles.typesContainer}>
        <TypesList allTypes={allTypes} />
      </View>
      <NAPopup title={`Are you sure you want to log out?`} />
    </>
  );
};

export default TypesScreen;

const styles = StyleSheet.create({
  typesContainer: {
    flex: 1,
    paddingHorizontal: 29,
    backgroundColor: Colors.COLOR_WHITE,
  },
});
