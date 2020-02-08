## IndicatorViewPager

<br/>

<img src="../images/img_indicator_view_pager.png" width="280" height="500">

### Example

```javascript
.
.
import { IndicatorViewPager, PagerDotIndicator, } from 'react-native-best-viewpager';
.
.
    constructor(props) {
        super(props);
        this.state = {
            initialPage: 0,
            data: [
                { id: 1, title: Strings.introScreen.introTitle1, text: Strings.introScreen.introText1, sourceImage: Images.img_intro_first },
                { id: 2, title: Strings.introScreen.introTitle2, text: Strings.introScreen.introText2, sourceImage: Images.img_intro_second },
                { id: 3, title: Strings.introScreen.introTitle3, text: Strings.introScreen.introText3, sourceImage: Images.img_intro_third },
                { id: 4, title: Strings.introScreen.introTitle4, text: Strings.introScreen.introText4, sourceImage: Images.img_intro_fourth }
            ]
        }
    }
    _renderDotIndicator() {
        const { theme } = this.props
        const Color = theme
        return <
            PagerDotIndicator
            style={{ marginTop: hp('1%') }}
            dotStyle={{ height: Integer.PAGINATION_DOT, width: Integer.PAGINATION_DOT, borderRadius: Integer.PAGINATION_DOT / 2, backgroundColor: Color.PAGINATION_DOT_INACTIVE }}
            selectedDotStyle={{ height: Integer.PAGINATION_DOT, width: Integer.PAGINATION_DOT, borderRadius: Integer.PAGINATION_DOT / 2, backgroundColor: Color.PAGINATION_DOT_ACTIVE }}
            pageCount={4}
        />;
    }
    nexPage() {
        this.state.initialPage++
        if (this.state.initialPage > 3) {
            Navigation.reset("authentication")
        } else {
            this.viewPagerRef.setPage(this.state.initialPage)
            if (I18nManager.isRTL) {
                this.imageAnim[this.state.initialPage].slideInLeft(800)
                this.titleAnim[this.state.initialPage].slideInLeft(1000)
                this.textAnim[this.state.initialPage].slideInLeft(1200)
            } else {
                this.imageAnim[this.state.initialPage].slideInRight(800)
                this.titleAnim[this.state.initialPage].slideInRight(1000)
                this.textAnim[this.state.initialPage].slideInRight(1200)
            }

        }
    }
.
.
    <IndicatorViewPager
        ref={ref => this.viewPagerRef = ref}
        changePageWithAnimation={true}
        initialPage={this.state.initialPage}
        pagerStyle={{ height: '100%', width: '100%' }}
        style={{ height: '80%', width: '100%', justifyContent: 'center', alignItems: 'center' }}
        indicator={this._renderDotIndicator()}
        onPageSelected={(index) => this.setState({ initialPage: index.position })}
    >

        {this.state.data.map((item, i) =>
            <Col style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Animatable.View
                    ref={(ref) => this.imageAnim[i] = ref}
                    animation={I18nManager.isRTL ? 'slideInLeft' : 'slideInRight'}
                    duration={800} >
                    <UFRN.Image style={{ marginTop: hp('2%'), height: wp('80%'), width: wp('80%') }} resizeMode={'contain'} source={item.sourceImage} />
                </Animatable.View>
                <Animatable.Text
                    ref={(ref) => this.titleAnim[i] = ref}
                    animation={I18nManager.isRTL ? 'slideInLeft' : 'slideInRight'}
                    duration={1000}
                    style={{ color: Color.AMARANTH, textAlign: "center", fontSize: FontSize.TITLE, marginTop: hp('4%'), fontFamily: FontFamily.TITLE }}>
                    {item.title}
                </Animatable.Text>
                <Animatable.Text
                    ref={(ref) => this.textAnim[i] = ref}
                    animation={I18nManager.isRTL ? 'slideInLeft' : 'slideInRight'}
                    duration={1200}
                    style={{ color: Color.TEXT_TITLE, width: '60%', textAlign: "center", fontSize: FontSize.SUBTITLE, lineHeight: hp('3.7%'), marginHorizontal: wp('4%'), marginTop: hp('1%'), fontFamily: FontFamily.CONTENT }}>
                    {item.text}
                </Animatable.Text>
            </Col>
        )}
    </IndicatorViewPager>
.
.
```
# Reference

Continue read document click [here](https://www.npmjs.com/package/react-native-best-viewpager)