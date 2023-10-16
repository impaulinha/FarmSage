import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { CameraButton } from '../../components/CameraButton';
import * as ImageManipulator from 'expo-image-manipulator';
import * as ImagePicker from 'expo-image-picker';
import { Load } from '../../components/Load';
import { api } from '../../services/api';
import { styles } from './styles';

export function SmartSearch(){
    const [selectedImageUri, setSelectedImageUri] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const apiUrl = process.env.EXPO_PUBLIC_API_USER_PATH;

    const pat = process.env.EXPO_PUBLIC_API_USER_PATH

    async function plantDetect(imageUri){
        
        const PAT = '45fd2b1d6f044aabba80a03c73e34954';
        const USER_ID = 'impaulinha';       
        const APP_ID = 'farmsage';
        const MODEL_ID = 'general-image-recognition';
        const MODEL_VERSION_ID = 'aa7f35c01e0642fda5cf400f543e7c40';    
        const IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg';

        const raw = JSON.stringify({
            "user_app_id": {
                "user_id": USER_ID,
                "app_id": APP_ID
            },
            "inputs": [
                {
                    "data": {
                        "image": {
                            "url": IMAGE_URL
                        }
                    }
                }
            ]
        });

        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Key ' + PAT
            },
            body: raw
        };


        fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
            .then(response => response.text())
            .then(result => console.log('result ', result, ' === ', pat))
            .catch(error => console.log('error', error));

    }

    const handleSelectImage = async () => {
        try{
            setIsLoading(true)

            const response = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 4],
                quality: 1,
            })

            console.log('Response: ', response)

            if(response.canceled){
                setIsLoading(false)
                return
            }

            if(!response.canceled){
                const imgManipuled = await ImageManipulator.manipulateAsync(
                    response.assets[0].uri,
                    [{ resize: { width: 900 } }],
                    {
                        compress: 1,
                        format: ImageManipulator.SaveFormat.JPEG,
                        base64: true
                    }
                )

                setIsLoading(false)
                setSelectedImageUri(response.uri)
                plantDetect(imgManipuled.uri)
            }
        }
        catch(error){
            console.log('ImagePicker: ', error)
        }
    }

    return (
        <View style={styles.container}>
            <CameraButton 
                action={handleSelectImage}
                disable={isLoading}
            />

            {
                selectedImageUri ? 
                    <Image
                        source={{ uri: selectedImageUri }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                :
                    <Text style={styles.description}>
                        Selecione a foto da planta para analizar
                    </Text>
            }

            <View style={styles.view}>
                <Text style={styles.title}>
                
                </Text>

                <ScrollView 
                    showsVerticalScrollIndicator={false} 
                    contentContainerStyle={{ paddingVertical: 24 }}
                >
                    {
                        isLoading ?
                        <Load color='#FF22AB' />
                        :
                        <Text style={styles.info}>
                            {apiUrl}
                        </Text>
                    }
                </ScrollView>
            </View>
        </View>
    );
}