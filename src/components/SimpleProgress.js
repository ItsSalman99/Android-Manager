import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from 'react-native';
import ProgressCircle from 'react-native-progress-circle'

const SimpleProgress = ({currentstor,memory,color,bgcolor}) => {
  
  return (
    <ProgressCircle
            percent={currentstor}
            radius={100}
            borderWidth={10}
            color="#5599fc"
            shadowColor="#e5edfa"
            bgColor="#fff"
        >
            {/* <Text style={{ fontSize: 24 }}>{'30%'}</Text> */}
            <ProgressCircle
            percent={memory}
            radius={90}
            borderWidth={20}
            color="#98dffd"
            shadowColor="#e5edfa"
            bgColor="#fff"
            ></ProgressCircle>
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
