import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import { theme } from '../../global/theme';
import { styles } from './styles';

export function Card({ name, icon, action }){
    const words = name.split(' ');

    return (
        <TouchableOpacity 
            style={styles.container} 
            activeOpacity={0.8}
            onPress={action}
        >
            <Icon
                name={icon} size={50} color={theme.color.gray} style={{ marginBottom: 15 }}
            />
            {
                words.map(( word, index ) => (
                    <Text key={index} style={styles.text}>
                        { word }
                    </Text>
                ))
            }
        </TouchableOpacity>
    );
}