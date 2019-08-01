import { StyleSheet } from 'react-native'
import { responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions'
import { Fonts } from '../../../../utils/fonts'

export default StyleSheet.create({
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
    tagContainer: {
        marginTop: responsiveHeight(1.2),
        marginLeft: responsiveHeight(1.2),
    },
})
