import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
     container: {
        flex: 1,
        backgroundColor: theme.color.lightGray,
        alignItems: 'center'
    },
    header: {
        backgroundColor: theme.color.cyanGreen,
        height: 250,
        justifyContent: 'center',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        width: '100%'
    },
    picture: {
        backgroundColor: theme.color.white,
        height: Dimensions.get('window').height * 0.20,
        width: Dimensions.get('window').height * 0.20,
        borderRadius: Dimensions.get('window').height * 0.20 / 0.50,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
        top: -80
    },
    txtPicture: {
        fontSize: 80,
        color: theme.color.green,
        fontFamily: theme.font.bold
    },
    name: {
        color: theme.color.black,
        fontFamily: theme.font.regular,
        backgroundColor: theme.color.white,
        padding: 15,
        borderRadius: 10,
        width: '100%',
        fontSize: 18,
        paddingLeft: 20
    },
    text: {
        color: theme.color.black,
        fontSize: 20
    },  
    plantation: {
        flexDirection: 'row',
        backgroundColor: theme.color.white,
        padding: 15,
        marginVertical: 20,
        borderRadius: 10,
        height: 110,
        alignItems: 'center'
    },
    logout: {
        flexDirection: 'row',
        backgroundColor: theme.color.white,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        paddingLeft: 20
    },
    txtBtn: {
        marginLeft: 20,
        fontFamily: theme.font.medium,
        fontSize: 18
    },
    input: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});