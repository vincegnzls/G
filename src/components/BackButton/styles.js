import { StyleSheet } from 'react-native'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from 'react-native-responsive-dimensions'
import { Fonts } from '../../utils/fonts'

export default StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backIcon: {
        width: responsiveWidth(2.5),
        height: responsiveWidth(2.5),
        marginLeft: 20,
        marginRight: 10,
    },
    backText: {
        fontFamily: Fonts.MuliBold,
        fontSize: responsiveFontSize(2),
        color: '#9B9B9B',
    },
})
