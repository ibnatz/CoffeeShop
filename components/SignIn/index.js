import  { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
// import {  signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebaseConfig'; // Adjust path based on your project structure


export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
  if (!email || !password) {
    Alert.alert('Error', 'Please fill in both fields');
    return;
  }

//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//     Alert.alert('Success', `Signed in as ${email}`);
//     // navigation.navigate('Home'); // Optional redirect
//   } catch (error) {
//     Alert.alert('Login Failed', error.message);
//   }
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button title="Sign In" onPress={handleSignIn} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Back to Sign Up" onPress={() => navigation.navigate('CreateAccount')} color="gray" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    marginBottom: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 12,
    marginBottom: 16,
    borderRadius: 8,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 10,
  },
});
