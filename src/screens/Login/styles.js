import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.color.cyanGreen
    },
    viewImg: {
        flex: 2.5
    },
    img: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
    viewLogin: {
        backgroundColor: theme.color.white,
        flex: 4,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 30,
        paddingVertical: 70
    },
    title: {
        color: theme.color.black,
        fontFamily: theme.font.medium,
        fontSize: 30,
        marginBottom: 55
    },
    input: {
        backgroundColor: theme.color.lightGray,
        borderRadius: 10,
        color: theme.color.black,
        fontFamily: theme.font.regular,
        fontSize: 18,
        padding: 10,
        paddingHorizontal: 20
    },
    viewInput: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 70
    },
    icon: {
        left: -42
    },
    text: {
        color: theme.color.black,
        fontFamily: theme.font.regular,
        textAlign: 'center',
        fontSize: 15,
        marginTop: 30
    }
});