import React, {useEffect} from 'react';
// import './styles.js';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCreateTodoStart, fetchTodoListStart} from '../../store/actions/todoActions';
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
  }
});

const Home = (props) => {
  console.log('props = ', props);

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
      <ScrollView style={styles.homePage}>
        <Text style={{fontSize: 35}} onPress={() => props.navigation.goBack()}>TodoList</Text>
        {
          !loading && (todoList && todoList.length)
            ?  <TodoList
              todoList={todoList}
            />
            : <ActivityIndicator
              size="large"
              color="#ff9900"
            />
        }

      </ScrollView>
  );
};

export default Home;
