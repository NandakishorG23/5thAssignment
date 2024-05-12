import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';

const AddItemPage = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  const addItem = () => {
    if (!text.trim()) return;
    setItems(prevItems => [
      ...prevItems,
      { id: Math.random().toString(), text }
    ]);
    setText('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Shopping List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add new item..."
          value={text}
          onChangeText={setText}
        />
        <Button title="Add" onPress={addItem} />
      </View>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <View style={styles.listItem}><Text>{item.text}</Text></View>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'skyblue',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'brown',
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 5,
    borderColor: 'skyblue',
  },
});

export default AddItemPage;
