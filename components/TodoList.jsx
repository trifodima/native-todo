import React, {useState} from 'react';
import {
  Alert,
  FlatList, SafeAreaView, StyleSheet, Text,
  TextInput, TouchableOpacity, View,
} from 'react-native';
import TodoItem from './TodoItem';
import { useDispatch } from 'react-redux';
import { fetchCreateTodoStart } from '../store/actions/todoActions';
import AddTodo from './AddTodo';

const styles = StyleSheet.create({
  todoList: {
    marginVertical: 30,
    marginHorizontal: 15,
  },
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

const TodoList = ({todoList}) => {
  return (
    <View style={styles.todoList}>
      <AddTodo />
      <SafeAreaView>
        <FlatList
          data={todoList}
          renderItem={({ item }) => (
            <TodoItem
              todo={item}
            />
          )}
          keyExtractor={todo => todo.id.toString()}
        />
      </SafeAreaView>
    </View>
  );
};

export default TodoList;
