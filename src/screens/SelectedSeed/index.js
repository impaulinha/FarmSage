import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { collection, query, getDocs, where, getDoc } from "firebase/firestore";
import { theme } from '../../global/theme';
import { styles } from './styles';
import { db } from '../../config';

export function SelectedSeed({ route }){
    const [seed, setSeed] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const seedName = route.params.seedName

    useEffect(() => {
        setIsLoading(true)

        async function getSeed() {
            try{
                const seedQuery = query(collection(db, "seed"), where("name", "==", seedName))
                const response = await getDocs(seedQuery)

                const data = []

                response.forEach((doc) => {
                    data.push({ id: doc.id, ...doc.data() })
                })

                setSeed(data)
                console.log('Data => ', seed)
            }
            catch(error){
                setIsLoading(false)
                console.log('Falha: ', error)
            }
        }
         
        getSeed()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.viewImg}>

            </View>

            <View style={styles.viewInfo}>
                <ScrollView>
                    <Text style={styles.title}>
                        { seed[0].name }
                    </Text>

                    <Text style={styles.description}>
                        { seed[0].description }
                    </Text>

                    <Text style={styles.subtitle}>
                        Informações
                    </Text>

                    <View style={styles.card}>
                        <Text style={{...styles.txtCard, fontFamily: theme.font.regular}}>
                            Germinação
                        </Text>
                        <Text style={[styles.txtCard, styles.txtResult]}>
                            { `${seed[0].germination} dias` }
                        </Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={{...styles.txtCard, fontFamily: theme.font.regular}}>
                            Floreio
                        </Text>
                        <Text style={[styles.txtCard, styles.txtResult]}>
                            { `${seed[0].flourish} dias` }
                        </Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={{...styles.txtCard, fontFamily: theme.font.regular}}>
                            Colheita
                        </Text>
                        <Text style={[styles.txtCard, styles.txtResult]}>
                            { `${seed[0].harvest} dias` }
                        </Text>
                    </View>

                    <View style={{...styles.card, marginBottom: 20}}>
                        <Text style={{...styles.txtCard, fontFamily: theme.font.regular}}>
                            Época (plantio)
                        </Text>
                        <Text style={[styles.txtCard, styles.txtResult]}>
                            { seed[0].era }
                        </Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}