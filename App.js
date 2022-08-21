import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';


export default function App() {
  const [newTask, setNewTask] = useState('');
  return (
    <View style={styles.body}>
      <Text style={styles.title}>My Tasks</Text>
      <Text style={styles.subtitle}>
        Enter your todo task
      </Text>

      <TextInput 
        style={styles.input}
        placeholder="Enter your task"
        onChangeText={(input) => setNewTask(input)}
      />
      <TouchableOpacity style={styles.addBtn}>
        <Text style={styles.btnText}>
          Add task
        </Text>
      </TouchableOpacity>
    </View>
  )
}

