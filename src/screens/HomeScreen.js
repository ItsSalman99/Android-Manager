import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import {View,Text, FlatList, ScrollView, TouchableOpacity, } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MainProgress from '../components/MainProgress'

const Home = () => {

  const navigation = useNavigation();

    return(
      <ScrollView style={{backgroundColor: '#fff'}} contentInsetAdjustmentBehavior="automatic">
        <MainProgress/>
      {/* <View style={{flex:1, flexDirection: 'row', padding: 10, justifyContent: 'space-around'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Phone Details')}
        style={{backgroundColor: '#fff', alignItems: 'center', shadowColor: '#000', width: '45%',height: 100,padding: 10, elevation: 10, borderRadius: 5}}>
            <FontAwesome name='mobile' size={30} color='dodgerblue'/>
            <Text style={{color: '#000', fontSize: 16, textAlign: 'center'}}>Device Details</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Network Details')}
        style={{backgroundColor: '#fff', alignItems: 'center', shadowColor: '#000', width: '45%',height: 100,padding: 10, elevation: 10, borderRadius: 5}}>
            <MaterialIcon name='network-check' size={30} color='dodgerblue'/>
            <Text style={{color: '#000', fontSize: 16, textAlign: 'center'}}>Network Details</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex:1, flexDirection: 'row', padding: 10, justifyContent: 'space-around'}}>
        <TouchableOpacity style={{backgroundColor: '#fff', alignItems: 'center', shadowColor: '#000', width: '45%',height: 100,padding: 10, elevation: 10, borderRadius: 5}}>
            <FontAwesome name='mobile' size={30} color='dodgerblue'/>
            <Text style={{color: '#000', fontSize: 16, textAlign: 'center'}}>Phone Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: '#fff', alignItems: 'center', shadowColor: '#000', width: '45%',height: 100,padding: 10, elevation: 10, borderRadius: 5}}>
            <FontAwesome name='th-large' size={30} color='dodgerblue'/>
            <Text style={{color: '#000', fontSize: 16, textAlign: 'center'}}>Show all apps</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex:1, flexDirection: 'row', padding: 10, justifyContent: 'space-around'}}>
        <TouchableOpacity style={{backgroundColor: '#fff', alignItems: 'center', shadowColor: '#000', width: '45%',height: 100,padding: 10, elevation: 10, borderRadius: 5}}>
            <FontAwesome name='mobile' size={30} color='dodgerblue'/>
            <Text style={{color: '#000', fontSize: 16, textAlign: 'center'}}>Phone Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: '#fff', alignItems: 'center', shadowColor: '#000', width: '45%',height: 100,padding: 10, elevation: 10, borderRadius: 5}}>
            <FontAwesome name='th-large' size={30} color='dodgerblue'/>
            <Text style={{color: '#000', fontSize: 16, textAlign: 'center'}}>Show all apps</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex:1, flexDirection: 'row', padding: 10, justifyContent: 'space-around'}}>
        <TouchableOpacity style={{backgroundColor: '#fff', alignItems: 'center', shadowColor: '#000', width: '45%',height: 100,padding: 10, elevation: 10, borderRadius: 5}}>
            <FontAwesome name='mobile' size={30} color='dodgerblue'/>
            <Text style={{color: '#000', fontSize: 16, textAlign: 'center'}}>Phone Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: '#fff', alignItems: 'center', shadowColor: '#000', width: '45%',height: 100,padding: 10, elevation: 10, borderRadius: 5}}>
            <FontAwesome name='th-large' size={30} color='dodgerblue'/>
            <Text style={{color: '#000', fontSize: 16, textAlign: 'center'}}>Show all apps</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex:1, flexDirection: 'row', padding: 10, justifyContent: 'space-around'}}>
        <TouchableOpacity style={{backgroundColor: '#fff', alignItems: 'center', shadowColor: '#000', width: '45%',height: 100,padding: 10, elevation: 10, borderRadius: 5}}>
            <FontAwesome name='mobile' size={30} color='dodgerblue'/>
            <Text style={{color: '#000', fontSize: 16, textAlign: 'center'}}>Phone Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: '#fff', alignItems: 'center', shadowColor: '#000', width: '45%',height: 100,padding: 10, elevation: 10, borderRadius: 5}}>
            <FontAwesome name='th-large' size={30} color='dodgerblue'/>
            <Text style={{color: '#000', fontSize: 16, textAlign: 'center'}}>Show all apps</Text>
        </TouchableOpacity>
      </View> */}
      <View style={{width: '70%', alignSelf: 'center'}}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Phone Details')}} style={{backgroundColor: 'dodgerblue',padding: 10, borderRadius: 10, alignItems: 'center'}}>
          <Text style={{fontSize: 20, color: '#fff'}}>More About Device</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    )
}

export default Home