import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth, updateProfile } from 'firebase/auth';
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from '../../global/theme';
import { styles } from './styles';

export function Account({ setUserLoggedIn }){
    const [userName, setUserName] = useState('')

    useEffect(() => {
        const auth = getAuth()
        const user = auth.currentUser

        if (user !== null) {
            const displayName = user.displayName;
            const uid = user.uid;
            
            setUserName(displayName)
        }
    }, []);

    const handleLogout = async () => {
        await AsyncStorage.removeItem('userLoggedIn');
        setUserLoggedIn(false);
    }

    function firstLetter(name) {
        if (name && name.length > 0) {
          return name.charAt(0).toUpperCase();
        } else {
          return '';
        }
    }      

    async function editUser(){
        const auth = getAuth()
        const user = auth.currentUser

        await updateProfile(user, {
            displayName: userName
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.header} />

            <View style={styles.picture}>
                <Text style={styles.txtPicture}>
                    { firstLetter(userName) }
                </Text>
            </View>

            <View style={{ width: '100%', padding: 40, top: -60 }}>
                <View style={styles.input}>
                    <TextInput
                        value={userName}
                        style={styles.name}
                        onChangeText={text => setUserName(text)}
                        onEndEditing={editUser}
                    />
                    <Ionicons 
                        name='create-outline' size={30} color={theme.color.black} style={{ left: -45 }}
                    />
                </View>

                <View style={styles.plantation}>
                    <Text style={{ width: '30%', textAlign: 'center', fontFamily: theme.font.bold, fontSize: 30}}>
                        2
                    </Text>
                    <Text style={{ ...styles.text, width: '70%', fontFamily: theme.font.regular }}>
                        Plantio(s)
                        { '\n' }
                        cadastrado(s)
                    </Text>
                </View>

                <TouchableOpacity style={styles.logout} onPress={handleLogout}>
                    <Ionicons 
                        name='log-out-outline' size={30} color={theme.color.red} 
                    />
                    <Text style={styles.txtBtn}>
                        Sair
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}