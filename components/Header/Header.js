import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const Header = ({title = '', type = 1, color = '#000', ...otherProps}) => {
  const styleToApply = () => {
    switch (type) {
      case 1:
        return style.title1;
      case 2:
        return style.title2;
      case 3:
        return style.title3;
      default:
        return style.title1;
    }
  };

  return (
    <View>
      <Text style={[styleToApply(), color && {color: color}]}>{title}</Text>
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  type: PropTypes.number,
  color: PropTypes.string,
};

export default Header;
