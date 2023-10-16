import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from '../../global/theme';
import { styles } from './styles';

export function AddPlanting(){
    const [local, setLocal] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.title}>
                    Plantio
                </Text>

                <ScrollView>
                    
                </ScrollView>
            </View>
        </View>
    );
}