/**
 * time modal for create new competition
 */
import React, { Component } from 'react';
import { View, I18nManager, ViewStyle, TextStyle } from 'react-native';
import Modal from 'react-native-modal';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Picker } from 'react-native-best-wheel-datepicker';
import _ from 'lodash';
import Values from '../configs/Values';
import Button from '../components/Button';

type PropsType = {
  /**
   * @property
   * @requires
   * screen size of date picker,
   * choose on of MODAL or FULLSCREEN
   */
  screenType?: 'MODAL' | 'FULLSRCEEN',
  /**
   * @property
   * use true or false for visible or invisible language picker,
   * default is false
   */
  visible: Boolean,
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
   * date picker button text
   */
  buttonText: String,
  buttonTextStyle: Object,
  /**
   * @property
   * button style,
   * style item have a button default on bottom position,
   */
  buttonStyle?: ViewStyle | ViewStyle[],
  /**
   * @property
   * default value
   */
  value: Object,
  /**
   * @property
   * language data picker
   */
  data: Array,
  /**
   * @function
   * action for button onPress
   */
  onSubmit: Function,
  /**
   * @property
   * id for test
   */
  testID: String,
};
type StateType = {};

class LanguagePicker extends Component<PropsType, StateType> {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: Values.MODAL_BACKGROUND,
      modalRadius: Values.MODAL_RADIUS,
      padding: Values.PADDING,
      shadow: Values.SHADOW_COLOR,

      currentValue: this.props.value,
    };
  }

  onValueChange(value) {
    this.setState({
      currentValue: _.find(this.props.data, { value }),
    });
  }

  submit() {
    this.handleClose();
    this.props.onSubmit(this.state.currentValue);
  }

  handleClose() {
    this.props.onClose();
  }

  render() {
    const { backgroundColor, modalRadius, padding, shadow, currentValue } = this.state;
    const {
      visible,
      disabled,
      loading,
      style,
      textStyle,
      buttonText,
      buttonTextStyle,
      buttonStyle,
      screenType,
      data,
      testID,
    } = this.props;
    return (
      <Modal
        testID={testID}
        backdropTransitionOutTiming={0}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropColor={shadow}
        isVisible={visible}
        onBackdropPress={() => this.handleClose()}
        onBackButtonPress={() => this.handleClose()}>
        {/* set modal or fullscreen */}
        <View
          style={[
            {
              backgroundColor,
              borderRadius: modalRadius,
              justifyContent: 'center',
              alignItems: 'center',
            },
            style,
            screenType === 'FULLSRCEEN'
              ? { height: hp('100%'), width: wp('100%'), alignSelf: 'center' }
              : null,
          ]}>
          <View
            style={{
              height: null,
              width: '100%',
              alignSelf: 'center',
              padding,
              flexDirection: 'column',
            }}>
            <View
              style={{
                height: hp('20%'),
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
              }}>
              {/* Language picker */}
              <Picker
                textSize={textStyle && textStyle.fontSize}
                textColor={textStyle && textStyle.color}
                style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
                selectedValue={currentValue.value}
                pickerData={data}
                onValueChange={(value) => this.onValueChange(value)}
              />
            </View>

            {/* accept button for choose language */}
            <Button
              disabled={disabled}
              loading={loading}
              onPress={() => this.submit()}
              text={buttonText}
              style={buttonStyle}
              textStyle={buttonTextStyle}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

export default LanguagePicker;
