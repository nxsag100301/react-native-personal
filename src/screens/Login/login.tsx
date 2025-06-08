import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Login = () => {
  return (
    <SafeAreaView>
      <Text style={styles.test}>Login</Text>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  test: {
    fontSize: 16,
  },
});
