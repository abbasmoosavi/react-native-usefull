## Stateless

<br/>

You can use either a function or a class for creating stateless components. But unless you need to use a lifecycle hook in your components, you should go for stateless functional components. There are a lot of benefits if you decide to use stateless functional components here; they are easy to write, understand, and test, and you can avoid the this keyword altogether. However, as of React v16, there are no performance benefits from using stateless functional components over class components. 

The downside is that you can't have lifecycle hooks. The lifecycle method ShouldComponentUpdate() is often used to optimize performance and to manually control what gets rerendered. You can't use that with functional components yet. Refs are also not supported.

```javascript
const HelloWorld = ({name}) => (
 <div>{`Hi ${name}`}</div>
);
```

#### Example in this project

Toolbar.js in store tab

```javascript
/**
 * Custom Toolbar for store tab
 */
import React from 'react'
import { Text, View } from 'react-native'
import { FontFamily, FontSize, Integer } from '../../../../styles'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Images } from '../../../../assets'
import Strings from '../../../../services/language/Strings'
import helper from '../../../../utils/helper'
import UFRN from 'react-native-usefull'

const Toolbar = ({ theme, profile }) => {

  const Color = theme

  return (
    <View style={{
      width: '100%', height: Integer.TOOLBAR_HEIGHT, flexDirection: 'row', alignItems: 'center', backgroundColor: Color.BACKGRAND_TOOLBAR, paddingHorizontal: Integer.PADDING_HORIZENTAL,
    }}>

      <View style={{ height: '100%', width: '40%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
        <UFRN.Image
          tintColor={Color.NORMAL}
          source={Images.ic_bottom_store} resizeMode={'contain'}
          style={{ height: wp('7%'), width: wp('7%') }} />
        <Text style={{ marginStart: wp('1%'), color: Color.NORMAL, fontFamily: FontFamily.TITLE, fontSize: FontSize.SUBTITLE }}>{Strings.storeScreen.title}</Text>
      </View>
      
      <View style={{ height: '100%', width: '60%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
        <Text style={{ marginEnd: wp('2%'), color: Color.NORMAL, fontSize: FontSize.SUBTITLE, fontFamily: FontFamily.SUBTITLE }}>{helper.formatToUnits(profile.eraser, 1)}</Text>
        <UFRN.Image resizeMode={'contain'} style={{ marginEnd: wp('2%'), height: wp('5%'), width: wp('5%') }} source={Images.ic_eraser} />
        <Text style={{ marginEnd: wp('2%'), color: Color.NORMAL, fontSize: FontSize.SUBTITLE, fontFamily: FontFamily.SUBTITLE }}>{helper.formatToUnits(profile.life, 1)}</Text>
        <UFRN.Image resizeMode={'contain'} style={{ marginEnd: wp('2%'), height: wp('5%'), width: wp('5%') }} source={Images.ic_heart} />
        <Text style={{ marginEnd: wp('2%'), color: Color.NORMAL, fontSize: FontSize.SUBTITLE, fontFamily: FontFamily.SUBTITLE }}>{helper.formatToUnits(profile.coin, 1)}</Text>
        <UFRN.Image resizeMode={'contain'} style={{ height: wp('5%'), width: wp('5%') }} source={Images.ic_coin} />
      </View>

    </View >
  )
}

export default Toolbar
```