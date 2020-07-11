// @flow
import React, { type Node, type ComponentType } from 'react';
import { SafeAreaView, View, Text, Clipboard, TouchableOpacity, TextStyle } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontSize from './FontSize';
import Button from '../components/Button';

type Props = {
  children: Node,
  /**
   * @property
   * custom view for error
   * as <View><Text>Exist an error</Text></View>
   */
  FallbackComponent: ComponentType<any>,
  onError?: Function,
  textStyle?: TextStyle | TextStyle[],
};

type State = { error: Error | null, hasError: boolean };

class ErrorBoundary extends React.Component<Props, State> {
  state = { error: null, hasError: false };

  /**
   * هنگامی که خطا اتفاق می افتد٬ توسط این متد خطا دریافت و صفحه ی خطا به برنامه نویس نمایش داده می شود
   */
  static getDerivedStateFromError(error: Error) {
    return { error, hasError: true };
  }

  componentDidCatch(error: Error, info: { componentStack: string }) {
    if (typeof this.props.onError === 'function') {
      this.props.onError.call(this, error, info.componentStack);
    }
  }

  resetError: Function = () => {
    this.setState({ error: null, hasError: false });
  };

  render() {
    const { FallbackComponent, children, textStyle } = this.props;
    const { error, hasError } = this.state;
    return hasError ? (
      FallbackComponent !== undefined ? (
        FallbackComponent
      ) : (
        <SafeAreaView style={{ height: hp('100%'), width: wp('100%') }}>
          <View
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              paddingHorizontal: wp('4%'),
              alignItems: 'flex-start',
            }}>
            <Text style={[{ color: '#23394F', fontSize: FontSize.TITLE }, textStyle]}>اوه!</Text>
            <Text
              style={[
                { color: '#23394F', fontSize: FontSize.SUBTITLE, marginVertical: hp('0.5') },
                textStyle,
              ]}>
              یک خطا اتفاق افتاده است
            </Text>
            <Text
              style={[
                { color: '#23394F', fontSize: FontSize.CONTENT, marginVertical: hp('0.5') },
                textStyle,
              ]}>
              بر روی خطا کلیک کنید تا در کلیببورد شما متن خطا ذخیره شود
            </Text>

            {/* متن خطا */}
            <TouchableOpacity
              style={{ alignSelf: 'flex-end', marginVertical: hp('1') }}
              onPress={() => Clipboard.setString(error.toString())}>
              <Text style={{ color: '#707070', fontSize: FontSize.SUBTITLE }}>
                {error.toString()}
              </Text>
            </TouchableOpacity>
            <Button
              style={{ alignSelf: 'center', marginVertical: hp('1') }}
              onPress={() => this.resetError()}
              textStyle={[{ fontSize: FontSize.BUTTON }, textStyle]}
              text="اجرای مجدد"
            />
          </View>
        </SafeAreaView>
      )
    ) : (
      children
    );
  }
}

export default ErrorBoundary;
