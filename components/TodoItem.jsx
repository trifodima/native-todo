import React, {useEffect, useRef, useState} from 'react';
import {
  Text, View,
  StyleSheet,
  Switch, TextInput
} from 'react-native';
import { Icon } from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {
  fetchEditTodoStart,
  fetchRemoveTodoStart,
} from '../store/actions/todoActions';

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'rgba(219,174,255,0.36)',

    paddingHorizontal: 15,
    marginTop: 30,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  itemTodo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  itemRemove: {
    marginLeft: 30
  },
  checkBox: {
    marginRight: 30
  },
  titleBlock: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 20,
  },
  title: {
    flex: 1,
    fontSize: 30,
    lineHeight: 46,
  },
  hidden: {
    display: 'none',
  },
  editInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 30,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
});

const TodoItem = (props) => {
  const {id, title, completed} = props.todo;
  const dispatch = useDispatch();
  const editInputRef = useRef();
  const [isEdit, setIsEdit] = useState(false);

  const changeCompletedTodoHandler = (completed) => {
    dispatch(fetchEditTodoStart(id, title, completed));
  };
  const changeTitle = (title) => {
    dispatch(fetchEditTodoStart(id, title, completed));
  };
  const beginEdit = (event) => {
    console.log('EVENT = ', event.target.value);
    console.log('editInputRef = ', editInputRef.current);
    editInputRef.current.focus();
    setIsEdit(!isEdit);
  };
  const doneEdit = (event) => {
    setIsEdit(!isEdit);
  };
  return (
    <View style={styles.item}>
      <View style={styles.itemTodo}>
        <Switch
          style={styles.checkBox}
          type="checkbox"
          value={completed}
          onChange={(event) => changeCompletedTodoHandler(id, title, event.target.value)}
          onValueChange={changeCompletedTodoHandler}
        />
        <View style={styles.titleBlock}>
          <Text
            style={[styles.title, isEdit && styles.hidden]}
            onPress={(event) => beginEdit(event)}
          >
            {title}
          </Text>
          <TextInput
            ref={editInputRef}
            style={[styles.editInput, !isEdit && styles.hidden]}
            type="text"
            value={title}
            onChangeText={changeTitle}
            onBlur={doneEdit}
          />
        </View>
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
