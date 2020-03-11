import React from 'react';
import {
  FlatList, SafeAreaView, StyleSheet,
  TextInput, View,

} from 'react-native';
import TodoItem from './TodoItem';

const styles = StyleSheet.create({
  todoList: {
    justifyContent: 'space-between',
    marginVertical: 50,
  },
  createInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  }
});
const TodoList = ({todoList}) => {
  return (
    <View style={styles.todoList}>
      <TextInput
        style={styles.createInput}
        placeholder={'Write new todo...'}
      />
      {/*<SafeAreaView style={styles.container}>*/}
      <FlatList
        data={todoList}
        renderItem={({ item }) => (
          <TodoItem
            {...item}
          />
        )}
        keyExtractor={todo => todo.id.toString()}
      />
      {/*</SafeAreaView>*/}
    </View>
  );
};

export default TodoList;
