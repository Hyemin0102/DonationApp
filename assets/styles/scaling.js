import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const {width, height} = Dimensions.get('window');

//small 기기 확인
const isSmall = width <= 375 && !DeviceInfo.hasNotch();

//5인치 모바일 화면 크기 기준
const guidelineBaseWidth = () => {
  if (isSmall) {
    return 330;
  }
  return 350;
};

//375width 기기인 경우
//marginRight: horizontalScale(10) 하면 11px 정도가 생김
const horizontalScale = size => (width / guidelineBaseWidth()) * size;

const guidelineBaseHeight = () => {
  if (isSmall) {
    return 550;
  } else if (width > 410) {
    return 620;
  }
  return 680;
};

const verticalScale = size => (height / guidelineBaseHeight()) * size;

const guidelineBaseFonts = () => {
  if (width > 410) {
    return 430;
  }
  return 400;
};

//width 에 따라 폰트 사이즈 적용
const scaleFontSize = size => Math.round((width / guidelineBaseFonts()) * size);

export {horizontalScale, verticalScale, scaleFontSize};
