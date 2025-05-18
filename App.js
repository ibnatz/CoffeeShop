import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateAccountScreen from './components/Login';
import SignInScreen from './components/SignIn';
import { Text, View, Button, StyleSheet } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Welcome to the App!</Text>
      <Button title="Go to Sign Up" onPress={() => navigation.navigate('CreateAccount')} />
      <Button title="Go to Sign In" onPress={() => navigation.navigate('SignIn')} color="gray" />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#fff',
  },
});
