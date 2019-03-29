import { StyleSheet, Platform } from 'react-native'
import {
    responsiveHeight,
    responsiveFontSize,
    responsiveWidth,
} from 'react-native-responsive-dimensions'
import { Fonts } from '../../utils/fonts'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginTop: Platform.OS === 'ios' ? responsiveHeight(6) : responsiveHeight(3),
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: responsiveHeight(3),
    },
    headerText: {
        fontFamily: Fonts.FredokaOne,
        fontSize: responsiveFontSize(4),
        color: '#3FC3D8',
    },
    imageLogo: {
        marginLeft: 10,
        marginRight: 10,
        width: responsiveWidth(13),
        height: responsiveWidth(13),
    },
    selectedTagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 25,
        marginRight: 25,
        marginTop: responsiveHeight(1.5),
        paddingBottom: 10,
        backgroundColor: '#F3F3F3',
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 18,
    },
    tagSelectionContainer: {
        marginTop: responsiveHeight(1.5),
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tagSelectionTitle: {
        marginTop: responsiveHeight(1.2),
        marginBottom: responsiveHeight(1.2),
        fontFamily: Fonts.NunitoExtraBold,
        fontSize: responsiveFontSize(2),
        color: '#4A4A4A',
    },
    descriptionTite: {
        fontFamily: Fonts.NunitoExtraBold,
        fontSize: responsiveFontSize(2),
        color: '#4A4A4A',
    },
    tagsScrollView: {
        paddingBottom: 200,
        marginTop: responsiveHeight(1),
        paddingLeft: responsiveWidth(6),
        paddingRight: responsiveWidth(6),
        width: '100%',
    },
    tagsContentContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        width: '100%',
        paddingBottom: 20,
    },
    sectionTitle: {
        fontFamily: Fonts.MuliBold,
        color: '#6B6B6B',
        fontSize: responsiveFontSize(1.8),
    },
    saveButtonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    saveButton: {
        height: '100%',
        width: '100%',
        backgroundColor: '#9663EF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    saveText: {
        fontFamily: Fonts.MuliBold,
        fontSize: responsiveFontSize(2),
        color: '#ffffff',
    },
    descriptionInput: {
        width: '85%',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: responsiveHeight(1.3),
        paddingBottom: responsiveHeight(1.3),
        marginTop: 16,
        borderRadius: 18,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#D5D5D5',
        alignSelf: 'center',
        fontFamily: Fonts.MuliRegular,
        fontSize: responsiveFontSize(1.7),
    },
})
