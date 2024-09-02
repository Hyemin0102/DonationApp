import React, {useRef, useState} from 'react';
import {Pressable, Text} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';
import {horizontalScale} from '../../assets/styles/scaling';

const Tab = props => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 33;

  //tab 너비는 한쪽의 가로 패딩값 x2 에 텍스트 너비 더함
  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };
  return (
    <Pressable
      style={[style.tab, props.isInactive && style.inactiveTab, tabWidth]}
      disabled={props.isInactive}
      onPress={() => props.onPress()}>
      <Text
        onTextLayout={event => {
          //console.log('event', event.nativeEvent);
          setWidth(event.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[style.title, props.isInactive && style.inactiveTitle]}>
        {props.title}
      </Text>
    </Pressable>
  );
};

Tab.default = {
  isInactive: false,
  onPress: () => {}, //빈 함수로 디폴트
};

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  isInactive: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Tab;
