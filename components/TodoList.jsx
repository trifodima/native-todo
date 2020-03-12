import React, {useState} from 'react';
import {
  Button,
  FlatList, SafeAreaView, StyleSheet,
  TextInput, View,
} from 'react-native';
import TodoItem from './TodoItem';
import {useDispatch} from 'react-redux';
import {fetchCreateTodoStart} from '../store/actions/todoActions';

const styles = StyleSheet.create({
  todoList: {
    marginVertical: 30,
    marginHorizontal: 15,
  },
  createInput: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
    fontSize: 18,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
  createButton: {
    paddingVertical: 30,
    paddingHorizontal: 10,
    fontSize: 18,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
  createForm: {
    flex: 1
  },
});

const TodoList = ({todoList}) => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const createTodoHandler = () => {
    dispatch(fetchCreateTodoStart(title));
    setTitle('');
  };

  return (
    <View style={styles.todoList}>
      <View style={styles.createForm}>
        <TextInput
          style={styles.createInput}
          placeholder={'Write new todo...'}
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <Button
          style={styles.createButton}
          onPress={createTodoHandler}
          title="Add"
          color="#841584"
        />
      </View>

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
