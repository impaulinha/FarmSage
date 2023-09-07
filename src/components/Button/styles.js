import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.color.cyanGreen,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12
    },
    text: {
        color: theme.color.white,
        fontFamily: theme.font.semibold,
        fontSize: 20,
        textTransform: 'uppercase'
    }
});