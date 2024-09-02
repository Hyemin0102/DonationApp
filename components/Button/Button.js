import React from 'react';
import {Pressable, Text} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';
import {logPlugin} from '@babel/preset-env/lib/debug';

const Button = props => {
  return (
    <Pressable
      style={[style.button, props.isDisabled && style.disable]}
      disabled={props.isDisabled}
      onPress={props.onPress}>
      <Text style={style.title}>{props.title}</Text>
    </Pressable>
  );
};

Button.default = {
  isDisabled: false,
  onPress: () => {}, //빈 함수로 디폴트
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Button;
