import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import { DialogBox } from '../../components/DialogBox';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import Ionicons from '@expo/vector-icons/Ionicons';
import Button from '../../components/Button';
import { theme } from '../../global/theme';
import { styles } from './styles';
import * as yup from 'yup';

const validation = yup.object({
    name: yup.string().required('Informe seu nome'),
    email: yup.string().email('Email inválido').required('Informe seu email'),
    password: yup.string().min(8, 'A senha deve conter pelo menos 8 caracteres').required('Digite sua senha'),
    confirmPassword: yup.string().min(8, 'As senhas devem ser iguais').required('Confirme sua senha')
})

export function Cadastre({ navigation }){
    const [showPassword, setShowPassword] = useState(true)
    const [showConfirmPassword, setShowConfirmPassword] = useState(true)
    const [modalVisible, setModalVisible] = useState(true)
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validation)
    })

    function handleCadastre(data){
        console.log(data)
    }

    function closeModal(){
        setModalVisible(!modalVisible)
        navigation.goBack()
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
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <DialogBox
                    title='Cadastro realizado'
                    message='Seu cadastro foi realizado com sucesso. Agora você já pode ter acesso ao nosso app,
                    aproveite!'
                    action={closeModal}
                />
            </Modal>
        </View>
    );
}