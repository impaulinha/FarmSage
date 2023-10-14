import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.color.lightGray,
        padding: 7,
        borderRadius: Dimensions.get('window').height * 0.50
    }
});