import React from 'react';
import {Pressable, Text} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const Button = ({isDisabled = 'false', onPress = () => {}, title}) => {
  return (
    <Pressable
      style={[style.button, isDisabled && style.disable]}
      disabled={isDisabled}
      onPress={onPress}>
      <Text style={style.title}>{title}</Text>
    </Pressable>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Button;
