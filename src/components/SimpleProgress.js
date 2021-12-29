import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from 'react-native';
import ProgressCircle from 'react-native-progress-circle'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

const SimpleProgress = ({currentstor,memory,color,bgcolor}) => {
  
  return (
    <ProgressCircle
            percent={currentstor}
            radius={108}
            borderWidth={15}
            color="dodgerblue"
            shadowColor="#e5edfa"
            bgColor="green"
        >
            <ProgressCircle
            percent={memory}
            radius={90}
            borderWidth={20}
            color="#98dffd"
            shadowColor="#e5edfa"
            bgColor="#fff"
            >
              <Text style={{ fontSize: 20, color: '#000', fontWeight: 'bold' }}></Text>
            </ProgressCircle>
        </ProgressCircle>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#181818',
  },
  scrollContainer: {
    minWidth: '100%',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SimpleProgress;
