import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './screens/LoginPage';
import AddItemPage from './screens/AddItemPage';

const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name="LoginPage" component={LoginPage} options={{ title: 'Login' }} />
        <Stack.Screen name="AddItem" component={AddItemPage} options={{ title: 'Add Item' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}

