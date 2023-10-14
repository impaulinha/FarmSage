import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.color.lightGray
    },
    header: {
        backgroundColor: theme.color.cyanGreen,
        padding: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40
    },
    title: {
        color: theme.color.white,
        fontFamily: theme.font.bold,
        fontSize: 26
    },
    subtitle: {
        color: theme.color.white,
        fontFamily: theme.font.regular,
        fontSize: 16,
        marginTop: 8
    },
    category: {
        marginHorizontal: 20,
        marginVertical: 25,
        borderColor: theme.color.green,
        borderWidth: 0.5,
        padding: 5,
        borderRadius: 20,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        backgroundColor: theme.color.white,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 8,
        padding: 12,
        borderRadius: 10,
        paddingTop: 30,
        paddingBottom: 30
    },
    align: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleCard: {
        fontFamily: theme.font.bold,
        fontSize: 20,
        color: theme.color.black,
        marginBottom: 20
    },
    txtCard: {
        color: theme.color.black,
        fontFamily: theme.font.regular,
        fontSize: 14
    }
});