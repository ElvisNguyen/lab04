import React from 'react';
import { Text, View, StyleSheet, ScrollView, Button, Alert } from 'react-native';
import { addCabToDB, countCabsInDB } from '../db/FirebaseHelper';
import { useNavigation } from '@react-navigation/native';

const CabDetails = ({ route }) => {
    const { cab } = route.params

    const navigation = useNavigation()

    const handleBookNow = async () => {
      
      try {
          const cabCount = await countCabsInDB()

          if (cabCount >= 2) {
              Alert.alert('Booking Limit Reached', 'Cannot book more than 2 cabs.')
              return
          }

          await addCabToDB(cab)
          Alert.alert('Booking Successful', 'The cab has been booked successfully.')
          navigation.goBack()

      } catch (error) {
          Alert.alert('Booking Failed', 'There was an error booking the cab.')
          console.error(error)
      }
  }

    return (
        <ScrollView>
          <View style={styles.container}>
            
            <Text style={styles.headers}>Company</Text>
              <View style={styles.cabItem}>
                  <Text style={styles.text}>{cab.companyName}</Text>
              </View>
            
            <Text style={styles.headers}>Vehicle Information</Text>
              <Text style={styles.subheader}>Model</Text>
              <View style={styles.cabItem}>
                  <Text style={styles.text}>{cab.carModel}</Text>
              </View>

            <Text style={styles.subheader}>Passengers</Text>
              <View style={styles.cabItem}>
                  <Text style={styles.text}>{cab.passengers}</Text>
              </View>

            <Text style={styles.subheader}>License Plate</Text>
              <View style={styles.cabItem}>
                  <Text style={styles.text}>{cab.licensePlate}</Text>
              </View>

            <Text style={styles.headers}>Driver Information</Text>
              <Text style={styles.subheader}>Driver name</Text>
              <View style={styles.cabItem}>
                  <Text style={styles.text}>{cab.driverName}</Text>
              </View>

            <Text style={styles.subheader}>Rating</Text>
              <View style={styles.cabItem}>
                  <Text style={styles.text}>{cab.rating} / 5</Text>
              </View>

            <Text style={styles.subheader}>Cost per Hour ($CAD)</Text>
              <View style={styles.cabItem}>
                  <Text style={styles.text}>${cab.costPerHour}/hour</Text>
              </View>
            
            <View style={styles.bookNow}>
              <Button  style={styles.button} title="Book now" color='#483D8B' onPress={handleBookNow} />
            </View>
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginTop: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },

    cabItem: {
        backgroundColor: '#ffffff',
        padding: 10,
        marginBottom: 8,
        borderRadius: 8,
        width: '100%',
    },

    text: {
        fontSize: 16,
        marginBottom: 10,
    },

    subheader: {
        fontSize: 16,
        marginBottom: 6,
        fontWeight: 'bold',
        paddingLeft: 4,
    },

    headers: {
        fontSize: 20,
        marginBottom: 12,
        fontWeight: 'bold',
    },

    bookNow: {
      flex: 1,
      paddingVertical: 12,
    }
})

export default CabDetails
