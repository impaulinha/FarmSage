import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { DialogBox } from '../../components/DialogBox';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Ionicons from '@expo/vector-icons/Ionicons';
import Button from '../../components/Button';
import { Load } from '../../components/Load';
import { theme } from '../../global/theme';
import Firebase from '../../config';
import { styles } from './styles';
import * as yup from 'yup';

const validation = yup.object({
    email: yup.string().email('Email inválido').required('Informe seu email'),
    password: yup.string().min(8, 'A senha deve conter pelo menos 8 caracteres').required('Digite sua senha')
})

export function Login({ setUserLoggedIn }){
    const [showPassword, setShowPassword] = useState(true)
    const [modalVisible, setModalVisible] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const navigation = useNavigation();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validation)
    })

    function handleLogin(data){
        console.log(data)
        login(data)
    }

    async function login(data){
        setIsLoading(true)

        try {
            const auth = getAuth(Firebase);
            await signInWithEmailAndPassword(auth, data.email, data.password);
            
            setUserLoggedIn(true);
            await AsyncStorage.setItem('userLoggedIn', 'true');

            setIsLoading(false)
            console.log('Login efetuado')
        } 
        catch (error) {
            setIsLoading(false)
            setModalVisible(!modalVisible)

            console.log('Erro no login: ', error)
        }
    }

    function closeModal(){
        setModalVisible(!modalVisible)
    }

    function goCadastre(){
        navigation.navigate('Cadastre')
    }

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

                <Controller 
                    name='email'
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextInput 
                            style={styles.input}
                            placeholder='Email...'
                            keyboardType='email-address'
                            autoCapitalize='none'
                            maxLength={320}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                />
                { errors.email && <Text style={styles.errormsg}>{ errors.email?.message }</Text> }

                <Controller 
                    name='password'
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <View style={styles.viewInput}>
                            <TextInput 
                                style={{...styles.input, width: '100%'}}
                                placeholder='Senha...'
                                autoCorrect={false}
                                autoCapitalize='none'
                                secureTextEntry={showPassword}
                                onChangeText={onChange}
                                value={value}
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
                    )}
                />
                <View style={{ marginBottom: 70 }}>
                    { errors.password && <Text style={styles.errormsg}>{ errors.password?.message }</Text> }
                </View>

                {
                    isLoading ? (
                        <Load color={theme.color.cyanGreen} />
                    ) : (        
                        <Button text='Login' action={handleSubmit(handleLogin)} />
                    )
                }

                <Text style={styles.text}>
                    Não possui uma conta? 
                    <Text style={{ color: theme.color.green }} onPress={goCadastre}>
                        Cadastre-se
                    </Text>
                </Text>
            </View>

            <Modal
                transparent
                animationType='slide'
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <DialogBox 
                    title='Ocorreu um erro'
                    message='Lamentamos, mas não foi possível realizar o login. Tente novamente.'
                    action={closeModal}
                />
            </Modal>
        </View>
    );
}