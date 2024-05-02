import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import VectorIcon from '../utils/VectorIcon'
import FirstRowCard from '../components/FirstRowCard'
import { FirstRowData, SecondRowData, SalesLastDayData } from '../assets/data/data'
import SecondRowCard from '../components/SecondRowCard'
import BonusCard from '../components/BonusCard'
import HeaderRow from '../components/HeaderRow'
import CardWithRating from '../components/CardWithRating'

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <Header />
        <ScrollView style={styles.container}>
            <View style={styles.searchContainer}>
                <VectorIcon type="Ionicons" name="search" color="#727272" size={20}/>
                <TextInput placeholder='Kerko restorante, pjata...' style={{marginLeft: 5}} />
            </View>
            <View style={styles.firstRowContainer}>
              <FlatList
                data={FirstRowData}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 10 }}
                renderItem={({item}) => (
                  <FirstRowCard item={item} />
                )}
              />
            </View>
            <View style={styles.secondRowContainer}>
              <FlatList 
                data={SecondRowData}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 10 }}
                renderItem={({item}) => (
                  <SecondRowCard item={item} />
                )}
              />
            </View>
            <View style={{marginTop: 15}}>
              <BonusCard/>
            </View>
            <View style={{marginTop: 15}}>
              <HeaderRow />
              <FlatList 
                style={{marginTop: 10}}
                data={SalesLastDayData}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 10 }}
                renderItem={({item}) => (
                  <CardWithRating item={item} />
                )}
              />
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    height: '100%'
  },
  searchContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 5,
    flexDirection: 'row'
  },
  firstRowContainer: {
    marginTop: 15
  },
  secondRowContainer: {
    marginTop: 20
  }
})