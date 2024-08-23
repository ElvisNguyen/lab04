import React, { useState, useCallback } from 'react';
import { FlatList, StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import CabItem from './CabItem';
import { getCabsFromDB, deleteCabFromDB } from '../db/FirebaseHelper';

const MyCabPage = () => {
    const [cabs, setCabs] = useState([])

    const fetchCabs = useCallback(async () => {
        try {
            const fetchedCabs = await getCabsFromDB()
            setCabs(fetchedCabs)

        } catch (error) {
            console.error('Error fetching cabs:', error)

        }
    }, [])


    useFocusEffect(
        useCallback(() => {
            fetchCabs()
        }, [fetchCabs])
    )

    const handleCabPress = (cab) => {
        Alert.alert(
            'Cancel booking',
            'Are you sure you want to cancel this booking?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Cancel Booking',
                    onPress: async () => {
                        try {
                            await deleteCabFromDB(cab.id)
                            setCabs(cabs.filter(item => item.id !== cab.id))
                            Alert.alert('Booking cancelled successfully', 'Your booking has been cancelled.')

                        } catch (error) {
                            Alert.alert('Error', 'There was an error while cancelling your booking.')
                            console.error(error)

                        }
                    },
                },
            ],
            { cancelable: true }
        )
    }

    return (
        <View style={styles.container}>
            
            <Text style={styles.headers}>My Booked Cabs</Text>

            <FlatList
                data={cabs}

                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleCabPress(item)}>
                        <CabItem cab={item} />
                    </TouchableOpacity>
                )}

                keyExtractor={(item) => item.id.toString()}
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
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
    },

    headers: {
        fontSize: 26,
        marginBottom: 10,
        fontWeight: 'bold',
    }
})

export default MyCabPage
