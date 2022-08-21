import React from 'react';
import {View, Text} from 'react-native';
import style from './style';

interface Props {
  title: string;
  subTitle?: string;
}

const Header: React.FC<Props> = props => {
  const {title} = props;

  return (
    <View style={[style.container]}>
      <Text>{title}</Text>
    </View>
  );
};

export default Header;
