import React, { useState } from 'react';
import { View, TouchableOpacity, Text, ViewStyle, TextStyle, ImageResizeMode } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Col } from 'react-native-easy-grid';
import Image from './Image';
import Dominant from './Dominant';
import FontSize from '../helper/FontSize';
import Values from '../configs/Values';

type AdvertisingsProps = {
  /**
   * @property
   */
  activeIndicator: Boolean,
  /**
   * @property
   */
  indicatorContainerStyle: ViewStyle | ViewStyle[],
  /**
   * @property
   */
  indicatorStyle: ViewStyle | ViewStyle[],
  /**
   * @property
   */
  dominant: Boolean,
  /**
   * @property
   */
  dominantStyle: ViewStyle | ViewStyle[],
  /**
   * @property
   */
  style: ViewStyle | ViewStyle[],
  /**
   * @property
   */
  containerStyle: ViewStyle | ViewStyle[],
  /**
   * @property
   */
  data: Array,
  /**
   * @property
   */
  autoplay: Boolean,
  /**
   * @property
   */
  loop: Boolean,
  /**
   * @property
   */
  titleStyle: TextStyle | TextStyle[],
  /**
   * @property
   */
  textStyle: TextStyle | TextStyle[],
  /**
   * @property
   */
  widthItem: Number,
  /**
   * @property
   */
  heightItem: Number,
  /**
   * @property
   */
  onPressDisabled: Boolean,
  /**
   * @property
   * image size,
   * use on of 'cover' | 'contain' | 'stretch' | 'repeat' | 'center',
   * and default is 'cover
   */
  resizeModeImage: ImageResizeMode,
  /**
   * @function
   * action for button onPress
   */
  onPressItem: Function,
  /**
   * @property
   * action for button onPress
   */
  enableMomentum: Boolean,
  /**
   * @property
   * id for test
   */
  testID: String,
};

const Advertisings = ({
  inactiveIndicatorColor,
  activeIndicatorColor,
  activeIndicator,
  indicatorContainerStyle,
  indicatorStyle,
  dominant,
  dominantStyle,
  style,
  containerStyle,
  data,
  autoplay,
  loop,
  titleStyle,
  textStyle,
  widthItem = wp('92%'),
  heightItem = hp('28%'),
  onPressDisabled,
  resizeModeImage = 'cover',
  onPressItem,
  enableMomentum,
  testID,
}: AdvertisingsProps) => {
  const [activeSlide, onChangeSlide] = useState(0);

  const onPressDisabledProp = onPressDisabled || false;
  const activeIndicatorProp = activeIndicator || false;
  const dominantProp = dominant || false;
  const autoplayProp = autoplay || false;
  const loopProp = loop || false;
  const enableMomentumProp = enableMomentum || false;

  function pagination() {
    return (
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={[
          {
            width: '100%',
            backgroundColor: 'transparent',
            position: 'absolute',
            bottom: -hp('7%'),
          },
          indicatorContainerStyle,
        ]}
        dotStyle={[
          {
            width: Values.PAGINATION_DOT * 0.7,
            height: Values.PAGINATION_DOT * 0.7,
            borderRadius: Values.PAGINATION_DOT / 2,
            backgroundColor: 'rgba(255, 255, 255, 0.92)',
          },
          indicatorStyle,
        ]}
        inactiveDotColor={inactiveIndicatorColor}
        dotColor={activeIndicatorColor}
        inactiveDotOpacity={0.7}
        inactiveDotScale={0.7}
      />
    );
  }

  return (
    <View
      testID={testID}
      style={[
        {
          width: '100%',
          height: heightItem + hp('3%'),
          justifyContent: 'flex-start',
          alignItems: 'center',
        },
        style,
      ]}>
      {data.length > 0 ? (
        <View
          style={{
            width: '100%',
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <Carousel
            data={data}
            loop={loopProp}
            autoplay={autoplayProp}
            enableMomentum={enableMomentumProp}
            autoplayInterval={4000}
            contentContainerCustomStyle={{
              height: heightItem,
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            slideStyle={{
              height: heightItem,
              width: widthItem,
            }}
            sliderWidth={wp('100%')}
            sliderHeight={heightItem}
            itemWidth={widthItem}
            onSnapToItem={index => onChangeSlide(index)}
            renderItem={item => (
              <TouchableOpacity
                disabled={onPressDisabledProp}
                onPress={() => onPressItem(item.item)}
                style={[
                  {
                    height: '100%',
                    width: '100%',
                    alignSelf: 'center',
                    borderRadius: Values.MODAL_RADIUS,
                    shadowColor: '#000000',
                    shadowOffset: {
                      width: 0,
                      height: Values.SHADOW_HEIGHT,
                    },
                    shadowOpacity: 0.3,
                    shadowRadius: Values.MODAL_RADIUS,
                    elevation: Values.SHADOW_ELEVATION,
                  },
                  containerStyle,
                ]}>
                <Image
                  resizeMode={resizeModeImage}
                  source={{
                    uri: item.item.cover,
                  }}
                  style={{
                    height: '100%',
                    width: '100%',
                    borderRadius: Values.MODAL_RADIUS,
                  }}>
                  {dominantProp ? (
                    <Dominant
                      imagePath={item.item.cover}
                      style={[
                        {
                          opacity: 0.5,
                          position: 'absolute',
                          bottom: 0,
                          height: '50%',
                          width: '100%',
                        },
                        dominantStyle,
                      ]}
                    />
                  ) : null}
                  <Col
                    style={{
                      height: '50%',
                      width: '100%',
                      padding: Values.PADDING_HORIZENTAL / 2,
                      position: 'absolute',
                      bottom: 0,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={[
                        {
                          fontSize: FontSize.CONTENT,
                        },
                        titleStyle,
                      ]}>
                      {item.item.title}
                    </Text>
                    <Text
                      numberOfLines={2}
                      ellipsizeMode="tail"
                      style={[
                        {
                          fontSize: FontSize.MEDIUM,
                          marginTop: hp('0.5%'),
                        },
                        textStyle,
                      ]}>
                      {item.item.text}
                    </Text>
                  </Col>
                </Image>
              </TouchableOpacity>
            )}
          />
          {activeIndicatorProp ? pagination() : null}
        </View>
      ) : null}
    </View>
  );
};

export default Advertisings;
