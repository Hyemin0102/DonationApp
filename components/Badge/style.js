import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  badge: {
    backgroundColor: '#145855',
    height: verticalScale(22),
    borderRadius: horizontalScale(100),
    justifyContent: 'center',
  },
  title: {
    fontFamily: getFontFamily('Pretendard', '600'),
    color: '#ffffff',
    fontSize: scaleFontSize(10),
    textAlign: 'center',
  },
});

export default style;
