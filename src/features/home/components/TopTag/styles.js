import { StyleSheet } from 'react-native'
import {
    responsiveHeight,
    responsiveFontSize,
    responsiveWidth,
} from 'react-native-responsive-dimensions'
import { Fonts } from '../../../../utils/fonts'

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: responsiveWidth(2.9),
        paddingBottom: responsiveWidth(2.9),
        width: '100%',
        backgroundColor: '#FFFFFF',
    },
    labelText: {
        marginLeft: responsiveWidth(5),
        fontFamily: Fonts.FredokaOne,
        fontSize: responsiveFontSize(1.9),
        color: '#4A4A4A',
    },
    addButton: {
        width: responsiveWidth(14),
        marginLeft: responsiveWidth(2.5),
        alignItems: 'center',
        padding: 5,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ffffff',
        backgroundColor: '#9663EF',
    },
    buttonText: {
        fontFamily: Fonts.NunitoExtraBold,
        fontSize: responsiveFontSize(1.7),
        color: '#ffffff',
    },
    subContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },
    tagContainer: {
        marginLeft: responsiveWidth(3),
    },
})
