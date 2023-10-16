import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.color.lightGray
    },
    viewImg: {
        flex: 2.8
    },
    img: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
    viewInfo: {
        flex: 4,
        padding: 30,
        backgroundColor: theme.color.white,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingBottom: 0
    },
    title: {
        color: theme.color.cyanGreen,
        fontFamily: theme.font.medium,
        fontSize: 32,
        marginVertical: 20
    },
    description: {
        color: theme.color.black,
        fontFamily: theme.font.regular,
        fontSize: 16,
        textAlign: 'left'
    },
    subtitle: {
        fontFamily: theme.font.medium,
        fontStyle: 'italic',
        fontSize: 20,
        marginVertical: 20
    },
    card: {
        backgroundColor: theme.color.lightGray,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10
    },
    txtCard: {
        color: theme.color.black,
        fontSize: 16
    },
    txtResult: {
        width: '40%',
        textAlign: 'right',
        fontFamily: theme.font.semibold,
        flexWrap: 'wrap'
    }
});