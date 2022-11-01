import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PokemonDetailsScreenProps} from '../navigators/SwiperNavigator';
import {Colors, pokemonTypeBackgrounds} from '../constants/Colors';
import {Fonts} from '../constants/Fonts';
import {PokemonType, PokemonStat} from 'pokenode-ts';

const PokemonDetailsScreen: React.FC<PokemonDetailsScreenProps> = ({route}) => {
  const pokemonDetails = route.params.pokemonDetails;

  const handleRenderTypesItem = () => {
    return pokemonDetails.types.map((item: PokemonType) => (
      <View key={item.slot} style={styles.typeContainer}>
        <Text style={styles.typeTitle}>{item.type.name}</Text>
      </View>
    ));
  };

  const handleRenderStats = () => {
    return pokemonDetails.stats.map((item: PokemonStat, index: number) => (
      <View
        key={index}
        style={{...styles.typeContainer, ...styles.statsContainer}}>
        <Text style={styles.typeTitle}>{item.base_stat}</Text>
      </View>
    ));
  };

  return (
    <View
      style={{
        ...styles.pokemonDetailsContainer,
        backgroundColor:
          pokemonTypeBackgrounds[pokemonDetails.types[0].type.name],
      }}>
      <View style={styles.mainContainer}>
        <Text style={styles.pokemonName}>{pokemonDetails.name}</Text>

        <Image
          source={{uri: pokemonDetails.sprites.other?.home.front_default}}
          style={styles.image}
        />

        <View style={styles.borderContainer}>{handleRenderTypesItem()}</View>

        <View style={styles.mesurmentsContainer}>
          <Text style={styles.typeTitle}>height: {pokemonDetails.height}</Text>
          <Text style={styles.typeTitle}>Weight: {pokemonDetails.weight}</Text>
        </View>

        <Text style={styles.typeTitle}>Stats</Text>
        <View style={styles.statsContainer}>{handleRenderStats()}</View>
      </View>
    </View>
  );
};

export default PokemonDetailsScreen;

const styles = StyleSheet.create({
  pokemonDetailsContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 29,
  },

  image: {width: 200, height: 200, marginBottom: 33},

  pokemonName: {
    fontFamily: Fonts.ROBOTO_BOLD,
    textTransform: 'capitalize',
    color: Colors.COLOR_WHITE,
    fontSize: 30,
    letterSpacing: 1,
  },

  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  borderContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  typeContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.COLOR_WHITE,
  },

  typeTitle: {
    fontSize: 18,
    color: Colors.COLOR_WHITE,
    textAlign: 'center',
  },

  mesurmentsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 30,
  },

  statsContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginRight: 4,
  },
});
