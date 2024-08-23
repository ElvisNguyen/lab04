import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import HomePage from './components/Homepage';
import MyCabPage from './components/MyCabPage';
import CabDetails from './components/CabDetails';

export default function App() {
  const Tab = createBottomTabNavigator()
  const Stack = createStackNavigator()

  const [cabs] = useState(cabList)

  const HomeStack = () => {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} options={headerStyle} initialParams={{ cabs }} />
        <Stack.Screen name="CabDetails" component={CabDetails} options={detailsHeaderStyle} />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline'
            } else if (route.name === 'My Cab') {
              iconName = focused ? 'car' : 'car-outline'
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: '#ffc005',
          tabBarInactiveTintColor: '#ffffff',
          tabBarInactiveBackgroundColor: '#181818',
          tabBarActiveBackgroundColor: '#181818',
          tabBarLabelStyle: {
            paddingTop: 0,
            fontSize: 16,
            fontWeight: 'bold',
            color: '#ffffff',
          }
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} initialParams={{ cabs }} />
        <Tab.Screen name="My Cab" component={MyCabPage} options={headerStyle} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const headerStyle = {
  headerStyle: {
    backgroundColor: '#181818',
  },

  headerTitleStyle: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 28,
    marginLeft: 5,
  },
}

const detailsHeaderStyle = {
  headerStyle: {
    backgroundColor: '#181818',
  },

  headerTitleStyle: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 28,
    marginLeft: 5,
  },

  headerBackImage: () => (<Ionicons name="arrow-back" size={24} color= "#FFFFFF"/>),
  title: 'Cab Details',
}

const cabList = [
  { companyName: 'Uber', carModel: 'Toyota Corolla', passengers: 4, rating: 4.6, costPerHour: 22, driverName: 'John Smith', licensePlate: 'UBR123' },
  { companyName: 'Beck Taxi', carModel: 'Honda Civic', passengers: 4, rating: 4.5, costPerHour: 20, driverName: 'Jane Doe', licensePlate: 'BCK456' },
  { companyName: 'Royal Taxi', carModel: 'Hyundai Elantra', passengers: 4, rating: 4.4, costPerHour: 18, driverName: 'Raj Patel', licensePlate: 'RYL789' },
  { companyName: 'Yellow Cabs', carModel: 'Ford Focus', passengers: 4, rating: 4.7, costPerHour: 24, driverName: 'Emma Wilson', licensePlate: 'YLW234' },
  { companyName: 'Toronto Taxi', carModel: 'Chevrolet Malibu', passengers: 4, rating: 4.6, costPerHour: 23, driverName: 'Mohan Singh', licensePlate: 'TRT567' },
  { companyName: 'City Taxi', carModel: 'Volkswagen Jetta', passengers: 4, rating: 4.8, costPerHour: 26, driverName: 'Sophia Lee', licensePlate: 'CTY890' },
  { companyName: 'Airport Taxi', carModel: 'Nissan Sentra', passengers: 4, rating: 4.5, costPerHour: 21, driverName: 'James Brown', licensePlate: 'APT123' },
  { companyName: 'Crown Taxi', carModel: 'Mazda 3', passengers: 4, rating: 4.6, costPerHour: 22, driverName: 'Olivia Johnson', licensePlate: 'CRN456' },
  { companyName: 'Star Taxi', carModel: 'Kia Soul', passengers: 4, rating: 4.4, costPerHour: 19, driverName: 'Daniel Davis', licensePlate: 'STR789' },
  { companyName: 'Yellow Cab', carModel: 'Toyota Camry', passengers: 4, rating: 4.7, costPerHour: 25, driverName: 'Lily White', licensePlate: 'YEL234' },
  { companyName: 'Comfort Taxi', carModel: 'Honda Accord', passengers: 4, rating: 4.5, costPerHour: 23, driverName: 'Lucas Martin', licensePlate: 'CFT567' },
  { companyName: 'GTA Taxi', carModel: 'Subaru Legacy', passengers: 4, rating: 4.6, costPerHour: 24, driverName: 'Ava Clark', licensePlate: 'GTA890' },
  { companyName: 'Green Taxi', carModel: 'Hyundai Sonata', passengers: 4, rating: 4.4, costPerHour: 20, driverName: 'Ethan Turner', licensePlate: 'GRN123' },
  { companyName: 'Metro Taxi', carModel: 'Ford Fusion', passengers: 4, rating: 4.7, costPerHour: 27, driverName: 'Mia Lewis', licensePlate: 'MET456' },
  { companyName: 'Toronto Airport Taxi', carModel: 'Chevrolet Cruze', passengers: 4, rating: 4.5, costPerHour: 22, driverName: 'Noah Walker', licensePlate: 'TAT789' },
  { companyName: 'Budget Taxi', carModel: 'Toyota RAV4', passengers: 5, rating: 4.6, costPerHour: 26, driverName: 'Zara Khan', licensePlate: 'BDT123' }
]


