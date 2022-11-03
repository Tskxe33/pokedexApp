import {FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Pokemon} from 'pokenode-ts';
import GridListItem from '../molecules/GridListItem';
import {Fonts} from '../../constants/Fonts';
import {Colors} from '../../constants/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {updatePokemons} from '../../redux/actions/PokemonActions';
import {RootState} from '../../redux/reducers';

interface GridListProps {
  pokemons: Pokemon[];
}

const GridList: React.FC<GridListProps> = ({pokemons}) => {
  const dispatch = useDispatch<any>();
  const selectedType = useSelector(
    (state: RootState) => state.pokemons.selectedType,
  );

  const handleRenderListItem: ListRenderItem<Pokemon> = ({
    item,
  }: {
    item: Pokemon;
  }) => {
    return <GridListItem item={item} />;
  };

  const handleLoadMore = () => {
    dispatch(updatePokemons());
  };

  return (
    <View>
      <FlatList
        ListHeaderComponent={
          <Text style={styles.gridHeading}>Pokemon List</Text>
        }
        data={pokemons}
        renderItem={handleRenderListItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={1}
        numColumns={2}
      />
    </View>
  );
};

export default GridList;

const styles = StyleSheet.create({
  gridHeading: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 20,
    fontFamily: Fonts.ROBOTO_REGULAR,
    color: Colors.COLOR_BLACK,
  },
  listContainer: {
    paddingLeft: 15,
    paddingRight: 18,
    marginTop: 20,
    alignItems: 'center',
    paddingBottom: 60,
  },
});
