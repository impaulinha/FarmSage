import React from 'react';
import { View, Dimensions } from 'react-native';
import { styles } from './styles';

const Picture = ({dimensions}) => (
    <View 
        style={{
            ...styles.container, 
            height: Dimensions.get('window').width * dimensions,
            width: Dimensions.get('window').width * dimensions,
            borderRadius: 20
        }}
    >
            
    </View>
)

export default React.memo(Picture);