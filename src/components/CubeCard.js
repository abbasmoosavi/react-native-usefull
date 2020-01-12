/**
 * آیتم های دسته بندی مجله رای
 */
import React, { Component } from 'react'
import { Text, ViewStyle, TextStyle, ImageSourcePropType } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import UFRN from 'react-native-usefull';

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
     * Magazine categories item border radius,
     * for background image and view 
     */
    borderRadius: Number,
    /**
     * @function
     * action for Magazine categories item onPress
     */
    onPress: Function,
};
type StateType = {
};
class CubeCard extends Component<PropsType, StateType>{

    constructor(props) {
        super(props)
        this.state = {
            fontSize: UFRN.FontSize.SUBTITLE,
            textColor: UFRN.Values.BUTTON_TEXT_COLOR
        };
    }

    render() {
        const { textColor, fontSize } = this.state
        const { text, imageSource, borderRadius, style, onPress, textStyle } = this.props
        return (
            <UFRN.Ripple
                onPress={onPress}
                rippleContainerBorderRadius={borderRadius}
                style={[{ borderRadius: borderRadius, height: wp('28%'), width: wp('28%'), justifyContent: 'center', alignItems: 'center', }, style]}>
                <UFRN.Image source={imageSource} resizeMode={'cover'} style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', borderRadius: borderRadius }} />
                <Text style={[{ position: 'absolute', color: textColor, fontSize: fontSize, textAlign: 'center' }, textStyle]}>{text}</Text>
            </UFRN.Ripple>
        )
    }
}



export default CubeCard