import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from 'react-native';
import ProgressCircle from 'react-native-progress-circle'

const SimpleProgress = ({percent,color,bgcolor}) => {
  return (
    <ProgressCircle
            percent={30}
            radius={85}
            borderWidth={12}
            color="#16A085"
            shadowColor="#85C1E9"
            bgColor="#fff"
        >
            {/* <Text style={{ fontSize: 24 }}>{'30%'}</Text> */}
            <ProgressCircle
            percent={80}
            radius={70}
            borderWidth={16}
            color="#1F618D"
            shadowColor="#85C1E9"
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
