import React from 'react';
import { View, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from '../../global/theme';
import { styles } from './styles';

export function Search({ onSearchChange }){
    const handleSearchChange = (text) => {
        onSearchChange(text); 
    };

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.inputSearch}
                placeholder='Pesquisar...'
                placeholderTextColor={theme.color.gray}
                onChangeText={handleSearchChange}
            />
            
            <Ionicons 
                name='search-outline' size={24} color={theme.color.green} style={styles.icon}
            />
        </View>
    );
}