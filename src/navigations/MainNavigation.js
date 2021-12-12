import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import BottomTabs from './BottomTabs'

const MainNavigation = () => {
    return(
        <NavigationContainer>
            <BottomTabs/>
        </NavigationContainer>
    )
}

export default MainNavigation