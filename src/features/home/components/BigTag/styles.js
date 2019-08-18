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
        borderRadius: 17,
        width: responsiveWidth(32),
        height: responsiveWidth(9),
        justifyContent: 'center',
        alignItems: 'center',
    },
    tagText: {
        fontFamily: Fonts.NunitoExtraBold,
        fontSize: responsiveFontSize(2.4),
        color: '#ffffff',
    },
})
