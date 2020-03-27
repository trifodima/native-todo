import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchTodoListStart } from '../../store/actions/todoActions';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import TodoList from '../../components/TodoList';


const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    // maxWidth: '700px',
  },
  todoList: {
    marginTop: 50,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});

const Home = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodoListStart(1));
  },  []);
  const { todoResults, loading } = useSelector(state => state.todoReducer);
  const todoList = todoResults.data;
  // const todoList = [
  //   {id: 1, title: 'Todo1', completed: true},
  //   {id: 2, title: 'Todo2', completed: false},
  //   {id: 3, title: 'Todo3', completed: true},
  // ];

  return (
    <View>
      <ScrollView style={styles.homePage}>

        <Text style={{fontSize: 35}} onPress={() => props.navigation.goBack()}>TodoList</Text>
        {
          !loading && (todoList && todoList.length)
            ? <TodoList
              todoList={todoList}
            />
            : <ActivityIndicator
              size="large"
              color="#ff9900"
            />
        }
      </ScrollView>
    </View>

  );
};

export default Home;
