import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import ButtonAdd from '../../components/ButtonAdd'; 
import Ionicons from '@expo/vector-icons/Ionicons';
import Picture from '../../components/Picture';
import { theme } from '../../global/theme';
import { styles } from './styles';

export function Home(){
    const plantio = [
        {
            id: 1,
            nome: 'Feijão',
            alqueire: '2 alqueires',
            total: '210 kg'
        },
        {
            id: 2,
            nome: 'Feijão',
            alqueire: '2 alqueires',
            total: '210 kg'
        }
    ]

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.welcome}>
                    <Text style={styles.title}>
                        Olá, 
                    </Text>
                    <Text style={styles.subtitle}>
                        Acompanhe seus plantios
                    </Text>
                </View>

                <ButtonAdd />
            </View>

            <View style={styles.category}>
                <Text style={{ fontFamily: theme.font.regular, fontSize: 16 }}>
                    Todos
                </Text>
            </View>

            <FlatList 
                data={plantio}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) =>
                    <View style={styles.card}>
                        <View style={styles.align}>
                            <Picture 
                                dimensions={0.2}
                            />
                        </View>

                        <View>
                            <Text style={styles.titleCard}>
                                { item.nome }
                            </Text>
                            <Text style={styles.txtCard}>
                                { item.alqueire } plantado(s)
                            </Text>
                            <Text style={styles.txtCard}>
                                { item.total } produzidos, aprox.
                            </Text>
                        </View>

                        <TouchableOpacity 
                            style={styles.align}
                            activeOpacity={0.8}
                        >
                            <Ionicons 
                                name='chevron-forward-outline' size={28} color={theme.color.green} 
                            />
                        </TouchableOpacity>
                    </View>
                }
            />
        </View>
    );
}