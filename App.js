import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { styles } from './styles';
import Todo from './Todo';


export default function App() {
  const [newTask, setNewTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTask = () => setTodos(prev => [...prev, newTask]);
  const handleDelete = (index) => {
    let arr = [...todos];
    arr.splice(index, 1);
    setTodos(arr);
  }
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
      <TouchableOpacity style={styles.addBtn}
        onPress={handleAddTask}
      >
        <Text style={styles.btnText}>
          Add task
        </Text>
      </TouchableOpacity>
      <View style={styles.divider}></View>
      <FlatList style={styles.todosContainer}
        extraData={todos}
        data={todos}
        renderItem={({ item, index }) => (
          <Todo
            text={item}
            deleteTodo={() => handleDelete(index)}
          />
        )}
        keyExtractor={(item) => item + Date.now() + Math.random()}
      />

    </View>
  )
}

