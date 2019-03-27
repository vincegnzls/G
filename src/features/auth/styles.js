import { StyleSheet } from 'react-native'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from 'react-native-responsive-dimensions'
import { Fonts } from '../../utils/fonts'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: responsiveHeight(2),
        paddingBottom: responsiveHeight(2),
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImage: {
        width: responsiveWidth(50),
        height: responsiveWidth(50),
    },
    title: {
        fontFamily: Fonts.FredokaOne,
        fontSize: responsiveFontSize(4),
        color: '#EB5993',
        paddingTop: responsiveHeight(2)
    },
    subTitle: {
        fontFamily: Fonts.MuliLight,
        fontSize: responsiveFontSize(2.5),
        color: '#6B6B6B',
        paddingTop: responsiveHeight(2)
    },
})
