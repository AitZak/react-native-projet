import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function ListItem ({item})
{
    const navigation = useNavigation();

    const goTo = (item) =>{
        navigation.navigate('Product',
            {
                item: item
            })
    }

    return (
        <View style={styles.line}>
            <TouchableOpacity
                onPress={() => goTo(item)}
            >
                <Text>{item.product_name_fr}</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    line:{
        padding: 10,
        height: 40,
    }

})