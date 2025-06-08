import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, Text, TextInput, useTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAuthContext} from '../../../lib/auth-context';

const AuthScreen = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<string | null>(null);

  const theme = useTheme();

  const {signIn, signUp} = useAuthContext();

  const handleSwitchAuth = () => {
    setEmail('');
    setPassword('');
    setErrors(null);
    setIsSignUp(prev => !prev);
  };

  const handleAuth = async () => {
    if (!email || !password) {
      return setErrors('Please fill in all fields');
    }
    if (password.length < 6) {
      return setErrors('Passwords must be at least 6 characters long');
    }
    if (isSignUp) {
      const error = await signUp(email, password);
      if (error) {
        return setErrors(error);
      }
    } else {
      const error = await signIn(email, password);
      if (error) {
        return setErrors(error);
      }
    }
  };

  useEffect(() => {
    if (email && password) {
      setErrors(null);
    }
  }, [email, password]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
          {isSignUp ? 'Create Account' : 'Welcome back'}
        </Text>
        <TextInput
          label="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="example@gmail.com"
          mode="outlined"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          label="Password"
          autoCapitalize="none"
          placeholder="Your password"
          mode="outlined"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        {errors && <Text style={{color: theme.colors.error}}>{errors}</Text>}
        <Button style={styles.button} mode="contained" onPress={handleAuth}>
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </Button>
        <Button
          style={styles.switchModeButton}
          mode="text"
          onPress={handleSwitchAuth}>
          {isSignUp
            ? 'Already have an account? Sign In'
            : "Don't have an account? Sign Up"}
        </Button>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#f5f5f5',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
  },
  button: {
    marginTop: 5,
  },
  switchModeButton: {
    marginTop: 8,
  },
});
