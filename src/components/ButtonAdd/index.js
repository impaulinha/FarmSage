import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from '../../global/theme';
import { styles } from './styles';

const ButtonAdd = ({ action }) => (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
        <Ionicons 
            name='add-outline' size={40} color={theme.color.green} 
        />
    </TouchableOpacity>
)

export default React.memo(ButtonAdd);