import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/HomeScreen';
import Fontawesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MeScreen from '../screens/MeScreen';
import NetworkScreen from '../screens/NetworkScreen';
import CameraScreen from '../screens/CameraScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return(
        <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
            <Tab.Screen name='Home' component={Home} options={{
                headerShown: true,
                tabBarStyle:{ height: 60, paddingBottom: 5,},
                headerTitle: 'Android Manager',
                tabBarLabelStyle:{
                    fontSize: 12,
                    fontFamily: 'helvetica'
                },
                tabBarIcon: () => {
                    return (<Fontawesome name='home' size={25} color="dodgerblue" />)
                }
            }}/>
            <Tab.Screen name='Network' component={NetworkScreen} options={{
                tabBarStyle:{ height: 60, paddingBottom: 5},
                tabBarLabelStyle:{
                    fontSize: 12,
                    fontFamily: 'helvetica'
                },
                tabBarIcon: () => {
                    return (<MaterialIcon name='wifi' size={25} color="dodgerblue" />)
                }
            }}/>
            <Tab.Screen name='Camera' component={CameraScreen} options={{
                tabBarStyle:{ height: 60, paddingBottom: 5},
                tabBarLabelStyle:{
                    fontSize: 12,
                    fontFamily: 'helvetica'
                },
                tabBarIcon: () => {
                    return (<MaterialIcon name='camera' size={25} color="dodgerblue" />)
                }
            }}/>
            <Tab.Screen name='Files' component={MeScreen} options={{
                tabBarStyle:{ height: 60, paddingBottom: 5},
                tabBarLabelStyle:{
                    fontSize: 12,
                    fontFamily: 'helvetica'
                },
                tabBarIcon: () => {
                    return (<MaterialIcon name='file-copy' size={25} color="dodgerblue" />)
                }
            }}/>
        </Tab.Navigator>
    )
}

export default BottomTabs