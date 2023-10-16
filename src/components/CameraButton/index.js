import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';

export function CameraButton({ action, disable }){
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.8}
            onPress={action}
            disabled={disable}
        >
            <MaterialIcons
                name="add-a-photo"
                color="#FFF"
                size={26}
            />
        </TouchableOpacity>
    );
}