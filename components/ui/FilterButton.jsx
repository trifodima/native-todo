import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchFilteredTodoListStart} from '../../store/actions/todoActions';


const FilterButton = ({children, filter}) => {
  // const [currentFilter, setCurrentFilter] = useState('all');
  const { currentFilter } = useSelector(state => state.todoReducer);
  const dispatch = useDispatch();

  const filterTodoHandler = () => {
    dispatch(fetchFilteredTodoListStart(1, filter));
  };

  return (
    <TouchableOpacity
      style={[styles.button, (filter === currentFilter) && styles.activeButton]}
      onPress={() => filterTodoHandler(filter)}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    marginHorizontal: 5,
    padding: 15,
    backgroundColor: 'rgb(0, 122, 255)',
    borderRadius: 10,
    position: 'relative',
  },
  activeButton: {
    backgroundColor: 'rgb(0, 66, 122)',
  },
  buttonText: {
    color: '#fff',
  },
});

export default FilterButton;
