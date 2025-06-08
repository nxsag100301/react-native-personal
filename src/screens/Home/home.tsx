import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Text
        onPress={() =>
          navigation.navigate('DetailUser', {
            userId: 123,
          })
        }>
        Go to detail user
      </Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
