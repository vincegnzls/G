import { StyleSheet } from 'react-native'
import { responsiveWidth } from 'react-native-responsive-dimensions'

export default StyleSheet.create({
    drawerButton: {
        width: responsiveWidth(10),
        height: responsiveWidth(10),
        borderRadius: responsiveWidth(25),
        borderWidth: 1,
        borderColor: '#CC52FF',
        backgroundColor: '#ffffff',
        marginLeft: 20,
    },
})
