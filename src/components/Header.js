import { StyleSheet, Text, View } from 'react-native'
import VectorIcon from '../utils/VectorIcon'

const Header = () => {
  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <View style={styles.headerLeft}>
                <Text style={styles.headerPrimaryText}>Rruga Pjeter Budi</Text>
                <View style={styles.changeAddressContainer}>
                    <Text style={styles.headerSecondaryText}>Ndrysho adresen</Text>
                    <VectorIcon type="FontAwesome" name="caret-down" color="#727272" size={14} style={{marginLeft: 4}} />
                </View>
            </View>
            <View style={[styles.headerTicketCircle, styles.shadowProp]}>
                <VectorIcon type="MaterialCommunityIcons" name="ticket-percent-outline" size={27} />
            </View>
        </View>
  </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerLeft: {
        justifyContent: 'flex-start'
    },
    headerPrimaryText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fb2c48'
    },
    changeAddressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2
    },
    headerSecondaryText: {
        fontWeight: '600',
        color: '#727272'
    },
    headerTicketCircle: {
        height: 38,
        width: 38,
        borderRadius: 50,        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
})