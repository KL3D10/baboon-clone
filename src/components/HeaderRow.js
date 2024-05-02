import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VectorIcon from '../utils/VectorIcon'

const HeaderRow = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Dita e fundit -50% Ulje 💥</Text>
      <VectorIcon type="Entypo" name="chevron-right" size={22} color={'grey'} />
    </View>
  )
}

export default HeaderRow

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 19,
        fontWeight: "bold"
    }
})