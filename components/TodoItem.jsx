import React from 'react';
import {
  Text, View,
  StyleSheet,
  CheckBox
} from 'react-native';

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ba9a83',
    paddingVertical: 30,
    paddingHorizontal: 15,
    marginTop: 30,
  },
  itemCheckBox: {
    marginRight: 30
  },
  itemTodo: {

  },
  itemRemove: {
    width: '100%',
    flex: 1,
  },
  title: {
    fontSize: 32,
  }
});

const TodoItem = (props) => {
  const {title, completed} = props;

  return (
    <View style={styles.item}>
      <View style={styles.itemTodo}>
        <CheckBox
          style={styles.itemCheckBox}
          type="checkbox"
          value={completed}
          // onChange={() => !completed}
        />
        <Text>{title}</Text>
      </View>

      <View style={styles.itemRemove}>
        <Text>Remove</Text>
      </View>
    </View>
  );
};

export default TodoItem;
