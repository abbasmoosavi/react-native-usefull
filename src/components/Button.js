/**
 * کلید ها
 */
import React, { Component } from 'react'
import { Text, ActivityIndicator, ViewStyle, TextStyle, ImageStyle, ImageSourcePropType } from 'react-native'
import UFRN from '..';

type PropsType = {

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
     * string for text button
     */
    text: String,
    /**
     * @property
     * image source,
     * button have a image default,
     * if you have url enter value exp: { uri: Your url } or 
     * if you have local image use require('path')
     */
    imageSource: ImageSourcePropType,
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
     * image style, you can enter styles array
     */
    imageStyle?: ImageStyle | ImageStyle[],
    /**
     * @function
     * action for button onPress
     */
    onPress: Function,

};
type StateType = {
};
class Button extends Component<PropsType, StateType>{

    constructor(props) {
        super(props)
        this.state = {
            height: UFRN.Values.BUTTON_HEIGHT,
            width: UFRN.Values.BUTTON_WIDTH,
            loadingColor: UFRN.Values.LOADING_COLOR,
            fontSize: UFRN.FontSize.SUBTITLE,
            backgroundColor: UFRN.Values.BUTTON_BACKGROUND,
            textColor: UFRN.Values.BUTTON_TEXT_COLOR
        };
    }


    render() {
        const { fontSize, textColor, height, width, backgroundColor } = this.state
        const { children, disabled, loading, style, textStyle, imageStyle, text, imageSource, onPress } = this.props
        const Radius = style !== undefined && style.height !== undefined ? style.height / 2 : height / 2
        const loadingColor = textStyle !== undefined && textStyle.color !== undefined ? textStyle.color : this.state.loadingColor
        return (
            <UFRN.Ripple
                onPress={onPress}
                disabled={loading || disabled}
                rippleContainerBorderRadius={Radius}
                style={[{ borderRadius: Radius, backgroundColor, height, width, justifyContent: 'center', alignItems: 'center', }, style]}>

                {children}

                {text !== undefined ? loading ? (
                    <ActivityIndicator color={loadingColor} size={fontSize * 1.5} />
                ) : (
                        <Text style={[{ color: textColor, fontSize: fontSize }, textStyle]}>{text}</Text>
                    ) : null}

                {imageSource !== undefined ? loading ? (
                    <ActivityIndicator color={loadingColor} size={fontSize * 1.5} />
                ) : (
                        <UFRN.Image style={[{ height: '40%', width: '40%' }, imageStyle]} tintColor={imageStyle.tintColor} source={imageSource} resizeMode={'contain'} />
                    ) : null}

            </UFRN.Ripple>
        )
    }
}


export default Button