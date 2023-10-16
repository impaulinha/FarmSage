import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { collection, query, getDocs, where } from "firebase/firestore";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Search } from '../../components/Search';
import Picture from '../../components/Picture';
import { Load } from '../../components/Load';
import { theme } from '../../global/theme';
import { db } from '../../config';
import { styles } from './styles';

export function SelectedCategory({ route, navigation }){
    const [searchItem, setSearchItem] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [seeds, setSeeds] = useState([])
    const category = route.params.category

    useEffect(() => {
        setIsLoading(true)

        async function getSeedsByCategory() {
            try{
                const seedQuery = query(collection(db, "seed"), where("categoria", "==", category));
                const response = await getDocs(seedQuery)

                const seedData = [];

                response.forEach((doc) => {
                    seedData.push({ id: doc.id, ...doc.data() })
                })

                setSeeds([])

                setSeeds(seedData)
                setIsLoading(false)
            }
            catch(error){
                setIsLoading(false)
                console.log('Falha: ', error)
            }
        }
         
        getSeedsByCategory()
    }, [])

    function filterData() {
        return seeds.filter(item => item.name.includes(searchItem));
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Search 
                    onSearchChange={setSearchItem}
                />
            </View>
            
            <Text style={styles.title}>
                { category }
            </Text>

            {
                isLoading ? (
                    <Load color={theme.color.cyanGreen} />
                ) : (
                    <FlatList 
                        data={filterData()}
                        keyExtractor={ item => item.id.toString() }
                        ListEmptyComponent={
                            <View style={styles.empty}>
                                <Text style={styles.txtEmpty}>
                                    Desculpe, ainda não temos sementes cadastradas nesta categoria
                                </Text>
                            </View>
                        }
                        renderItem={( { item } ) =>
                            <View style={styles.card}>
                                <Picture 
                                    dimensions={0.13}
                                />

                                <Text style={styles.text}>
                                    { item.name }
                                </Text>

                                <TouchableOpacity 
                                    activeOpacity={0.8}
                                    onPress={() => navigation.navigate('SelectedSeed', { 
                                        seedName: item.name
                                     })}
                                >
                                    <Ionicons
                                        name='chevron-forward-outline' size={24} color={theme.color.green} 
                                    />
                                </TouchableOpacity>
                            </View>
                        }
                    />
                )
            }
    
        </View>
    );
}