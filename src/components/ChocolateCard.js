import React, { Component } from 'react';
import {
  Text,
  View,
  I18nManager,
  ImageSourcePropType,
  ViewStyle,
  TextStyle,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from './Button';
import Values from '../configs/Values';
import FontSize from '../helper/FontSize';

type PropsType = {
  /**
   * @property
   * study title
   */
  title: String,
  /**
   * @property
   * study snapshot text
   */
  text: String,
  /**
   * @property
   * image source,
   * study button have a image default,
   * if you have url enter value exp: { uri: Your url } or
   * if you have local image use require('path')
   */
  imageSource: ImageSourcePropType,
  /**
   * @property
   * button style, you can enter styles array
   */
  style?: ViewStyle | ViewStyle[],
  /**
   * @function
   * action for style button onPress
   */
  onPress: Function,
  /**
   * @property
   * title style,
   * style item have a title default,
   */
  titleStyle?: TextStyle | TextStyle[],
  /**
   * @property
   * text style,
   * style item have a text default,
   */
  textStyle?: TextStyle | TextStyle[],
  /**
   * @property
   * button style,
   * style item have a button default on bottom position,
   */
  textButtonStyle?: TextStyle | TextStyle[],
  /**
   * @property
   * study button text
   */
  textButton: String,
  /**
   * @property
   * button backgorund color
   */
  backgroundColorButton: String,
  /**
   * @property
   * button style,
   * style for button
   */
  buttonStyle?: ViewStyle | ViewStyle[],
  /**
   * @property
   * id for test
   */
  testID: String,
};
type StateType = {};
class ChocolateCard extends Component<PropsType, StateType> {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: Values.BOX_BACKGROUND,
      boxRadius: Values.BOX_RADIUS,
      shadow: Values.SHADOW_COLOR,
      shadowHeight: Values.SHADOW_HEIGHT,
      textColor: Values.BUTTON_TEXT_COLOR,
      fontSize: FontSize.SUBTITLE,
    };
  }

  render() {
    const { backgroundColor, boxRadius, shadow, shadowHeight, textColor, fontSize } = this.state;
    const {
      children,
      style,
      imageSource,
      text,
      title,
      titleStyle,
      textStyle,
      textButtonStyle,
      onPress,
      backgroundColorButton,
      textButton,
      buttonStyle,
      testID,
    } = this.props;
    return (
      <View
        testID={testID}
        style={[
          {
            backgroundColor,
            borderRadius: boxRadius,
            shadowColor: shadow,
            shadowOffset: {
              width: 0,
              height: shadowHeight,
            },
            shadowOpacity: 0.23,
            shadowRadius: boxRadius,
            elevation: hp('1%'),
          },
          style,
        ]}>
        {children}
        <Image
          style={{ width: '100%', height: '60%', borderRadius: boxRadius }}
          source={imageSource}
        />
        <View
          style={{
            width: '100%',
            flexDirection: 'column',
            height: '35%',
            paddingVertical: wp('2%'),
            paddingHorizontal: wp('4%'),
          }}>
          {/* عنوان */}
          <Text
            style={[
              {
                color: textColor,
                textAlign: I18nManager.isRTL ? 'left' : 'right',
                width: '100%',
                fontSize,
                lineHeight: FontSize.SUBTITLE_HEIGHT,
                alignSelf: 'flex-start',
              },
              titleStyle,
            ]}>
            {title}
          </Text>

          {/* توضیح کوتاه سه خطی */}
          <Text
            numberOfLines={3}
            ellipsizeMode="tail"
            style={[
              {
                marginTop: hp('0.5%'),
                textAlign: I18nManager.isRTL ? 'left' : 'right',
                width: '100%',
                lineHeight: hp('3%'),
                color: textColor,
                fontSize,
                alignSelf: 'center',
              },
              textStyle,
            ]}>
            {text}
          </Text>

          {/* کلید مطالعه بیشتر */}
          <Button
            onPress={onPress}
            text={textButton}
            style={[
              {
                position: 'absolute',
                bottom: -wp('7.5'),
                alignSelf: 'center',
                width: wp('26%'),
                height: wp('7%'),
                backgroundColor: backgroundColorButton,
              },
              buttonStyle,
            ]}
            textStyle={[{ color: textColor, fontSize }, textButtonStyle]}
          />
        </View>
      </View>
    );
  }
}

export default ChocolateCard;
