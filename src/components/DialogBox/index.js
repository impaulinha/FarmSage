import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Divider } from '../Divider';

export function DialogBox({ title, message, action }){
    return (
        <View style={styles.container}>
            <View style={styles.modal}>
                <Text style={styles.title}>
                    {title}
                </Text>
                
                <Text style={styles.message}>
                    {message}
                </Text>

                <Divider />

                <TouchableOpacity 
                    style={styles.btn}
                    onPress={action}
                    activeOpacity={0.8}
                >
                    <Text style={styles.txtBtn}>
                        OK
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}