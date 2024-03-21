import React from 'react';
import { View, Button } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleSignIn = () => {
    // Implement sign-in logic
    // Redirect to HomeScreen if successful
    navigation.navigate('Home');
  };

  return (
    <View>
      <Button title="Sign Up" onPress={handleSignUp} />
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

export default SignInScreen;
