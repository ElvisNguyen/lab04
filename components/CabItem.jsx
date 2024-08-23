import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CabItem = ({ cab }) => {
  
  return (

    <View style={styles.cabItem}>
      <View>      
        <Text style={styles.companyName}>{cab.companyName}</Text>
        <Text style={styles.text}>{cab.carModel}</Text>
        <Text style={styles.text}>Driver: {cab.driverName}</Text>
        <Text style={styles.text}>License Plate: {cab.licensePlate}</Text>
      </View>

      <View>
        <Image 
        source={{uri: 'https://cdn.motor1.com/images/mgl/mMEQ8j/114:0:1820:1366/2024-honda-civic-rs-jdm.webp'}}
        style = {styles.image} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  cabItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    width: '100%',
  },

  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  text: {
    fontSize: 14,
    marginBottom: 2,
},

  image: {
    width: 150,
    height: 100,
    resizeMode: 'contain'
  }
})

export default CabItem
