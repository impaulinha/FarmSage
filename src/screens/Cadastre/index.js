import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import { DialogBox } from '../../components/DialogBox';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import Ionicons from '@expo/vector-icons/Ionicons';
import Button from '../../components/Button';
import { theme } from '../../global/theme';
import Firebase from '../../config';
import { styles } from './styles';
import * as yup from 'yup';

import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const validation = yup.object({
    name: yup.string().required('Informe seu nome'),
    email: yup.string().email('Email inválido').required('Informe seu email'),
    password: yup.string().min(8, 'A senha deve conter pelo menos 8 caracteres').required('Digite sua senha'),
    confirmPassword: yup.string().min(8, 'As senhas devem ser iguais').required('Confirme sua senha')
})

export function Cadastre({ navigation }){
    const [showPassword, setShowPassword] = useState(true)
    const [showConfirmPassword, setShowConfirmPassword] = useState(true)
    const [modalCadastre, setModalCadastre] = useState(false)
    const [modalPassword, setModalPassword] = useState(false)

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validation)
    })

    function handleCadastre(data){
        console.log(data)

        if(data.password !== data.confirmPassword){
            setModalPassword(!modalPassword)
            console.log('Senhas diferentes')
            return
        }
        
        newUser(data)
    }

    async function newUser(data){
        try {
            const auth = getAuth(Firebase);
            const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      
            const user = userCredential.user;
      
            await updateProfile(user, {
              name: data.name,
            });

            setModalCadastre(!modalCadastre)
            console.log('Cadastro realizado')
        } 
        catch (error) {
            console.log('Erro no cadastro: ', error)
        }
    }

    function goBack(){
        navigation.goBack()
    }

    function closeModal(){
        setModalPassword(!modalPassword)
    }

    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.title}>
                    Cadastre-se
                </Text>

                <Text style={styles.subtitle}>
                    para ter acesso ao aplicativo
                </Text>

                <Controller 
                    name='name'
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextInput 
                            style={styles.input}
                            placeholder='Nome...'
                            autoCapitalize='none'
                            value={value}
                            onChangeText={onChange}
                            maxLength={300}
                        />
                    )}
                />
                { errors.name && <Text style={styles.errormsg}>{ errors.name?.message }</Text> }

                <Controller 
                    name='email'
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextInput 
                            style={styles.input}
                            placeholder='Email...'
                            keyboardType='email-address'
                            autoCapitalize='none'
                            onChangeText={onChange}
                            value={value}
                            maxLength={320}
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
                                style={styles.input}
                                placeholder='Senha...'
                                autoCapitalize='none'
                                autoCorrect={false}
                                secureTextEntry={showPassword}
                                onChangeText={onChange}
                                value={value}
                            />
                            <TouchableOpacity 
                                style={{ left: -45 }}
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
                { errors.password && <Text style={styles.errormsg}>{ errors.password?.message }</Text> }

                <Controller 
                    name='confirmPassword'
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <View style={styles.viewInput}>
                            <TextInput 
                                style={styles.input}
                                placeholder='Confirmar senha...'
                                autoCapitalize='none'
                                autoCorrect={false}
                                secureTextEntry={showConfirmPassword}
                                onChangeText={onChange}
                                value={value}
                            />
                            <TouchableOpacity 
                                style={{ left: -45 }}
                                activeOpacity={0.8}
                                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {
                                    showConfirmPassword ?
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
                <View style={{ marginBottom: 50 }}>
                    { errors.password && <Text style={styles.errormsg}>{ errors.password?.message }</Text> }
                </View>
                <Button 
                    text='Cadastrar'   
                    action={handleSubmit(handleCadastre)}             
                />
            </View>

            <Modal
                transparent
                animationType='slide'
                visible={modalCadastre}
                onRequestClose={() => setModalCadastre(!modalCadastre)}
            >
                <DialogBox
                    title='Cadastro realizado'
                    message='Seu cadastro foi realizado com sucesso. Agora você já pode ter acesso ao nosso app,
                    aproveite!'
                    action={goBack}
                />
            </Modal>

            <Modal
                transparent
                animationType='slide'
                visible={modalPassword}
                onRequestClose={() => setModalPassword(!modalPassword)}
            >
                <DialogBox
                    title='Verifique as senhas'
                    message='As senhas digitadas não conferem'
                    action={closeModal}
                />
            </Modal>
        </View>
    );
}