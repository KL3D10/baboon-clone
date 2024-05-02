import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VectorIcon from '../utils/VectorIcon'

const FirstRowCard = (props) => {
    return (
            <ImageBackground
                source={{ uri: props.item.imageUri }}
                resizeMode="cover"
                style={styles.image}
                imageStyle={{ borderRadius: 6}}
            >
                {props.item.sale && <View style={styles.saleContainer}>
                    <VectorIcon type="Fontisto" name="shopping-sale" color="white" size={18} />
                    <Text style={styles.saleText}>{props.item.sale} L</Text>
                </View>}
            </ImageBackground>
    )
}

export default FirstRowCard

const styles = StyleSheet.create({
    image: {
        justifyContent: 'center',
        width: 150,
        height: 150,
    },
    saleContainer: {
        flexDirection: 'row',
        backgroundColor: '#fb2c48',
        width: 'auto',
        borderRadius: 5,
        position: 'absolute',
        top: 12,
        left: 10,
        paddingVertical: 3,
        paddingHorizontal: 5,
        alignItems: 'center'
    },
    saleText: {
        color: 'white',
        fontWeight: '700',
        marginLeft: 4,
        fontSize: 12
    }
})