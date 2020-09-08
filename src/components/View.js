/**
 * کلید ها
 */
import React, { Component } from 'react';
import {
  Text,
  View,
  ViewStyle,
  ImageStyle,
  TextStyle,
  ImageSourcePropType,
  Image,
} from 'react-native';
import Values from '../configs/Values';
import FontSize from '../helper/FontSize';

type PropsType = {
  /**
   * @property
   * string for text
   */
  text: String,
  /**
   * @property
   * image source,
   * view have a image default,
   * if you have url enter value exp: { uri: Your url } or
   * if you have local image use require('path')
   */
  imageSource: ImageSourcePropType,
  /**
   * @property
   * view style, you can enter styles array
   */
  style?: ViewStyle | ViewStyle[],
  /**
   * @property
   * text style,
   * view have a text default,
   */
  textStyle?: TextStyle | TextStyle[],
  /**
   * @property
   * image style, you can enter styles array
   */
  imageStyle?: ImageStyle | ImageStyle[],
  /**
   * @property
   * id for test
   */
  testID: String,
};
type StateType = {};
class Layout extends Component<PropsType, StateType> {
  constructor(props) {
    super(props);
    this.state = {
      height: Values.BUTTON_HEIGHT,
      width: Values.BUTTON_WIDTH,
      fontSize: FontSize.SUBTITLE,
      backgroundColor: Values.BUTTON_BACKGROUND,
      textColor: Values.BUTTON_TEXT_COLOR,
    };
  }

  render() {
    const { fontSize, textColor, backgroundColor, height, width } = this.state;
    const { children, style, textStyle, imageStyle, text, imageSource, testID } = this.props;
    const Radius =
      style !== undefined && style.height !== undefined ? style.height / 2 : height / 2;
    return (
      <View
        testID={testID}
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
          <Text style={[{ color: textColor, fontSize }, textStyle]}>{text}</Text>
        ) : null}

        {imageSource !== undefined ? (
          <Image
            style={[{ height: '40%', width: '40%' }, imageStyle]}
            source={imageSource}
            resizeMode="contain"
          />
        ) : null}
      </View>
    );
  }
}

export default Layout;
