import React, {useEffect} from 'react';
// import './styles.js';
import {useDispatch, useSelector} from 'react-redux';
import { fetchTodoListStart } from '../../store/actions/todoActions';
import {
  View, Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  homePage: {
    // width: '100%',
    display: 'block',
    justifyContent: 'center',
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  todoText: {
    marginTop: 50,
  }
});

const Home = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodoListStart(1));
  },  []);
  const { todoResults, loading } = useSelector(state => state.todoReducer);
  console.log(todoResults);
  const todoList = todoResults.data;
  console.log(todoList);

  return (
    <View style={styles.homePage}>
      {
        !loading && todoList && todoList.length
          ? <View>
            <Text>{todoList[0].title}</Text>
          </View>
          : <ActivityIndicator
            size="large"
            color="#ff9900"
          />
      }
    </View>
  );
};

export default Home;
