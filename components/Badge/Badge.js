import React, {useRef, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';
import {horizontalScale} from '../../assets/styles/scaling';

const Badge = props => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 10;

  //tab 너비는 한쪽의 가로 패딩값 x2 에 텍스트 너비 더함
  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };
  return (
    <View style={[style.badge, tabWidth]}>
      <Text
        onTextLayout={event => {
          //console.log('event', event.nativeEvent);
          setWidth(event.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={style.title}>
        {props.title}
      </Text>
    </View>
  );
};

Badge.default = {
  isInactive: false,
};

Badge.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Badge;
