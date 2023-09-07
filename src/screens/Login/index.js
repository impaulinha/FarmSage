import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Button from '../../components/Button';
import { theme } from '../../global/theme';
import { styles } from './styles';

export function Login({ layout }){
    const [showPassword, setShowPassword] = useState(true)

    useEffect(() => {
        if(layout){
            layout()
        }
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.viewImg}>
                <Image 
                    source={require('../../assets/logo-transparent.png')}
                    style={styles.img}
                />
            </View>

            <View style={styles.viewLogin}>
                <Text style={styles.title}>
                    Bem vindo(a)
                </Text>

                <TextInput 
                    style={styles.input}
                    placeholder='Email...'
                    keyboardType='email-address'
                    maxLength={320}
                />

                <View style={styles.viewInput}>
                    <TextInput 
                        style={{...styles.input, width: '100%'}}
                        placeholder='Senha...'
                        autoCorrect={false}
                        autoCapitalize='none'
                        secureTextEntry={showPassword}
                    />
                    <TouchableOpacity 
                        style={styles.icon}
                        activeOpacity={0.8}
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        {
                            showPassword ?
                                <Ionicons 
                                    name='eye-off-outline' size={26} color={theme.color.green} 
                                />
                            :
                                <Ionicons 
                                    name='eye-outline' size={26} color={theme.color.green} 
                                />
                        }
                    </TouchableOpacity>
                </View>

                <Button 
                    text='Login'
                />

                <Text style={styles.text}>
                    Não possui uma conta? <Text style={{ color: theme.color.green }}>Cadastre-se</Text>
                </Text>
            </View>
        </View>
    );
}