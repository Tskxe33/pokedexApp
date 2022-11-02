import {FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Fonts} from '../../constants/Fonts';
import {Colors} from '../../constants/Colors';
import {TypeItem} from '../../models/Pokemon';
import TypesListItem from '../molecules/TypesListItem';

interface TypesListProps {
  allTypes: TypeItem[];
}

const TypesList: React.FC<TypesListProps> = ({allTypes}) => {
  const handleRenderListItem: ListRenderItem<TypeItem> = ({
    item,
  }: {
    item: TypeItem;
  }) => {
    return <TypesListItem item={item} />;
  };

  return (
    <View>
      <FlatList
        data={allTypes}
        ListHeaderComponent={<Text style={styles.typesList}>Types List</Text>}
        renderItem={handleRenderListItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default TypesList;

const styles = StyleSheet.create({
  typesList: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 20,
    fontFamily: Fonts.ROBOTO_REGULAR,
    color: Colors.COLOR_BLACK,
  },
  listContainer: {
    marginTop: 20,
  },
});
