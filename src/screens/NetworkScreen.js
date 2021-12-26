import React, {useEffect, useState} from 'react'
import {View,Text, ScrollView, TouchableOpacity} from 'react-native'
import DeviceInfo from "react-native-device-info";
import {NetworkInfo} from 'react-native-network-info';
import RNAndroidInstalledApps from 'react-native-android-installed-apps-unblocking';

const NetworkScreen = () => {

    const [Sim, setSim] = useState('')
    const [bssID, setbssID] = useState('')
    const [IpAddress, setIpAddress] = useState('')
    const [subnet, setSubnet] = useState('')
    const [defaultIP, setdefaultIP] = useState('')
    const [netFrequency, setnetFrequency] = useState('')


    useEffect(() => {
        DeviceInfo.getCarrier().then((carrier) => {
            setSim(carrier);
          });
        NetworkInfo.getIPAddress().then(ipAddress => {
            setIpAddress(ipAddress);
        });
        // Get BSSID
        NetworkInfo.getBSSID().then(bssid => {
            setbssID(bssid);
        });
        // Get Subnet
        NetworkInfo.getSubnet().then(subnet => {
            setSubnet(subnet);
        });
        // Get Default Gateway IP
        NetworkInfo.getGatewayIPAddress().then(defaultGateway => {
           setdefaultIP(defaultGateway);
        });
        RNAndroidInstalledApps.getApps()
        .then(apps => {
            console.log({apps})
        })
        .catch(error => {
            alert(error);
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
                Ip Address: {IpAddress}
            </Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{color: '#000',borderRadius: 20, borderWidth: 0.1, padding: 10, marginBottom: 10}}>
                BSS ID: {bssID}
            </Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{color: '#000',borderRadius: 20, borderWidth: 0.1, padding: 10, marginBottom: 10}}>
                SUB NET: {subnet}
            </Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{color: '#000',borderRadius: 20, borderWidth: 0.1, padding: 10, marginBottom: 10}}>
                Default Ip: {defaultIP}
            </Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{color: '#000',borderRadius: 20, borderWidth: 0.1, padding: 10, marginBottom: 10}}>
                Net Frequency: {netFrequency}
            </Text>
            </TouchableOpacity>
            
        </View>
        </ScrollView>
    )
}

export default NetworkScreen;