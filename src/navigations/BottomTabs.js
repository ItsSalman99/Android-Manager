import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/HomeScreen';
import Fontawesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import ToolBox from '../screens/ToolBoxScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import MeScreen from '../screens/MeScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} options={{
                tabBarStyle:{ height: 60, paddingBottom: 5},
                headerTitle: 'Android Manager',
                tabBarLabelStyle:{
                    fontSize: 12,
                    fontFamily: 'helvetica'
                },
                tabBarIcon: () => {
                    return (<Fontawesome name='home' size={25} color="dodgerblue" />)
                }
            }}/>
            <Tab.Screen name='Toolbox' component={ToolBox} options={{
                tabBarStyle:{ height: 60, paddingBottom: 5},
                tabBarLabelStyle:{
                    fontSize: 12,
                    fontFamily: 'helvetica'
                },
                tabBarIcon: () => {
                    return (<MaterialIcon name='handyman' size={25} color="dodgerblue" />)
                }
            }}/>
            <Tab.Screen name='Discover' component={DiscoverScreen} options={{
                tabBarStyle:{ height: 60, paddingBottom: 5},
                tabBarLabelStyle:{
                    fontSize: 12,
                    fontFamily: 'helvetica'
                },
                tabBarIcon: () => {
                    return (<MaterialIcon name='swipe' size={25} color="dodgerblue" />)
                }
            }}/>
            <Tab.Screen name='Me' component={MeScreen} options={{
                tabBarStyle:{ height: 60, paddingBottom: 5},
                tabBarLabelStyle:{
                    fontSize: 12,
                    fontFamily: 'helvetica'
                },
                tabBarIcon: () => {
                    return (<MaterialIcon name='people' size={25} color="dodgerblue" />)
                }
            }}/>
        </Tab.Navigator>
    )
}

export default BottomTabs