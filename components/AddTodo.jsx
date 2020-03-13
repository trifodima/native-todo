import React, {useState} from 'react';
import {Alert, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {fetchCreateTodoStart} from '../store/actions/todoActions';
const styles = StyleSheet.create({
  createInput: {
    flex: 1,
    height: 60,
    paddingHorizontal: 10,
    fontSize: 20,
    borderColor: 'gray',
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  createForm: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#651365',
    paddingHorizontal: 30,
    height: 60,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,

  },
  buttonText: {
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 25,
  },
});
const AddTodo = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const createTodoHandler = () => {
    dispatch(fetchCreateTodoStart(title));
    setTitle('');
  };

  return (
    <View style={styles.createForm}>
      <TextInput
        style={styles.createInput}
        placeholder={'Write new todo...'}
        onChange={(event) => setTitle(event.target.value)}
      />
      <TouchableOpacity
        style={styles.createButton}
        onPress={createTodoHandler}
      >
        <Text style={styles.buttonText}>Add</Text>
        {/*<Button*/}
        {/*  style={styles.createButton}*/}
        {/*  onPress={createTodoHandler}*/}
        {/*  title="Add"*/}
        {/*  color="#841584"*/}
        {/*/>*/}
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;
