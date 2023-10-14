import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.color.lightGray,
        alignItems: 'center'
    },
    header: {
        backgroundColor: theme.color.cyanGreen,
        padding: 35,
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
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: 170,
        height: 190,
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 10
    },
    txtCard: {
        color: theme.color.gray,
        fontFamily: theme.font.bold,
        fontSize: 18
    }
});