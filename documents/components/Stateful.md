## Statefull

<br/>

In a component, state is data we import — typically to show the user — that is subject to change. It could change because the database we’re getting from may be updated, the user modified it — there are so many reasons that data changes!

<br/>

Stateful components are always class components. As previously mentioned, stateful components have a state that gets initialized in the constructor. 

```javascript
// Here is an excerpt from the counter example
constructor(props) {
  super(props);
  this.state = { count: 0 };
}
```
<br/>

We've created a state object and initialized it with a count of 0. There is an alternative syntax proposed to make this easier called class fields. It's not a part of the ECMAScript specification yet, but If you're using a Babel transpiler, this syntax should work out of the box.


```javascript
class App extends Component {
   
  /*
  // Not required anymore
  constructor() {
      super();
      this.state = {
        count: 1
      }
  }
  */
   
  state = { count: 1 };
   
  handleCount(value) {
      this.setState((prevState) => ({count: prevState.count+value}));
  }
 
  render() {
    // omitted for brevity
  }
   
}
```

You can avoid using the constructor altogether with this new syntax.

#### Example in this project

StudyInformation.js

```javascript
/**
 * List of study cards
 */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontFamily, FontSize } from '../../../../styles'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Navigation } from '../../../../controllers';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Strings } from '../../../../services/language';
import { connect } from 'react-redux'
import MagazineActions from '../../../../redux/reducers/magazine/Actions';
import UFRN from 'react-native-usefull';
import AppConfig from '../../../../configs/AppConfig';
import { Row, Col } from 'react-native-easy-grid';

class StudyInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSlide: 0,
            avgColors: [],
        }
    }

    render() {
        const { theme } = this.props
        const Color = theme
        const CAROUSEL_ITEM_WIDTH = wp('80%')
        const CAROUSEL_HEIGHT = wp('80%')
        if (this.props.relatedPosts.length > 0) {
            return (
                <View style={{ marginTop: hp('4%'), alignSelf: 'center', flexDirection: 'column' }}>
                    <Row style={{ width: '92%', height: hp('4%'), alignSelf: 'center', }}>
                        <Col style={{ height: '100%', width: '75%', justifyContent: 'center', alignItems: 'flex-start' }}>
                            <Text style={{ color: Color.TEXT_TITLE, fontFamily: FontFamily.TITLE, fontSize: FontSize.SUBTITLE }}>{Strings.studyScreen.title}</Text>
                        </Col>
                        <Col style={{ height: '100%', width: '25%', justifyContent: 'center', alignItems: 'flex-end' }}>
                            <TouchableOpacity onPress={() => Navigation.navigate('studiesListScreen')} >
                                <Text style={{ color: Color.TEXT_TITLE, fontFamily: FontFamily.CONTENT, fontSize: FontSize.CONTENT }}>{Strings.global.all}</Text>
                            </TouchableOpacity>
                        </Col>
                    </Row>
                    <View style={{ width: '100%', marginTop: hp('1%'), alignSelf: 'center', alignItems: 'center' }}>
                        <Carousel
                            ref={(c) => { this._carousel = c; }}
                            data={this.props.relatedPosts}
                            onSnapToItem={(index) => this.setState({ activeSlide: index })}
                            renderItem={(item, index) => (
                                <UFRN.ChocolateCard
                                    key={index}
                                    onPress={() => Navigation.navigate('studyScreen', {
                                        id: item.id,
                                        title: item.title
                                    })}
                                    title={item.title}
                                    titleStyle={{ fontFamily: FontFamily.TITLE, fontSize: FontSize.SUBTITLE, }}
                                    text={item.snapshot}
                                    textStyle={{ fontFamily: FontFamily.CONTENT, fontSize: FontSize.CONTENT }}
                                    backgroundColorButton={Color.mode === 'dark' ? Color.TEXT_TITLE : Color.AMARANTH}
                                    imageSource={AppConfig.BASE_URL + item.cover || 'http://raiq.ir/RaiQ.png'}
                                    textButton={Strings.studyScreen.moreStudy}
                                    textButtonStyle={{ color: Color.mode === 'dark' ? Color.AMARANTH : Color.BUTTON_TEXT, fontSize: FontSize.CONTENT, fontFamily: FontFamily.BUTTON }}
                                    style={{ height: wp('72%'), width: '100%', }} />
                            )}
                            containerCustomStyle={{ height: CAROUSEL_HEIGHT, paddingTop: wp('2%') }}
                            sliderWidth={wp('100%')}
                            itemWidth={CAROUSEL_ITEM_WIDTH}
                        />
                    </View>

                </View>
            );
        } else {
            return null
        }
    }
}


const mapStateToProps = (state) => {
    return {
        theme: state.theme,
        relatedPosts: state.magazine.relatedPosts,
        relatedPostsLoading: state.magazine.relatedPostsLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRelatedPosts: () => {
            dispatch(MagazineActions.getRelatedPosts())
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StudyInformation)
```
