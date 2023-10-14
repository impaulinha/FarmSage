import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputSearch: {
        backgroundColor: theme.color.white,
        width: '100%',
        fontSize: 18,
        fontFamily: theme.font.regular,
        padding: 10,
        color: theme.color.black,
        borderRadius: 10
    },
    icon: {
        marginLeft: -40
    }
});
