import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  button: {
    backgroundColor: '#2979F2',
    height: verticalScale(55),
    borderRadius: horizontalScale(50),
    justifyContent: 'center',
  },
  disable: {
    opacity: 0.5,
  },
  title: {
    fontFamily: getFontFamily('Pretendard', '500'),
    color: '#ffffff',
    fontSize: scaleFontSize(16),
    textAlign: 'center',
  },
});

export default style;
