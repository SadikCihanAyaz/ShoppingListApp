import React from 'react';
import {Text, Pressable} from 'react-native';
import style from './style';

interface Props {
  title: string;
  onPress(): void;
}

const ButtonC: React.FC<Props> = props => {
  const {title, onPress} = props;
  return (
    <Pressable
      style={[style.container, style.center]}
      onPress={onPress.bind(undefined, '2')}>
      <Text style={style.text}>{title}</Text>
    </Pressable>
  );
};

export default ButtonC;
