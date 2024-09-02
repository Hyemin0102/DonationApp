import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  tab: {
    backgroundColor: '#2979F2',
    height: verticalScale(50),
    borderRadius: horizontalScale(100),
    justifyContent: 'center',
  },
  inactiveTab: {
    backgroundColor: '#F3F5F9',
  },
  title: {
    fontFamily: getFontFamily('Pretendard', '500'),
    color: '#ffffff',
    fontSize: scaleFontSize(14),
    textAlign: 'center',
  },
  inactiveTitle: {
    color: '#79869F',
  },
});

export default style;
