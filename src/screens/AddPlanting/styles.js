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
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30
    },
    title: {
        fontFamily: theme.font.medium,
        fontSize: 30,
        marginBottom: 40
    },
    viewInput: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        //backgroundColor: theme.color.lightGray,
        width: '100%',
        padding: 12,
        borderRadius: 10,
        fontFamily: theme.font.regular
    }
});