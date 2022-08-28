import React from 'react';
import style from './style';
import {View, Text} from 'react-native';
import LabelTicketC from '../LabelTicketC';

interface Props {
  ticket: string;
  label: string;
}

const AddItemC: React.FC<Props> = props => {
  const {ticket, label} = props;

  //return <LabelTicketC text={label} />;
  return (
    <View style={style.container}>
      <View style={style.textView}>
        <Text>{ticket}</Text>
      </View>

      <View style={style.addLabelView}>
        <LabelTicketC text={label} />
      </View>
    </View>
  );
};

export default AddItemC;
