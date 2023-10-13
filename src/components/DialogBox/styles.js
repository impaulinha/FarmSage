import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
        justifyContent: 'center'
    },
    modal: {
        backgroundColor: theme.color.white,
        margin: 20,
        padding: 15,
        borderRadius: 10
    },
    title: {
        color: theme.color.black,
        fontFamily: theme.font.bold,
        fontSize: 20,
        marginBottom: 15
    },
    message: {
        color: theme.color.black,
        fontFamily: theme.font.regular,
        fontSize: 16,
        marginBottom: 15
    },
    btn: {
        marginTop: 15,
        backgroundColor: theme.color.paleGreen,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    txtBtn: {
        color: theme.color.white,
        fontFamily: theme.font.medium,
        fontSize: 16
    }
});