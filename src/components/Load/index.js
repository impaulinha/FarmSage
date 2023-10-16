import React from 'react';
import { View } from 'react-native';
import { DotIndicator } from 'react-native-indicators';
import { styles } from './styles';

export function Load({ color }){
    return (
        <View style={styles.container}>
            <DotIndicator 
                color={color}
            />
        </View>
    );
}