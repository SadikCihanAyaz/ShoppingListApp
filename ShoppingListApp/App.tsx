import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import ButtonC from './components/ButtonC';
import Header from './components/Header/Header';
import TextInputC from './components/TextInputC';

const App = () => {
  const onChange = (data: string) => {
    console.log('data', data);
  };

  const onPress = (data?: string) => {
    console.log('onPress');
    console.log(data);
    //console.log(data2);
  };

  return (
    <SafeAreaView>
      <Header title="Shopping List" subTitle="easy way to shopping" />
      <Text>{'Text'}</Text>
      <TextInputC onChange={onChange} placeHolder="Test" />
      <ButtonC title="Add Item" onPress={onPress} />
    </SafeAreaView>
  );
};

export default App;
