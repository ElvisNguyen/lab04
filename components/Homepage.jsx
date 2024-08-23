import React from 'react';
import { FlatList, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import CabItem from './CabItem';
import { useNavigation } from '@react-navigation/native';

function HomePage({ route }) {
  const { cabs } = route.params
  const navigation = useNavigation()

  const handleCabPress = (cab) => {
    navigation.navigate('CabDetails', { cab })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headers}>Book a taxi</Text>
      <FlatList
        data={cabs}
        
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCabPress(item)}>
            <CabItem cab={item} />
          </TouchableOpacity>
        )}

        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 10,
    marginTop: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },

  headers: {
    fontSize: 26,
    marginBottom: 10,
    fontWeight: 'bold',
}
})

export default HomePage
