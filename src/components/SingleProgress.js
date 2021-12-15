import React, { useEffect,useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import ProgressCircle from 'react-native-progress-circle'

const SingleProgress = ({percent,radius,borderWdth,color,bg,text}) => {
  const [charging, setCharging] = useState(0)
  useEffect(() => {
    if (charging != 100) {
      for (let i = 0; i < percent; i++) {
        setCharging(i+1);        
      }
    }
    return () => {
    }
  })

  return (
    <ProgressCircle
            percent={charging}
            radius={radius}
            borderWidth={borderWdth}
            color={color}
            shadowColor="lightblue"
            bgColor={bg}
        >
            <Text style={{ color: '#000',fontSize: 45, fontWeight: 'bold' }}>{charging}</Text>
            <Text style={{ color: '#000',fontSize: 20, fontWeight: 'bold' }}>{text}</Text>
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

export default SingleProgress;
