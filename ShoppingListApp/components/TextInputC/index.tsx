import React from 'react';
import {TextInput} from 'react-native';
import style from './style';

interface Props {
  onChange(change: string, id?: string): void;
  placeHolder?: string;
  uniqeId: string;
}

const TextInputC: React.FC<Props> = props => {
  const {uniqeId, onChange, placeHolder} = props;

  const textChange = (text: string) => {
    onChange(text, uniqeId);
  };

  return (
    <TextInput
      style={style.container}
      onChangeText={textChange}
      placeholder={placeHolder || ''}
    />
  );
};

export default TextInputC;
