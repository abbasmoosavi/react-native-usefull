/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import {
  ImageStyle,
  ImageResizeMode,
  ImageSourcePropType,
  ImageProgressEventDataIOS,
  ImageLoadEventDataAndroid,
} from 'react-native';
import FastImage from '@bam.tech/react-native-fast-image';
import PropTypes from 'prop-types';
import Values from '../configs/Values';

type PropsType = {
  /**
   * @property
   * image source,
   * if you have url enter value exp: { uri: Your url } or
   * if you have local image use require('path')
   */
  source: ImageSourcePropType,
  /**
   * @property
   * image style, you can enter styles array
   */
  style?: ImageStyle | ImageStyle[],
  /**
   * @property
   * image tint color,
   * for change color base of image use this prop
   */
  tintColor: String,
  /**
   * @property
   * image size,
   * use on of 'cover' | 'contain' | 'stretch' | 'repeat' | 'center',
   * and default is 'cover
   */
  resizeMode: ImageResizeMode,

  onProgress: ImageProgressEventDataIOS,

  onLoadStart: ImageLoadEventDataAndroid,
  onLoadEnd: ImageLoadEventDataAndroid,
  /**
   * @property
   * id for test
   */
  testID: String,
};
type StateType = {};

class Image extends Component<PropsType, StateType> {
  constructor(props) {
    super(props);
    this.state = {
      height: Values.IMAGE_HEIGHT,
      width: Values.IMAGE_WIDTH,
    };
  }

  static defaultProps = {
    resizeMode: 'cover',
  };

  static propsType = {
    style: PropTypes.arrayOf(PropTypes.ImageStyle),
  };

  getResizeMode(value) {
    switch (value) {
      case 'cover':
        return FastImage.resizeMode.cover;
      case 'contain':
        return FastImage.resizeMode.contain;
      case 'center':
        return FastImage.resizeMode.center;
      case 'stretch':
        return FastImage.resizeMode.stretch;
      default:
        return FastImage.resizeMode.contain;
    }
  }

  render() {
    const { height, width } = this.state;
    const {
      children,
      style,
      source,
      resizeMode,
      tintColor,
      onProgress,
      onLoadStart,
      onLoadEnd,
      testID,
    } = this.props;
    return (
      <FastImage
        testID={testID}
        onProgress={onProgress}
        onLoadStart={onLoadStart}
        onLoadEnd={onLoadEnd}
        resizeMode={this.getResizeMode(resizeMode)}
        tintColor={tintColor !== undefined ? tintColor : null}
        style={[{ height, width }, style]}
        source={source}>
        {children}
      </FastImage>
    );
  }
}

Image.propsType = {
  style: PropTypes.arrayOf(PropTypes.ImageStyle),
};

export default Image;
