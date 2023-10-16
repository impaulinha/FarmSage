import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.color.lightGray
    },
    header: {
        backgroundColor: theme.color.cyanGreen,
        padding: 20,
        paddingBottom: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        width: '100%',
        marginBottom: 20
    },
    card: {
        backgroundColor: theme.color.white,
        padding: 10,
        marginHorizontal: 18,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        borderRadius: 10
    },
    title: {
        color: theme.color.black,
        fontFamily: theme.font.bold,
        fontSize: 20,
        marginHorizontal: 30,
        marginVertical: 25
    },
    text: {
        width: '75%',
        paddingLeft: 25,
        fontFamily: theme.font.regular,
        fontSize: 18,
        color: theme.color.black
    },
    empty: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        height: 500,
        padding: 20
    },
    txtEmpty: {
        color: theme.color.black,
        fontSize: 16,
        fontFamily: theme.font.medium,
        textAlign: 'center'
    }
});