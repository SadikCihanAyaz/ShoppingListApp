import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Header from './components/Header/Header';

const App = () => {
  return (
    <SafeAreaView>
      <Header title="Shopping List" subTitle="easy way to shopping" />
      <Text>{'Text'}</Text>
    </SafeAreaView>
  );
};

export default App;
