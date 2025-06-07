import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Text
        onPress={() =>
          navigation.navigate('DetailUser', {
            userId: 123,
            name: 'Nguyễn Văn A',
          })
        }>
        Go to detail user
      </Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
