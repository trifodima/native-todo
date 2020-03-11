import React, {useEffect} from 'react';
// import './styles.js';
import {useDispatch, useSelector} from 'react-redux';
import { fetchTodoListStart } from '../../store/actions/todoActions';
import {
  View,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import TodoList from '../../components/TodoList';

const styles = StyleSheet.create({
  homePage: {
    width: '100%',
    justifyContent: 'center',
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  todoList: {
    marginTop: 50,
  }
});

const Home = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodoListStart(1));
  },  []);
  const { todoResults, loading } = useSelector(state => state.todoReducer);
  const todoList = todoResults.data;

  return (
    <View style={styles.homePage}>
      {
        !loading && todoList && todoList.length
          ?  <TodoList
            todoList={todoList}
          />
          : <ActivityIndicator
            size="large"
            color="#ff9900"
          />
      }
    </View>
  );
};

export default Home;
