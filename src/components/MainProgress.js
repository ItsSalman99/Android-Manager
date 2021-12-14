import React, {useEffect, useState} from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from 'react-native';
import SimpleProgress from './SimpleProgress';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import DeviceInfo from 'react-native-device-info'

const MainProgress = () => {

    
    const [cstorage,setcstorage] = useState(0);
    const [cstorageused,setcstorageused] = useState(0);
    const [memory,setmemory] = useState(0);
    const [gbmemory,setgbmemory] = useState(0);
    
    useEffect(() => {
      DeviceInfo.getFreeDiskStorage().then((freeDiskStorage) => {
        setcstorage(freeDiskStorage/1073741824); //converting bytes to GB (1024 * 1024 * 1024)
        setcstorageused((cstorage/128)*100);  //getting in percentage form
      });
      DeviceInfo.getUsedMemory().then((maxMemory)  => {
        setmemory(maxMemory/1073741824); //converting bytes to GB (1024 * 1024 * 1024)
        setgbmemory((memory/6)*100);  //getting in percentage form
      });
  
      return () => {
        }
      }
    )

    return(
        <View style={{backgroundColor: '#fff', flex: 1, alignItems: 'center', flexDirection: 'column', padding: 10}}>
        <SimpleProgress currentstor={Math.round(cstorageused)} memory={Math.round(gbmemory)}/>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex:1, alignItems: 'center'}}>
            <Text style={{fontSize: 26, fontWeight: 'bold',color: '#000000', padding: 10}}>
                <FontAwesome name='circle' size={20} color='#5599fc'/>
                {" "+ Math.round(cstorageused)} %
                </Text>
                <Text>Total Internal Storage </Text>
                <Text>{Math.round(cstorage)} GB OUT OF 128 GB</Text>
            </View>
            <View style={{flex:1, alignItems: 'center'}}>
            <Text style={{fontSize: 26, fontWeight: 'bold',color: '#000000', padding: 10}}>
                <FontAwesome name='circle' size={20} color='#98dffd'/>
                {" "+ Math.round(gbmemory)} %
                </Text>
                <Text>Total Memory Storage</Text>
                <Text>{Math.round(gbmemory)} GB OUT OF 6 GB</Text>
            </View> 
    </View>
    </View>
  )
}

export default MainProgress;
