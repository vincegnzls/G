import { StyleSheet, Platform } from 'react-native'
import {
    responsiveHeight,
    responsiveFontSize,
    responsiveWidth,
} from 'react-native-responsive-dimensions'
import { Fonts } from '../../../../utils/fonts'

export default StyleSheet.create({
    tag: {
        paddingBottom: Platform.OS === 'ios' ? 0 : 1,
        flexDirection: 'row',
        borderRadius: 15,
    },
    tagText: {
        fontFamily: Fonts.NunitoExtraBold,
        fontSize: responsiveFontSize(1.9),
        color: '#ffffff',
    },
    selectedTag: {
        marginLeft: 10,
        marginTop: 10,
        flexDirection: 'row',
        borderRadius: 15,
        alignSelf: 'flex-start',
    },
    selectedTagTextContainer: {
        paddingLeft: 15,
        paddingRight: 10,
        paddingBottom: 2,
        paddingTop: 2,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    xContainer: {
        paddingRight: 12,
        paddingBottom: 2,
        paddingTop: Platform.OS === 'ios' ? 2 : 0,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    xText: {
        fontFamily: Fonts.MuliExtraLight,
        fontSize: responsiveFontSize(1.9),
        color: '#ffffff',
    },
    countText: {
        fontFamily: Fonts.MuliExtraLight,
        fontSize: responsiveFontSize(1.5),
        color: '#ffffff',
    },
})
