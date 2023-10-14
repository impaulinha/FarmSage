import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.color.lightGray
    },
    header: {
        backgroundColor: theme.color.cyanGreen,
        height: 60,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40
    },
    text: {
        color: theme.color.black,
        fontFamily: theme.font.medium,
        fontSize: 15,
        marginVertical: 30,
        marginHorizontal: 25
    },
    viewCards: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        marginBottom: 15
    }
});