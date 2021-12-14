import React, {useState, useEffect} from 'react'
import { Text, View } from 'react-native'
import DeviceInfo from 'react-native-device-info'
import SingleProgress from '../components/SingleProgress';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const PhoneDetails = () => {

    const [devicename, setDevicename] = useState('');
    const [charging,setcharging] = useState(0);
    useEffect(() => {
        DeviceInfo.getDeviceName().then((deviceName) => {
            setDevicename(deviceName);
          });
        DeviceInfo.getBatteryLevel().then((batteryLevel) => {
            setcharging(Math.round(batteryLevel*100));
          });
        return () => {
        }
    })

    return(
        <View style={{backgroundColor: '#fff', flex: 1, flexDirection: 'column', padding: 10}}>
            <Text style={{backgroundColor: '#3498DB', fontSize: 20,color: '#fff', padding: 10, borderRadius: 20,}}>
                Hey, {devicename}!
            </Text>
            <View style={{alignItems: 'center', paddingVertical: 20,}}>
                <SingleProgress percent={charging} radius={80} borderWdth={10} 
                bg={'#48C9B0'} color={'dodgerblue'}/>
            </View>
        </View>
    )
}

export default PhoneDetails