import { StyleSheet } from 'react-native'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from 'react-native-responsive-dimensions'
import { Fonts } from '../../../../utils/fonts'

export default StyleSheet.create({
    button: {
        flexDirection: 'row',
        backgroundColor: '#3D5D96',
        width: '75%',
        borderRadius: 18,
        marginTop: responsiveWidth(30),
    },
    fbSpan: {
        flex: 1,
        width: responsiveWidth(15),
        borderRadius: 18,
        backgroundColor: '#2B4C7B',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fbLogo: {
        // alignItems: 'center',
        width: responsiveWidth(7),
        height: responsiveWidth(7),
    },
    loginTextContainer: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginText: {
        fontSize: responsiveFontSize(2),
        fontFamily: Fonts.MuliBold,
        color: '#FFFFFF',
        marginTop: 15,
        marginBottom: 15,
        alignItems: 'center',
        alignSelf: 'center',
    },
})
