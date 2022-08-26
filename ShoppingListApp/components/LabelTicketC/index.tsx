import React from 'react';
import {View, Text} from 'react-native';
import style from './style';

interface Props {
  text: string;
}

const LabelTicketC: React.FC<Props> = props => {
  const {text} = props;
  return (
    <View style={style.container}>
      <Text style={style.text}>{text}</Text>
    </View>
  );
};

export default LabelTicketC;
