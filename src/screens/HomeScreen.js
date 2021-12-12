import React, { useEffect } from 'react'
import {View,Text} from 'react-native'
import DeviceInfo from 'react-native-device-info'
import SimpleProgress from '../components/SimpleProgress'

const Home = () => {

    useEffect(() => {
      return () => {
        DeviceInfo.getCarrier().then((carrier) => {
          console.warn(carrier);
        });
    }
      }
    )

    return(
      <View style={{backgroundColor: '#fff', flex: 1, flexDirection: 'column',}}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <SimpleProgress/>
          <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex:1, alignItems: 'center'}}>
                <Text style={{fontSize: 20, fontWeight: 'bold',color: '#000000'}}>40%</Text>
              </View>
              <View style={{flex:1, alignItems: 'center'}}>
                <Text style={{fontSize: 20, fontWeight: 'bold',color: '#000000'}}>60%</Text>
              </View>
          </View>
        </View>
      </View>
    )
}

export default Home