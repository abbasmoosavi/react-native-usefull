import React, { useState } from 'react';
import { View, ViewStyle } from 'react-native';
import { getColorFromURL } from 'rn-dominant-color';

type DominantProps = {
  /**
   * @property
   * image source,
   * if you have url enter value exp: { Your url }
   */
  imagePath: string,
  /**
   * @property
   * View style, you can enter styles array
   */
  style: ViewStyle,
  /**
   * @property
   * default is '#6C6FFF'
   */
  defaultColor: string,
};

const Dominant = ({ imagePath, style, defaultColor = '#6C6FFF' }: DominantProps) => {
  const [color, setColor] = useState(defaultColor);
  if (imagePath != null) {
    try {
      getColorFromURL(imagePath).then(colors => {
        setColor(colors.primary);
      });
    } catch (e) {
      console.log('error getColorFromURL:', e);
    }
  }
  return <View style={[{ backgroundColor: color }, style]} />;
};
export default Dominant;
