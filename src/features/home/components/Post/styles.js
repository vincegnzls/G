import { StyleSheet } from 'react-native'
import {
    responsiveWidth,
    responsiveHeight,
    responsiveFontSize,
} from 'react-native-responsive-dimensions'
import { Fonts } from '../../../../utils/fonts'

export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: responsiveHeight(1.3),
        paddingBottom: responsiveHeight(1.3),
        paddingLeft: responsiveWidth(4),
        paddingRight: responsiveWidth(4),
        borderColor: '#BCBABA',
        borderBottomWidth: 0.5,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },
    button: {},
    leftContainer: {
        flex: 2,
    },
    midContainer: {
        flex: 6,
        flexDirection: 'column',
    },
    rightContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageContainer: {
        width: responsiveWidth(13),
        height: responsiveWidth(13),
        borderRadius: responsiveWidth(12),
        borderColor: '#9663EF',
        borderWidth: 1.5,
        marginBottom: responsiveWidth(2),
    },
    distanceText: {
        fontFamily: Fonts.MuliLight,
        fontSize: responsiveFontSize(1.4),
        color: '#9B9B9B',
    },
    nameText: {
        fontFamily: Fonts.MuliBold,
        fontSize: responsiveFontSize(1.8),
        color: '#4A4A4A',
    },
    tagsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    detailsText: {
        fontFamily: Fonts.MuliLight,
        fontSize: responsiveFontSize(1.5),
        color: '#4A4A4A',
    },
    time: {
        fontFamily: Fonts.MuliLight,
        fontSize: responsiveFontSize(1.5),
        color: '#9B9B9B',
    },
    tagContainer: {
        marginTop: responsiveHeight(1.4),
    },
})
