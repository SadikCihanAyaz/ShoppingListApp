import React, {useRef} from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import ButtonC from './components/ButtonC';
import Header from './components/Header/Header';
import TextInputC from './components/TextInputC';

const App = () => {
  const citem = 'Citem';
  const cqualtiy = 'Cquality';

  const textInputChange = (data: string, id: string) => {
    console.log('textInputChange', data);
    console.log('id', id);
  };

  const onPress = () => {
    console.log('click');
  };

  return (
    <SafeAreaView>
      <Header title="Shopping List" subTitle="easy way to shopping" />
      <Text>{'Text'}</Text>
      <View style={style.itemContainer}>
        <View style={style.component}>
          <TextInputC
            uniqeId={citem}
            onChange={textInputChange}
            placeHolder="Enter Item"
          />
        </View>
        <View style={style.component}>
          <TextInputC
            uniqeId={cqualtiy}
            onChange={textInputChange}
            placeHolder="Enter Quality"
          />
        </View>
        <View style={style.component}>
          <ButtonC onPress={onPress} title="Add Item" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  itemContainer: {
    padding: 15,
  },
  component: {
    paddingBottom: 15,
  },
});
