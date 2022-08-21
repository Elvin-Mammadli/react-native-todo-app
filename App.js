import React from 'react';
import { Text, SafeAreaView, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.body}>
      <Text>Hid</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'red',
    flex: 1,
    marginRight: 16
  }
})