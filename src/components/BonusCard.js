import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VectorIcon from '../utils/VectorIcon'

const BonusCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.infoContainer}>
          <Image 
          source={{uri: 'https://images.weserv.nl/?url=lh3.googleusercontent.com/w-JB-QYtLgDjOWz2HaLSfp9k2Ul7DEKKvPWtnoYhWDxzHOWSbX_5iNsVHZuylUxbFB239K6pI1a4hgIeiUZ63FDpoo1Gp8qTLaw'}} 
          style={{width: 48, height: 48, borderRadius: 5}}
          resizeMode='cover'
          />
          <View style={{marginLeft: 7}}>
            <Text style={{fontWeight: '500', fontSize: 17}}>Bonus Per porosine e pare</Text>
            <Text style={{fontWeight: '500', fontSize: 13, marginTop: 6}}>+31,850 L <Text>ulje nga 99 biznese</Text></Text>
          </View>
        </View>
        <View>
          <VectorIcon type="AntDesign" name="infocirlceo" size={23} />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>Shko tek Big Bonus-i</Text>
      </View>
    </View>
  )
}

export default BonusCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 5,
    borderWidth: 0.2,
    borderColor: '#b5b5b5',
  },
  topContainer: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between'
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  bottomContainer: {
    paddingVertical: 15,
    backgroundColor: '#fb2c48',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
})