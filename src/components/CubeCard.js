/**
 * آیتم های دسته بندی مجله رای
 */
import React, { Component } from 'react';
import { Text, ViewStyle, TextStyle, ImageSourcePropType, Image } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Values from '../configs/Values';
import FontSize from '../helper/FontSize';
import Ripple from '../helper/Ripple';

type PropsType = {
  /**
   * @property
   * Magazine categories item style, you can enter styles array
   */
  style?: ViewStyle | ViewStyle[],
  /**
   * @property
   * text style,
   * Magazine categories item have a text default on center position,
   * you can enter styles array
   */
  textStyle?: TextStyle | TextStyle[],
  /**
   * @property
   * string for text center position
   */
  text: String,
  /**
   * @property
   * image source,
   * if you have url enter value exp: { uri: Your url } or
   * if you have local image use require('path')
   */
  imageSource: ImageSourcePropType,
  /**
   * @property
   * image size,
   * use on of 'cover' | 'contain' | 'stretch' | 'repeat' | 'center',
   * and default is 'cover
   */
  imageResizeMode: ImageResizeMode,
  /**
   * @property
   * Magazine categories item border radius,
   * for background image and view
   */
  borderRadius: Number,
  /**
   * @function
   * action for Magazine categories item onPress
   */
  onPress: Function,
  /**
   * @property
   * id for test
   */
  testID: String,
};
type StateType = {};
class CubeCard extends Component<PropsType, StateType> {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: FontSize.SUBTITLE,
      textColor: Values.BUTTON_TEXT_COLOR,
    };
  }

  render() {
    const { textColor, fontSize } = this.state;
    const {
      children,
      text,
      imageSource,
      borderRadius,
      style,
      onPress,
      textStyle,
      imageResizeMode,
      testID,
    } = this.props;
    return (
      <Ripple
        testID={testID}
        onPress={onPress}
        rippleContainerBorderRadius={borderRadius}
        style={[
          {
            borderRadius,
            height: wp('28%'),
            width: wp('28%'),
            justifyContent: 'center',
            alignItems: 'center',
          },
          style,
        ]}>
        <Image
          source={imageSource}
          resizeMode={imageResizeMode || 'cover'}
          style={{
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius,
          }}
        />
        {children}
        <Text
          style={[
            { position: 'absolute', color: textColor, fontSize, textAlign: 'center' },
            textStyle,
          ]}>
          {text}
        </Text>
      </Ripple>
    );
  }
}

export default CubeCard;
