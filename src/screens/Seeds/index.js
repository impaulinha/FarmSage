import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import { collection, query, getDocs } from "firebase/firestore";
import Icon from '@expo/vector-icons/MaterialIcons';
import { Search } from '../../components/Search';
import { Load } from '../../components/Load';
import { theme } from '../../global/theme';
import { styles } from './styles';
import { db } from '../../config';

export function Seeds({ navigation }){
    const [searchItem, setSearchItem] = useState('')
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function searchData(){
            setIsLoading(true)

            try{
                const response = query(collection(db, "category"))
                const querySnapshot = await getDocs(response)

                const categoryData = [];

                querySnapshot.forEach((doc) => {
                    categoryData.push({ id: doc.id, ...doc.data() })
                });

                setIsLoading(false)
                setCategories(categoryData)

                console.log('Categorias: ', categoryData)
            }
            catch(error){
                setIsLoading(false)
                console.log('Falha: ', error)
            }
        }
        
        searchData()
    }, [])

    function filterData() {
        return categories.filter(item => item.name.includes(searchItem));
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Search 
                    onSearchChange={setSearchItem}
                />
            </View>

            {
                isLoading ? (
                    <Load  color={theme.color.cyanGreen} />
                ) : (
                    <FlatList 
                        data={filterData()}
                        keyExtractor={ item => item.id.toString() }
                        numColumns={2}
                        renderItem={( { item } ) =>
                            <TouchableOpacity 
                                style={styles.card}
                                activeOpacity={0.7}
                                onPress={() => navigation.navigate('SelectedCategory', {
                                    category: item.name, id: item.id
                                })}
                            >
                                <Icon
                                    name={item.icon} size={88} color={theme.color.gray} 
                                />
                                <Text style={styles.txtCard}>
                                    { item.name }
                                </Text>
                            </TouchableOpacity>
                        }
                    />
                )
            }

        </View>
    );
}