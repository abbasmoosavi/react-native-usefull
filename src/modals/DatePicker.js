/**
 * choose shamsi date for create new competition, use three picker for show day,month and year and use moment jalali mudole
 */
import React, { Component } from 'react';
import { View, I18nManager, ViewStyle, TextStyle } from 'react-native';
import Modal from 'react-native-modal';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Picker } from 'react-native-best-wheel-datepicker';
import m from 'moment-jalaali';
import UFRN from '../../';

type PropsType = {
  /**
   * @property
   * screen size of date picker,
   * choose on of MODAL or FULLSCREEN
   */
  screenType?: 'MODAL' | 'FULLSRCEEN',
  /**
   * @property
   * type of date picker,
   * choose on of JALALI or GREGORIAN
   */
  dateType?: 'JALALI' | 'GREGORIAN',
  /**
   * @property
   * @requires
   * class of date picker,
   * choose on of BIRTHDATE or NOW
   */
  dateClass?: 'BIRTHDATE' | 'NOW',
  /**
   * @property
   * choose separator text
   * '/' | '-' | ':'
   */
  separator?: '/' | '-' | ':',
  /**
   * @property
   * use true or false for visible or invisible date picker,
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

class DatePicker extends Component<PropsType, StateType> {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: UFRN.Values.MODAL_BACKGROUND,
      modalRadius: UFRN.Values.MODAL_RADIUS,
      padding: UFRN.Values.PADDING,
      shadow: UFRN.Values.SHADOW_COLOR,

      years: [],
      months:
        this.props.dateType === 'JALALI'
          ? [
              'فروردین',
              'اردیبهشت',
              'خرداد',
              'تیر',
              'مرداد',
              'شهریور',
              'مهر',
              'آبان',
              'آذر',
              'دی',
              'بهمن',
              'اسفند',
            ]
          : [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ],

      days1:
        this.props.dateType === 'JALALI'
          ? [
              '۰۱',
              '۰۲',
              '۰۳',
              '۰۴',
              '۰۵',
              '۰۶',
              '۰۷',
              '۰۸',
              '۰۹',
              '۱۰',
              '۱۱',
              '۱۲',
              '۱۳',
              '۱۴',
              '۱۵',
              '۱۶',
              '۱۷',
              '۱۸',
              '۱۹',
              '۲۰',
              '۲۱',
              '۲۲',
              '۲۳',
              '۲۴',
              '۲۵',
              '۲۶',
              '۲۷',
              '۲۸',
              '۲۹',
              '۳۰',
              '۳۱',
            ]
          : [
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
            ],

      days2:
        this.props.dateType === 'JALALI'
          ? [
              '۰۱',
              '۰۲',
              '۰۳',
              '۰۴',
              '۰۵',
              '۰۶',
              '۰۷',
              '۰۸',
              '۰۹',
              '۱۰',
              '۱۱',
              '۱۲',
              '۱۳',
              '۱۴',
              '۱۵',
              '۱۶',
              '۱۷',
              '۱۸',
              '۱۹',
              '۲۰',
              '۲۱',
              '۲۲',
              '۲۳',
              '۲۴',
              '۲۵',
              '۲۶',
              '۲۷',
              '۲۸',
              '۲۹',
              '۳۰',
            ]
          : [
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
            ],

      days:
        this.props.dateType === 'JALALI'
          ? [
              '۰۱',
              '۰۲',
              '۰۳',
              '۰۴',
              '۰۵',
              '۰۶',
              '۰۷',
              '۰۸',
              '۰۹',
              '۱۰',
              '۱۱',
              '۱۲',
              '۱۳',
              '۱۴',
              '۱۵',
              '۱۶',
              '۱۷',
              '۱۸',
              '۱۹',
              '۲۰',
              '۲۱',
              '۲۲',
              '۲۳',
              '۲۴',
              '۲۵',
              '۲۶',
              '۲۷',
              '۲۸',
              '۲۹',
              '۳۰',
              '۳۱',
            ]
          : [
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
            ],
    };
  }

  static defaultProps = {
    screenType: 'MODAL',
    dateType: 'JALALI',
    separator: '/',
    disabled: false,
    loading: false,
  };

  componentDidMount() {
    let currentYear = null;
    if (this.props.dateClass === 'BIRTHDATE') {
      currentYear = this.props.dateType === 'JALALI' ? parseInt(m().jYear()) : parseInt(m().year());
      for (let i = currentYear - 100; i <= currentYear; i++) {
        this.props.dateType === 'JALALI'
          ? this.state.years.push(
              UFRN.PersianJs(i)
                .englishNumber()
                .toString(),
            )
          : this.state.years.push(i);
      }
    } else {
      currentYear = this.props.dateType === 'JALALI' ? parseInt(m().jYear()) : parseInt(m().year());
      for (let i = currentYear; i <= currentYear + 100; i++) {
        this.props.dateType === 'JALALI'
          ? this.state.years.push(
              UFRN.PersianJs(i)
                .englishNumber()
                .toString(),
            )
          : this.state.years.push(i);
      }
    }

    this.setState({
      years: this.state.years,
    });
  }

  UNSAFE_componentWillReceiveProps(np) {
    if (np.visible && this.props.value !== undefined && this.props.value != null) {
      this.setState({
        selectedYear:
          this.props.dateType === 'JALALI'
            ? UFRN.PersianJs(this.props.value.slice(0, 4))
                .englishNumber()
                .toString()
            : this.props.value.slice(0, 4),

        selectedMonth: this.props.value.slice(5, 7),
        selectedMonthValue: this.state.months[
          parseInt(
            UFRN.PersianJs(this.props.value.slice(5, 7))
              .toEnglishNumber()
              .toString(),
          ) - 1
        ],
        selectedDay:
          this.props.dateType === 'JALALI'
            ? UFRN.PersianJs(this.props.value.slice(8, 10))
                .englishNumber()
                .toString()
            : this.props.value.slice(8, 10),
      });
    }
  }

  firstHalfOrSecondHalf(value) {
    const index = this.state.months.indexOf(value) + 1;
    if (index < 10) {
      this.setState({
        selectedMonth:
          this.props.dateType === 'JALALI'
            ? UFRN.PersianJs(`0${index}`)
                .englishNumber()
                .toString()
            : `0${index}`,
        selectedMonthValue: value,
      });
    } else {
      this.setState({
        selectedMonth:
          this.props.dateType === 'JALALI'
            ? UFRN.PersianJs(index)
                .englishNumber()
                .toString()
            : index,
        selectedMonthValue: value,
      });
    }

    if (index <= 6) {
      this.state.days = this.state.days1;
      this.setState({ days: this.state.days1 });
    } else {
      this.state.days = this.state.days2;
      this.setState({ days: this.state.days2 });
    }
  }

  submit() {
    this.props.dateType === 'JALALI'
      ? this.props.onSubmit(
          `${UFRN.PersianJs(this.state.selectedYear)
            .persianNumber()
            .toString()}/${UFRN.PersianJs(this.state.selectedMonth)
            .persianNumber()
            .toString()}/${UFRN.PersianJs(this.state.selectedDay)
            .persianNumber()
            .toString()}`,
        )
      : this.props.onSubmit(
          UFRN.PersianJs(this.state.selectedYear).toString() +
            this.props.separator +
            UFRN.PersianJs(this.state.selectedMonth).toString() +
            this.props.separator +
            UFRN.PersianJs(this.state.selectedDay).toString(),
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
      selectedYear,
      selectedMonth,
      selectedMonthValue,
      selectedDay,
      years,
      months,
      days,
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
                height: wp('34%'),
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
              }}>
              {/* Year picker */}
              <Picker
                textSize={textStyle && textStyle.fontSize}
                textColor={textStyle && textStyle.color}
                style={{ width: '30%', height: '100%', backgroundColor: 'transparent' }}
                selectedValue={selectedYear}
                pickerData={years}
                onValueChange={selectedYear => this.setState({ selectedYear: selectedYear })}
              />

              {/* Month picker */}
              <Picker
                textSize={textStyle && textStyle.fontSize}
                textColor={textStyle && textStyle.color}
                style={{ width: '40%', height: '100%', backgroundColor: 'transparent' }}
                selectedValue={selectedMonthValue}
                pickerData={months}
                onValueChange={value => this.firstHalfOrSecondHalf(value)}
              />

              {/* Day picker */}
              <Picker
                textSize={textStyle && textStyle.fontSize}
                textColor={textStyle && textStyle.color}
                style={{ width: '20%', height: '100%', backgroundColor: 'transparent' }}
                selectedValue={selectedDay}
                pickerData={days}
                onValueChange={selectedDay => this.setState({ selectedDay })}
              />
            </View>

            {/* accept button for choose date */}
            <UFRN.Button
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

export default DatePicker;
