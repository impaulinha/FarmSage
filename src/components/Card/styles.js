import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.color.white,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: 170,
        height: 150,
        borderRadius: 10
    },
    text: {
        color: theme.color.gray,
        fontFamily: theme.font.bold,
        textAlign: 'center',
        fontSize: 14
    }
});