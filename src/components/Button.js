/**
 * کلید ها
 */
import React, { Component } from 'react';
import {
  Text,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
  ImageStyle,
  ImageSourcePropType,
  Image
} from 'react-native';
import Ripple from '../helper/Ripple';
import FontSize from '../helper/FontSize';
import Values from '../configs/Values';

type PropsType = {
  /**
   * @property
   * use true or false for disable or enable action button,
   * default is false
   */
  disabled: Boolean,
  /**
   * @property
   * use true or false for disable or enable loading,
   * default is false
   */
  loading: Boolean,
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
   * button style, you can enter styles array
   */
  style?: ViewStyle | ViewStyle[],
  /**
   * @property
   * text style,
   * button have a text default,
   */
  textStyle?: TextStyle | TextStyle[],
  /**
   * @property
   * image style, you can enter styles array
   */
  imageStyle?: ImageStyle | ImageStyle[],
  /**
   * @function
   * action for button onPress
   */
  onPress: Function,
  /**
   * @property
   * id for test button
   */
  testID: String,
};
type StateType = {};
class Button extends Component<PropsType, StateType> {
  constructor(props) {
    super(props);
    this.state = {
      height: Values.BUTTON_HEIGHT,
      width: Values.BUTTON_WIDTH,
      loadingColor: Values.LOADING_COLOR,
      fontSize: FontSize.SUBTITLE,
      backgroundColor: Values.BUTTON_BACKGROUND,
      textColor: Values.BUTTON_TEXT_COLOR,
    };
  }

  render() {
    const { fontSize, textColor, height, width, backgroundColor } = this.state;
    const {
      children,
      disabled,
      loading,
      style,
      textStyle,
      imageStyle,
      text,
      imageSource,
      onPress,
      testID,
    } = this.props;
    const Radius =
      style !== undefined && style.height !== undefined ? style.height / 2 : height / 2;
    const loadingColor =
      textStyle !== undefined && textStyle.color !== undefined
        ? textStyle.color
        : this.state.loadingColor;
    return (
      <Ripple
        testID={testID}
        onPress={onPress}
        disabled={loading || disabled}
        rippleContainerBorderRadius={Radius}
        style={[
          {
            borderRadius: Radius,
            backgroundColor,
            height,
            width,
            justifyContent: 'center',
            alignItems: 'center',
          },
          style,
        ]}>
        {children}

        {text !== undefined ? (
          loading ? (
            <ActivityIndicator color={loadingColor} size={fontSize * 1.5} />
          ) : (
            <Text style={[{ color: textColor, fontSize }, textStyle]}>{text}</Text>
          )
        ) : null}

        {imageSource !== undefined ? (
          loading ? (
            <ActivityIndicator color={loadingColor} size={fontSize * 1.5} />
          ) : (
            <Image
              style={[{ height: '40%', width: '40%' }, imageStyle]}
              tintColor={imageStyle.tintColor}
              source={imageSource}
              resizeMode="contain"
            />
          )
        ) : null}
      </Ripple>
    );
  }
}

export default Button;
