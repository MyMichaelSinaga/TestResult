import React from 'react';
import { ScrollView, StyleSheet, View, TextInput, TouchableOpacity, Text, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Pick Up Location',
  };

  render() {
    return (
      <View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.container}>
          	<TextInput 
	            underlineColorAndroid="transparent"
	            style={styles.textInput}
	            placeholder="            Pick Up Location"
	            placeholderTextColor="grey"/>
	            <Ionicons style={styles.icon} name="ios-pin" size={25} color="#8F00FF" />
          </View>
          <View style={styles.screenSp}>
            <TouchableOpacity style={styles.viewSet1}>
                <Text style={styles.textStyleSet}> Set route from favorite list </Text>
                <Image style={styles.iconic} source={require('../assets/images/set-route.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewSet2}>
            	<Text style={styles.textStyleSet}> Set location on the map </Text>
            	<Image style={styles.iconic} source={require('../assets/images/set-loc.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewSet3}>
                <Text style={styles.textStyleLoc}> Home </Text>
                <Text style={styles.textStyleLocDetail}> Queen Street V no. 18d </Text>
                <Ionicons style={styles.setIcon} name="md-star" size={27.5} color="yellow" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewSet4}>
                <Text style={styles.textStyleLoc}> Work </Text>
                <Text style={styles.textStyleLocDetail}> King Street VI no. 19 </Text>
                <Ionicons style={styles.setIcon} name="md-star" size={27.5} color="yellow" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewSet5}>
                <Text style={styles.textStyleLoc}> Daily Market </Text>
                <Text style={styles.textStyleLocDetail}> Queen Street V no. 18d </Text>
                <Ionicons style={styles.setIcon} name="md-star-outline" size={27.5}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewSet6}>
                <Text style={styles.textStyleLoc}> Hospital </Text>
                <Text style={styles.textStyleLocDetail}> Queen Street V no. 18d </Text>
                <Ionicons style={styles.setIcon} name="md-star-outline" size={27.5}/>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12.5,
    height: 60,
    backgroundColor: 'white',
  },
  textInput: {
    color: 'black',
    height: 35,
    width: 330,
    borderWidth: 0.5,
    borderColor: 'grey',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  icon: {
    bottom: 30,
    left: 25,
  },
  screenSp: {
  	height: 500,
    backgroundColor: '#CACACA',
  },
  viewSet1: {
    top: 15,
    backgroundColor: 'white',
    height: 45,
    borderRadius: 3.5,
    alignSelf: 'center',
    width: 330,
  },
  viewSet2: {
    top: 25,
    backgroundColor: 'white',
    height: 45,
    borderRadius: 3.5,
    alignSelf: 'center',
    width: 330,
  },
  viewSet3: {
    top: 35,
    backgroundColor: 'white',
    height: 45,
    borderRadius: 3.5,
    alignSelf: 'center',
    width: 330,
  },
  viewSet4: {
    top: 45,
    backgroundColor: 'white',
    height: 45,
    borderRadius: 3.5,
    alignSelf: 'center',
    width: 330,
  },
  viewSet5: {
    top: 55,
    backgroundColor: 'white',
    height: 45,
    borderRadius: 3.5,
    alignSelf: 'center',
    width: 330,
  },
  viewSet6: {
    top: 65,
    backgroundColor: 'white',
    height: 45,
    borderRadius: 3.5,
    alignSelf: 'center',
    width: 330,
  },
  textStyleSet: {
  	fontSize: 15,
    top: 10,
    left: 40,
  },
  iconic: {
  	bottom: 10,
  	left: 10
  },
  textStyleLoc: {
  	fontSize: 15,
  	top: 3,
    left: 8,
  },
  textStyleLocDetail: {
  	fontSize: 12.5,
  	color: 'grey',
  	top: 6,
    left: 8,
  },
  setIcon: {
  	bottom:25,
  	left: 300,
  },
});