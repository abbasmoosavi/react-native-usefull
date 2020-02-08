## Image

<br/>

![Image image](../../src/assets/images/img_intro_first@1x.png)

### Example

```javascript
.
.
import UFRN from 'react-native-usefull'
.
.
    <UFRN.Image style={{ marginTop: hp('2%'), height: wp('80%'), width: wp('80%') }} 
                resizeMode={'contain'} 
                source={item.sourceImage} 
    />
.
.
```

# Reference

## Props

#### **source**

if you have url enter value exp: { uri: Your url } or 
if you have local image use require('path')

TYPE         | REQUIRED    | DEFAULT
------------ | ----------- | ----------
_string_ , _{uri: http://image.png}_    | _no_        | 
___

#### **style**

style for  Image

TYPE         | REQUIRED    | DEFAULT
------------ | ----------- | ----------
_ImageStyle_    | _no_        | 
___

#### **tintColor**

tint color for  Image

TYPE         | REQUIRED    | DEFAULT
------------ | ----------- | ----------
_string_    | _no_        | 
___

#### **resizeMode**

resize mode image between cover, contain, stretch, repeat, center

TYPE         | REQUIRED    | DEFAULT
------------ | ----------- | ----------
_ImageResizeMode_    | _no_        | contain

## note
use FastImage from react-native-fast-image in base this component