import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    description: {
        color: theme.color.gray,
        fontFamily: theme.font.medium,
        textAlign: "center",
        fontSize: 14,
        flex: 1,
        textAlignVertical: "center"
    },
    image: {
        flex: 1
    },
    view: {
        flex: 1,
        backgroundColor: theme.color.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 24,
        marginTop: -42,
        padding: 12
    }
});