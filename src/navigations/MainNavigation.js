import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import NetworkScreen from '../screens/NetworkScreen';
import PhoneDetails from '../screens/PhoneDetails';
import BottomTabs from './BottomTabs'

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Android Manager'>
                <Stack.Screen name="Android Manager" component={BottomTabs}/>
                <Stack.Screen name="Phone Details" component={PhoneDetails}/>
                <Stack.Screen name="Network Details" component={NetworkScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation