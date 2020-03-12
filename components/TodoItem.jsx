import React, {useState} from 'react';
import {
  Text, View,
  StyleSheet,
  CheckBox,
  Switch
} from 'react-native';
import { Icon } from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {
  fetchEditTodoStart,
  fetchRemoveTodoStart
} from '../store/actions/todoActions';

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ba9a83',
    paddingVertical: 30,
    paddingHorizontal: 15,
    marginTop: 30,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  itemTodo: {
    flex: 1,
  },
  itemRemove: {
  },
  checkBox: {
    marginRight: 30
  },
  title: {
    flex: 1,
    fontSize: 32,
  },
});

const TodoItem = (props) => {
  const {id, title, completed} = props.todo;
  const dispatch = useDispatch();
  const [todo, setTodo] = useState(props.todo);

  const changeCompletedTodoHandler = (id, title, completed) => {
    console.log('completed =', completed);
    dispatch(fetchEditTodoStart(id, title, completed !== 'on'));
    return !completed;
  };

  return (
    <View style={styles.item}>
      <View style={styles.itemTodo}>
        <Switch
          style={styles.checkBox}
          type="checkbox"
          value={completed}
          onValueChange={(event) => changeCompletedTodoHandler(id, title, event.target.value)}
        />
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.itemRemove}>
        <Icon
          name='window-close-o'
          type='font-awesome'
          color='#f02849'
          size={35}
          onPress={() => dispatch(fetchRemoveTodoStart(id))}
        />
      </View>
    </View>
  );
};

export default TodoItem;
