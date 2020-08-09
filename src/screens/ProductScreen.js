import React from 'react';
import {Text, View, Image } from "react-native";

export default function ProductScreen({ route }) {

    const {product_name_fr, image_front_url, categories, quantity, ingredients_text_fr} = route.params.item;

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{product_name_fr}</Text>
            <Text>{quantity}</Text>
            <Image
                source={{uri: image_front_url}}
                style={{ width: 200, height: 200}}
            />
            <Text>Catégorie: {categories}</Text>
            <Text>Ingrédients: {ingredients_text_fr}</Text>
        </View>
    );
}