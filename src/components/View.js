/**
 * کلید ها
 */
import React, { Component } from 'react'
import { Text, View, ViewStyle, ImageStyle, TextStyle, ImageSourcePropType } from 'react-native'
import UFRN from '..';

type PropsType = {
    /**
     * @property
     * string for text 
     */
    text: String,
    /**
     * @property
     * image source,
     * view have a image default,
     * if you have url enter value exp: { uri: Your url } or 
     * if you have local image use require('path')
     */
    imageSource: ImageSourcePropType,
    /**
     * @property
     * view style, you can enter styles array
     */
    style?: ViewStyle | ViewStyle[],
    /**
     * @property
     * text style,
     * view have a text default,
     */
    textStyle?: TextStyle | TextStyle[],
    /**
     * @property
     * image style, you can enter styles array
     */
    imageStyle?: ImageStyle | ImageStyle[],

};
type StateType = {
};
class Layout extends Component<PropsType, StateType>{

    constructor(props) {
        super(props)
        this.state = {
            height: UFRN.Values.BUTTON_HEIGHT,
            width: UFRN.Values.BUTTON_WIDTH,
            fontSize: UFRN.FontSize.SUBTITLE,
            backgroundColor: UFRN.Values.BUTTON_BACKGROUND,
            textColor: UFRN.Values.BUTTON_TEXT_COLOR
        };
    }

    componentDidMount() {

    }


    render() {
        const { fontSize, textColor, backgroundColor, height, width } = this.state
        const { children, style, textStyle, imageStyle, text, imageSource } = this.props
        const Radius = style !== undefined && style.height !== undefined ? style.height / 2 : height / 2
        return (
            <View
                style={[{ borderRadius: Radius, backgroundColor, height, width, justifyContent: 'center', alignItems: 'center', }, style]}>

                {children}

                {text !== undefined ?
                    <Text style={[{ color: textColor, fontSize: fontSize }, textStyle]}>{text}</Text>
                    :
                    null
                }

                {imageSource !== undefined ?
                    <UFRN.Image style={[{ height: '40%', width: '40%' }, imageStyle]} source={imageSource} resizeMode={'contain'} />
                    :
                    null
                }

            </View>
        )
    }
}


export default Layout