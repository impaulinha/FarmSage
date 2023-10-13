import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.color.cyanGreen,
        justifyContent: 'flex-end'
    },
    view: {
        backgroundColor: theme.color.white,
        flex: 0.9,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        padding: 30
    },
    title: {
        fontFamily: theme.font.medium,
        fontSize: 32,
        color: theme.color.black,
        marginTop: 40
    },
    subtitle: {
        fontFamily: theme.font.regular,
        fontSize: 18,
        color: theme.color.black,
        marginBottom: 80
    },
    input: {
        backgroundColor: theme.color.lightGray,
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        color: theme.color.black,
        fontFamily: theme.font.regular,
        fontSize: 16,
        paddingLeft: 20,
        paddingRight: 20,
        width: '100%'
    },
    viewInput: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    errormsg: {
        color: theme.color.red,
        fontFamily: theme.font.regular,
        fontSize: 13,
        alignSelf: 'flex-start',
        marginLeft: 8
    }
});