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
import Values from '../configs/Values';
import PersianJs from '../helper/PersianJs';
import Button from '../components/Button';

type PropsType = {
  /**
   * @property
   * screen size of date picker,
   * choose on of MODAL or FULLSCREEN
   */
  screenType?: 'MODAL' | 'FULLSRCEEN',
  /**
   * @property
   * choose separator text
   * '/' | '-' | ':'
   */
  separator?: ':' | '-' | '/',
  /**
   * @property
   * use true or false for visible or invisible time picker,
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
  buttonTextStyle?: TextStyle | TextStyle[],
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
  value: String,
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

class TimePicker extends Component<PropsType, StateType> {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: Values.MODAL_BACKGROUND,
      modalRadius: Values.MODAL_RADIUS,
      padding: Values.PADDING,
      shadow: Values.SHADOW_COLOR,

      hours: [
        '00',
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
      ],
      minutes: [
        '00',
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
        '32',
        '33',
        '34',
        '35',
        '36',
        '37',
        '38',
        '39',
        '40',
        '41',
        '42',
        '43',
        '44',
        '45',
        '46',
        '47',
        '48',
        '49',
        '50',
        '51',
        '52',
        '53',
        '54',
        '55',
        '56',
        '57',
        '58',
        '59',
      ],
    };
  }

  static defaultProps = {
    screenType: 'MODAL',
    separator: ':',
    disabled: false,
    loading: false,
  };

  UNSAFE_componentWillReceiveProps(np) {
    if (np.visible) {
      this.setState({
        selectedHour: PersianJs(this.props.value.slice(0, 2)).toEnglishNumber().toString(),
        selectedMinute: PersianJs(this.props.value.slice(3, 6)).toEnglishNumber().toString(),
      });
    }
  }

  submit() {
    this.props.onSubmit(
      PersianJs(`${this.state.selectedHour}:${this.state.selectedMinute}`)
        .persianNumber()
        .toString(),
    );
    this.handleClose();
  }

  handleClose() {
    this.props.onClose();
  }

  render() {
    const {
      backgroundColor,
      modalRadius,
      padding,
      shadow,
      selectedHour,
      selectedMinute,
      hours,
      minutes,
    } = this.state;
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
              {/* Hour picker */}
              <Picker
                textSize={textStyle && textStyle.fontSize}
                textColor={textStyle && textStyle.color}
                style={{ width: '20%', height: '100%', backgroundColor: 'transparent' }}
                selectedValue={selectedHour}
                pickerData={hours}
                onValueChange={(selectedHour) => this.setState({ selectedHour })}
              />

              <Picker
                textSize={textStyle && textStyle.fontSize}
                textColor={textStyle && textStyle.color}
                style={{ width: '15%', height: '100%', backgroundColor: 'transparent' }}
                selectedValue=":"
                pickerData={[':']}
                onValueChange={(value) => null}
              />

              {/* Minute picker */}
              <Picker
                textSize={textStyle && textStyle.fontSize}
                textColor={textStyle && textStyle.color}
                style={{ width: '20%', height: '100%', backgroundColor: 'transparent' }}
                selectedValue={selectedMinute}
                pickerData={minutes}
                onValueChange={(selectedMinute) => this.setState({ selectedMinute })}
              />
            </View>

            {/* accept button for choose time */}
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

export default TimePicker;
