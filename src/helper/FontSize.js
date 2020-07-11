import { Platform, StatusBar, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
const deviceHeight = isIphoneX()
  ? height - 78
  : Platform.OS === 'android'
  ? height - StatusBar.currentHeight
  : height;
/**
 * list of font sizes to use in style of view object in app
 */
export default {
  HEADER: RFValue(23.46),
  HEADER_HEIGHT: RFValue(33),
  TITLE: RFValue(22),
  TITLE_HEIGHT: RFValue(29.33),
  SUBTITLE: RFValue(17.6),
  SUBTITLE_HEIGHT: RFValue(24.93),
  ITEM: RFValue(14.52),
  CONTENT: RFValue(14),
  CONTENT_HEIGHT: RFValue(16.35),
  MEDIUM: RFValue(11.44),
  SMALL: RFValue(10.19),
  CHAT: RFValue(12.65),
  BUTTON: RFValue(15.1),
  TOAST: RFValue(13.27),
};

function RFValue(percent) {
  const heightPercent = (percent * deviceHeight) / 680;
  return Math.round(heightPercent);
}

function isIphoneX() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 || dimen.width === 812 || dimen.height === 896 || dimen.width === 896)
  );
}
