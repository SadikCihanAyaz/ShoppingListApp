import React from 'react';
import {TextInput} from 'react-native';
import style from './style';

interface Props {
  onChange(change: string): void;
  placeHolder?: string;
}

const TextInputC: React.FC<Props> = props => {
  const {onChange, placeHolder} = props;
  return (
    <TextInput
      style={style.container}
      onChangeText={onChange}
      placeholder={placeHolder || ''}
    />
  );
};

export default TextInputC;
