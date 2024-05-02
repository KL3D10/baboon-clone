import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SecondRowCard = (props) => {
  return (
    <View style={[styles.container, styles.shadowProp]}>
      <Image source={{ uri: props.item.imageUri }} style={styles.imageStyle} resizeMode='cover' />
      <View style={styles.bottomContainer}>
        <Text numberOfLines={1} style={styles.headingText}>{props.item.title}</Text>
        <Text style={styles.subHeadingText}>{props.item.count} biznese</Text>
      </View>
    </View>
  )
}

export default SecondRowCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: 90,
    height: 140,
    borderRadius: 5
  },
  imageStyle: {
    width: 90,
    height: 80,
    borderRadius: 5
  },
  bottomContainer: {
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginTop: 8
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 14 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  headingText: {
    fontSize: 14,
    fontWeight: '500'
  },
  subHeadingText: {
    marginTop: 8,
    fontSize: 12
  }
})