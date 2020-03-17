import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import FilterButton from './ui/FilterButton';
import { useSelector } from 'react-redux';

const TodoFilters = () => {
  return (
    <View style={styles.buttonGroup}>
      <FilterButton
        filter="all"
      >All</FilterButton>
      <FilterButton
        filter="active"
      >Active</FilterButton>
      <FilterButton
        filter="completed"
      >Completed</FilterButton>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    marginVertical: 15,
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
});
export default TodoFilters;
