import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  searchInput: {
    flex: 1,
    marginLeft: horizontalScale(6),
    height: '100%',
    fontFamily: getFontFamily('Pretendard', '400'),
    fontSize: scaleFontSize(14),
    color: '#686C7A',
  },
  searchInputContainer: {
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(16),
    backgroundColor: '#F3F5F9',
    borderRadius: horizontalScale(15),
    height: verticalScale(50),
    alignItems: 'center',
  },
});

export default style;
