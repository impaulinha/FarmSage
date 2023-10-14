import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import { Search } from '../../components/Search';
import { styles } from './styles';
import { theme } from '../../global/theme';

export function Seeds(){
    const [searchItem, setSearchItem] = useState('');

    const data = [
        {
            id: 1,
            name: 'Todas',
            icon: 'search-outline'
        },
        {
            id: 2,
            name: 'Verduras',
            icon: 'eye-outline'
        }
    ]

    function filterData() {
        return data.filter(item => item.name.includes(searchItem));
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Search 
                    onSearchChange={setSearchItem}
                />
            </View>

            <FlatList 
                data={filterData()}
                keyExtractor={ item => item.id.toString() }
                numColumns={2}
                renderItem={( { item } ) =>
                    <TouchableOpacity 
                        style={styles.card}
                        activeOpacity={0.7}
                    >
                        <Icon
                            name='reorder' size={88} color={theme.color.gray} 
                        />
                        <Text style={styles.txtCard}>
                            { item.name }
                        </Text>
                    </TouchableOpacity>
                }
            />
        </View>
    );
}