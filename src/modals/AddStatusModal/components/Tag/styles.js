import { StyleSheet } from 'react-native'
import {
    responsiveHeight,
    responsiveFontSize,
    responsiveWidth,
} from 'react-native-responsive-dimensions'
import { Fonts } from '../../../../utils/fonts'

export default StyleSheet.create({
    tag: {
        marginLeft: 10,
        marginTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 2,
        paddingTop: 2,
        borderRadius: 15,
        alignSelf: 'flex-start',
    },
    tagText: {
        fontFamily: Fonts.NunitoExtraBold,
        fontSize: responsiveFontSize(2),
        color: '#ffffff',
    },
})
