import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {scaleFontSize} from '../../assets/styles/scaling';

const style = StyleSheet.create({
    title1: {
        fontFamily: getFontFamily('Pretendard', '600'),
        fontSize: scaleFontSize(24),
        lineHeight: scaleFontSize(29),
    },
    title2: {
        fontFamily: getFontFamily('Pretendard', '600'),
        fontSize: scaleFontSize(18),
        lineHeight: scaleFontSize(22),
    },
    title3: {
        fontFamily: getFontFamily('Pretendard', '600'),
        fontSize: scaleFontSize(16),
        lineHeight: scaleFontSize(19),
    },
});

export default style;
