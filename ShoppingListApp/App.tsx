import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';
import AddItemC from './components/AddItemC';
import ButtonC from './components/ButtonC';
import Header from './components/Header/Header';
import TextInputC from './components/TextInputC';

const App = () => {
  const citem = 'Citem';
  const cqualtiy = 'Cquality';
  type addItem = {
    quality: string;
    item: string;
  };

  const [addItemArray, setAddItemArray] = useState<addItem[]>([]);
  const [cItem, setCItem] = useState('');
  const [cQualtiy, setCQuality] = useState('');

  const textInputChange = (data: string, id: string) => {
    console.log('textInputChange', data);
    console.log('id', id);

    if (id === 'Citem') {
      setCItem(data);
    } else if (id === 'Cquality') {
      setCQuality(data);
    }
  };

  const onPress = () => {
    console.log('click');

    let obj: addItem = {
      item: cItem,
      quality: cQualtiy,
    };

    setAddItemArray([...addItemArray, obj]);
  };

  useEffect(() => {
    console.log(addItemArray);
  }, [addItemArray]);

  return (
    <SafeAreaView>
      <Header title="Shopping List" subTitle="easy way to shopping" />
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
        {addItemArray.map((item: addItem, index) => {
          return (
            <View key={'key' + index}>
              <AddItemC ticket={item.item} label={item.quality} />
            </View>
          );
        })}
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
