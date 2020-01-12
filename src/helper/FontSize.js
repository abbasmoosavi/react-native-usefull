import { Platform, StatusBar, Dimensions } from "react-native";
const { width } = Dimensions.get("window");
const deviceHeight = isIphoneX() ? width - 78 : Platform.OS === "android" ? width - StatusBar.currentHeight : width;
/**
 * list of font sizes to use in style of view object in app
 */
export default {
    HEADER: RFPercentage(6.4),
    HEADER_HEIGHT: RFPercentage(9),
    TITLE: RFPercentage(6),
    TITLE_HEIGHT: RFPercentage(8),
    SUBTITLE: RFPercentage(4.8),
    SUBTITLE_HEIGHT: RFPercentage(6.8),
    ITEM: RFPercentage(3.96),
    CONTENT: RFPercentage(3.82),
    CONTENT_HEIGHT: RFPercentage(4.46),
    MEDIUM: RFPercentage(3.12),
    SMALL: RFPercentage(2.78),
    CHAT: RFPercentage(3.45),
    BUTTON: RFPercentage(4.12),
    TOAST: RFPercentage(3.62),
}

function RFPercentage(percent) {
    const heightPercent = (percent * deviceHeight) / 100;
    return Math.round(heightPercent);
}

function isIphoneX() {
    const dimen = Dimensions.get('window');
    return (
        Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        ((dimen.height === 812 || dimen.width === 812) || (dimen.height === 896 || dimen.width === 896))
    );
}
