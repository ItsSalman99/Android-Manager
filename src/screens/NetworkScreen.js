import React, {useEffect, useState} from 'react'
import {View,Text, ScrollView, TouchableOpacity} from 'react-native'
import DeviceInfo from 'react-native-device-info'
const NetworkScreen = () => {

    const [Sim, setSim] = useState('')
    const [MacAddress, setMacAddress] = useState('')
    const [IpAddress, setIpAddress] = useState('')
    useEffect(() => {
        DeviceInfo.getCarrier().then((carrier) => {
            setSim(carrier);
          });
        DeviceInfo.getMacAddress().then((mac) => {
            setMacAddress(mac);
          });
          DeviceInfo.getIpAddress().then((ip) => {
            setIpAddress(ip);
          });
        return () => {
        }
    })

    return (
        <ScrollView>
        <View style={{backgroundColor: '#fff', flex: 1, flexDirection: 'column', padding: 10}}>
            <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold', marginVertical: 10}}>
                MORE ABOUT YOUR DEVICE:
            </Text>
            <TouchableOpacity>
            <Text style={{color: '#000',borderRadius: 20, borderWidth: 0.1, padding: 10, marginBottom: 10}}>
                Network Operator : {Sim}
            </Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{color: '#000',borderRadius: 20, borderWidth: 0.1, padding: 10, marginBottom: 10}}>
                Mac Address: {MacAddress}
            </Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{color: '#000',borderRadius: 20, borderWidth: 0.1, padding: 10, marginBottom: 10}}>
                Mac Address: {IpAddress}
            </Text>
            </TouchableOpacity>
            
        </View>
        </ScrollView>
    )
}

export default NetworkScreen;