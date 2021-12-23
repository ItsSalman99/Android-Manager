import React from 'react';
import { StyleSheet,View,Text,Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import BottomTabs from '../navigations/BottomTabs';

const styles = StyleSheet.create({
  slide: {
    backgroundColor: 'dodgerblue',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 100,
  },
  title:{
    color: '#fff',
    fontSize: 60,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center'
  },  
  text:{
    fontSize: 20,
    textAlign: 'left',
    marginVertical: 20,
  },
  image:{
    height: 200,
    width: 200,
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //[...]
});
const slides = [
  {
    key: 'one',
    title: 'Android Manager',
    text: 'Your android app manager',
    image: require('../assets/1.png'),
    backgroundColor: '#fff',
  },
  {
    key: 'two',
    title: 'Android Manager',
    text: 'Get all your network \n details in one click',
    image: require('../assets/2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Android Manager',
    text: 'Get your files details and more ...',
    image: require('../assets/3.png'),
    backgroundColor: '#22bcb5',
  }
];

export default class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      showRealApp: false
    }
  }
  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
  render() {
    if (this.state.showRealApp) {
      return <BottomTabs/>;
    } else {
      return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone}/>;
    }
  }
}