import React from 'react';
import { View, Text } from 'react-native';
import { Card } from '../../components/Card';
import { styles } from './styles';

export function Calculations({ navigation }){
    return (
        <View style={styles.container}>
            <View style={styles.header} />

            <Text style={styles.text}>
                Selecione a opção desejada:
            </Text>

            <View style={styles.viewCards}>
                <Card 
                    name='Busca inteligente'
                    icon='search'
                    action={() => navigation.navigate('SmartSearch')}
                />
                <Card 
                    name='Transformar medidas'
                    icon='score'
                />
            </View>

            <View style={styles.viewCards}>
                <Card 
                    name='Calcular adubo'
                    icon='calculate'
                />
                <Card 
                    name='Calcular produção'
                    icon='eco'
                />
            </View>
        </View>
    );
}