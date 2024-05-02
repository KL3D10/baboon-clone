import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VectorIcon from '../utils/VectorIcon'

const CardWithRating = (props) => {
  return (
    <ImageBackground
                source={{ uri: props.item.imageUri }}
                resizeMode="cover"
                style={styles.image}
                imageStyle={{ borderRadius: 6}}
            >
                {props.item.sale && <View style={styles.saleContainer}>
                    <VectorIcon type="Fontisto" name="shopping-sale"color="white" size={18} />
                    <Text style={styles.saleText}>{props.item.sale} L</Text>
                </View>}
                <View style={styles.infoCardContainer}>
                    <Text numberOfLines={2} style={{width: '50%'}}>{props.item.title}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <VectorIcon type="AntDesign" name="star" color="#fb2c48" />
                        <Text style={{color: '#727272', marginLeft: 2}}>{props.item.rating}</Text>
                        <Text style={{color: '#727272', marginLeft: 2, fontSize: 12}}>({props.item.new}+)</Text>
                    </View>
                </View>
            </ImageBackground>
  )
}

export default CardWithRating

const styles = StyleSheet.create({
    image: {
        justifyContent: 'center',
        width: 160,
        height: 140,
        position: 'relative',
        marginBottom: 20
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
    },
    infoCardContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingHorizontal: 5,
        borderRadius: 5,
        position: 'absolute',
        alignItems: 'center',
        height: 40,
        justifyContent: 'space-between',
        width: '100%',
        bottom: -5
    }
})