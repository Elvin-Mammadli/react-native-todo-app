import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

const Todo = ({ text, deleteTodo }) => {
  return (
    <View style={styles.todoBox}>
      <Text style={styles.todoText}>
        {text}
      </Text>
      <TouchableOpacity 
      style={styles.deleteBtn}
      onPress={deleteTodo}
      >
        <Text style={styles.deleteText}>X</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Todo;