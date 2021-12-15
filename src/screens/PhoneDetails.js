import React, {useState, useEffect} from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import DeviceInfo from 'react-native-device-info'
import SingleProgress from '../components/SingleProgress';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const PhoneDetails = () => {

    const [devicename, setDevicename] = useState('');
    const [charging,setcharging] = useState(0);
    const [DiskCapacity, setDiskCapacity] = useState(0)
    const [powerState, setPowerstate] = useState('')
    const [product, setProduct] = useState('')
    const [SecurityPatch, setSecurityPatch] = useState('')
    const [BuildId, setBuildId] = useState('')
    const [LocationValue, setLocationValue] = useState(false)
    const [headphone, setHeadphone] = useState(false)

    let disk = 0;
    let uniqueId = DeviceInfo.getUniqueId();
    let deviceId = DeviceInfo.getDeviceId();
    let readableVersion = DeviceInfo.getReadableVersion();
    let systemName = DeviceInfo.getSystemName();
    let systemVersion = DeviceInfo.getSystemVersion();
    let type = DeviceInfo.getDeviceType();

    useEffect(() => {
        DeviceInfo.getDeviceName().then((deviceName) => {
            setDevicename(deviceName);
          });
        DeviceInfo.getBatteryLevel().then((batteryLevel) => {
            setcharging(Math.round(batteryLevel*100));
          });
          DeviceInfo.getPowerState().then((state) => {
            setPowerstate(state.batteryState);
          });
          DeviceInfo.getProduct().then((product) => {
            setProduct(product);
          });
          DeviceInfo.getSecurityPatch().then((securityPatch) => {
            setSecurityPatch(securityPatch);
          });
          DeviceInfo.getBuildId().then((buildId) => {
            setBuildId(buildId);
          });
          DeviceInfo.getFreeDiskStorage().then((totalDisk) => {
            disk = totalDisk/1073741824; //converting bytes to GB (1024 * 1024 * 1024)
            setDiskCapacity(Math.round(disk));  //getting in percentage form
          });
          DeviceInfo.isLocationEnabled().then((enabled) => {
            setLocationValue(enabled);
          });
          DeviceInfo.isHeadphonesConnected().then((enabled) => {
            setHeadphone(enabled);
          });
        return () => {
        }
    })

    return(
        <ScrollView>
        <View style={{backgroundColor: '#fff', flex: 1, flexDirection: 'column', padding: 10}}>
            <Text style={{backgroundColor: 'dodgerblue', fontSize: 20,color: '#fff', padding: 10, borderRadius: 20,}}>
                Hey, {devicename}!
            </Text>
            <View style={{alignItems: 'center', paddingVertical: 20,}}>
                <SingleProgress percent={charging} radius={90} borderWdth={20} 
                bg={'#fff'} color={'dodgerblue'} text={'%'}/>
            </View>
            <View style={{alignItems: 'center', paddingVertical: 20,}}>
                <SingleProgress percent={DiskCapacity} radius={90} borderWdth={20} 
                bg={'#fff'} color={'dodgerblue'} text={'GB free'}/>
            </View>
            <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold', marginVertical: 10}}>
                MORE ABOUT YOUR DEVICE:
            </Text>
            <TouchableOpacity>
            <Text style={{color: '#000',borderRadius: 20, borderWidth: 0.1, padding: 10, marginBottom: 10}}>
                Device Id: {deviceId}
            </Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{color: '#000',borderRadius: 20, borderWidth: 0.1, padding: 10, marginBottom: 10}}>
                Device Unique Id: {uniqueId}
            </Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{color: '#000',borderRadius: 20, borderWidth: 0.1, padding: 10, marginBottom: 10}}>
                Device OS: {systemName}
            </Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{color: '#000',borderRadius: 20, borderWidth: 0.1, padding: 10, marginBottom: 10}}>
                Device OS Version: {systemVersion}
            </Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{color: '#000',borderRadius: 20, borderWidth: 0.1, padding: 10, marginBottom: 10}}>
                Device Type: {type}
            </Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{color: '#000',borderRadius: 20, borderWidth: 0.1, padding: 10, marginBottom: 10}}>
                Battery state: {powerState}
            </Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{color: '#000',borderRadius: 20, borderWidth: 0.1, padding: 10, marginBottom: 10}}>
                Device product: {product}
            </Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{color: '#000',borderRadius: 20, borderWidth: 0.1, padding: 10, marginBottom: 10}}>
                Device Id: {readableVersion}
            </Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{color: '#000',borderRadius: 20, borderWidth: 0.1, padding: 10, marginBottom: 10}}>
                Device Build Id: {BuildId}
            </Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{color: '#000',borderRadius: 20, borderWidth: 0.1, padding: 10, marginBottom: 10}}>
                Security Patch: {SecurityPatch}
            </Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{color: '#000',borderRadius: 20, borderWidth: 0.1, padding: 10, marginBottom: 10}}>
                Location: {LocationValue == true ? 'Enabled' : 'Disabled'} 
            </Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{color: '#000',borderRadius: 20, borderWidth: 0.1, padding: 10, marginBottom: 10}}>
                Headphones: {headphone == true ? 'Pluged in' : 'Not Pluged In'} 
            </Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
}

export default PhoneDetails