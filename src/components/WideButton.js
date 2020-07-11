/**
 * کلید ها
 */
import React, { Component } from 'react';
import { Text, View, ImageSourcePropType, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import UFRN from '..';

type PropsType = {
  /**
   * @property
   * use true or false for disable or enable action button,
   * default is false
   */
  disabled: Boolean,
  /**
   * @property
   * string for text button
   */
  text: String,
  /**
   * @property
   * image source,
   * button have a image default,
   * if you have url enter value exp: { uri: Your url } or
   * if you have local image use require('path')
   */
  imageSource: ImageSourcePropType,
  /**
   * @property
   * icon source,
   * button have a icon default,
   * if you have url enter value exp: { uri: Your url } or
   * if you have local image use require('path')
   */
  iconSource: ImageSourcePropType,
  /**
   * @property
   * button style, you can enter styles array
   */
  style?: ViewStyle | ViewStyle[],
  /**
   * @property
   * text style,
   * button have a text default,
   */
  textStyle: TextStyle | TextStyle[],
  /**
   * @property
   * image tint color,
   * for change color base of image use this prop
   */
  imageTintColor: String,
  /**
   * @property
   * image style, you can enter styles array
   */
  imageStyle?: ImageStyle | ImageStyle[],
  /**
   * @property
   * icon style, you can enter styles array
   */
  iconStyle?: ImageStyle | ImageStyle[],
  /**
   * @function
   * action for button onPress
   */
  onPress: Function,
};
type StateType = {};

class WideButton extends Component<PropsType, StateType> {
  constructor(props) {
    super(props);
    this.state = {
      height: UFRN.Values.WIDE_BUTTON_HEIGHT,
      width: UFRN.Values.WIDE_BUTTON_WIDTH,
      fontSize: UFRN.FontSize.SUBTITLE,
      backgroundColor: UFRN.Values.BOX_BACKGROUND,
      textColor: UFRN.Values.BUTTON_TEXT_COLOR,
      radius: UFRN.Values.BOX_RADIUS,
      shadow: UFRN.Values.SHADOW_COLOR,
      shadowHeight: UFRN.Values.SHADOW_HEIGHT,
    };
  }

  render() {
    const {
      fontSize,
      textColor,
      height,
      width,
      radius,
      backgroundColor,
      shadow,
      shadowHeight,
    } = this.state;
    const {
      children,
      disabled,
      loading,
      style,
      textStyle,
      text,
      imageSource,
      onPress,
      iconSource,
      imageTintColor,
      imageStyle,
      iconStyle,
    } = this.props;
    return (
      <UFRN.Ripple
        onPress={onPress}
        disabled={loading || disabled}
        rippleContainerBorderRadius={radius}
        style={[
          {
            paddingHorizontal: wp('5%'),
            borderRadius: radius,
            backgroundColor,
            height,
            width,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            flexDirection: 'row',
            shadowColor: shadow,
            shadowOffset: {
              width: 0,
              height: shadowHeight,
            },
            shadowOpacity: 0.23,
            shadowRadius: radius,
            elevation: hp('1%'),
          },
          style,
        ]}>
        {children}
        <View style={{ height: '100%', width: '75%', flexDirection: 'row', alignItems: 'center' }}>
          <UFRN.Image
            resizeMode="contain"
            tintColor={imageTintColor}
            style={[{ height: wp('6%'), width: wp('6%') }, imageStyle]}
            source={imageSource}
          />
          <Text style={[{ marginStart: wp('2%'), color: textColor, fontSize }, textStyle]}>
            {text}
          </Text>
        </View>
        <View
          style={{
            height: '100%',
            width: '25%',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <UFRN.Image
            resizeMode="contain"
            tintColor={imageTintColor}
            style={[{ height: wp('4%'), width: wp('4%') }, iconStyle]}
            source={iconSource}
          />
        </View>
      </UFRN.Ripple>
    );
  }
}

export default WideButton;
