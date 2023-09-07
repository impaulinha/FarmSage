import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

const Button = ({ text, action }) => (
    <TouchableOpacity 
        style={styles.container}
        activeOpacity={0.8}
        onPress={action}
    >
        <Text style={styles.text}>
            {text}
        </Text>
    </TouchableOpacity>
)

export default React.memo(Button);