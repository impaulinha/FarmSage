import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.color.green,
        width: 56,
        height: 56,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 20,
        zIndex: 100,
        top: 5
    }
});