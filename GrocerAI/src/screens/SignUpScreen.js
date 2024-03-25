import React from 'react';
import { View, Button } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  const handleSignIn = () => {
    navigation.navigate('SignIn');
  };

  const handleSignUp = () => {
    // Implement sign-up logic
    // Redirect to HomeScreen if successful
    navigation.navigate('Home');
  };

  return (
    <View>
      <Button title="Sign In" onPress={handleSignIn} />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

export default SignUpScreen;
