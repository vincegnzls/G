import { StyleSheet, Platform } from 'react-native'
import {
    responsiveHeight,
    responsiveFontSize,
    responsiveWidth,
} from 'react-native-responsive-dimensions'
import { Fonts } from '../../../../utils/fonts'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginTop: Platform.OS === 'ios' ? responsiveHeight(6) : responsiveHeight(3),
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    header1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    header2: {
        flex: 1,
        justifyContent: 'center',
    },
    header3: {
        flex: 1,
    },
    headerText: {
        fontFamily: Fonts.MuliBold,
        fontSize: responsiveFontSize(2),
        textAlign: 'center',
        color: '#4A4A4A',
    },
    mainContainer: {
        marginTop: responsiveWidth(7),
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
    },
    tagContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gForContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gForText: {
        fontFamily: Fonts.NunitoExtraBold,
        fontSize: responsiveFontSize(2.3),
        color: '#4A4A4A',
    },
    gForTextInput: {
        width: '70%',
        borderBottomWidth: 1,
        borderColor: '#C9C9C9',
        textAlign: 'center',
        padding: 10,
        fontFamily: Fonts.MuliLight,
        fontSize: responsiveFontSize(2.2),
    },
    buttonContainer: {
        height: responsiveWidth(30),
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    saveButton: {
        height: '49%',
        width: '100%',
        backgroundColor: '#7ACC6B',
        alignItems: 'center',
        justifyContent: 'center',
    },
    saveText: {
        fontFamily: Fonts.MuliBold,
        fontSize: responsiveFontSize(2),
        color: '#ffffff',
    },
})
