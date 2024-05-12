import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // Validation logic
    const usernameRegex = /^[a-zA-Z0-9]+$/;

    if (!usernameRegex.test(username)) {
      Alert.alert('Username must contain only letters and numbers');
      return;
    }

    if (password.length < 4) {
      Alert.alert('Password must be at least 4 characters long');
      return;
    }

    // Assuming successful login, navigate to AddItemPage
    navigation.navigate('AddItem');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'skyblue' }}>
      <View style={{ padding: 20, borderRadius: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 4, maxWidth: 400, width: '100%' }}>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>Login Here</Text>
        <TextInput
          placeholder="Enter your username"
          value={username}
          onChangeText={text => setUsername(text)}
          style={{ height: 40, width: '100%', marginBottom: 10, borderRadius: 4, borderWidth: 1, borderColor: '#ccc', paddingHorizontal: 10 }}
        />
        <TextInput
          placeholder="Enter your password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
          style={{ height: 40, width: '100%', marginBottom: 10, borderRadius: 4, borderWidth: 1, borderColor: '#ccc', paddingHorizontal: 10 }}
        />
        <Button title="Login" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default LoginPage;

