import React from 'react';
import { ScrollView, StyleSheet, View, TextInput, TouchableOpacity, Text, Header, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

var radio_props = [
  {label: 'Sender    ', value: 0 },
  {label: 'Receiver', value: 1 }
];



export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Confirmation Order',
  };

  render() {
    return (
      <View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.container}>
            <TextInput 
            underlineColorAndroid="transparent"
            style={styles.textInput}
            placeholder="Your Package Photo"
            placeholderTextColor="grey"/>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}> + </Text>
            </TouchableOpacity>

            <View style={styles.layout1}>
              <Text style={styles.text}> Enter contact number (sender and receiver) and note for driver.</Text>
              <Ionicons style={styles.icons1} name="ios-pin" size={30} color="#8F00FF" />
              <Text style={styles.senderText}> Sender </Text>
              <Ionicons style={styles.icons2} name="ios-arrow-up" size={30} color="grey" />
              <Text style={styles.streetText}> Jl. Jendral Sudirman no. 1 </Text>
              <TextInput style={styles.textInputName}>
                <Icon name={'ios-contact'} size={30} color={'#8F00FF'} />
                <Text style={styles.nameText}> Name </Text>
              </TextInput>
              <TextInput style={styles.textInputPhone}>
                <Icon name={'ios-call'} size={30} color={'#8F00FF'} />
                <Text style={styles.phoneText}> Phone Number </Text>
              </TextInput>
              <TextInput style={styles.textInputNotes}>
                <Text style={styles.notesText}> Notes, intruction, or location details </Text>
              </TextInput>

              <Ionicons style={styles.icons1} name="ios-pin" size={30} color="#FFA500" />
              <Text style={styles.receiverText}> Receiver 1 </Text>
              <Ionicons style={styles.icons2} name="ios-arrow-down" size={30} color="grey" />
              <Text style={styles.streetText}> Jl. Pamoyanan no. 14 </Text>

              <Ionicons style={styles.icons1} name="ios-pin" size={30} color="#FFA500" />
              <Text style={styles.receiverText}> Receiver 2 </Text>
              <Ionicons style={styles.icons2} name="ios-arrow-down" size={30} color="grey" />
              <Text style={styles.streetText}> Jl. A.yani no. 292 </Text>
            </View>

            <View style={styles.layout2}>
              <Text style={styles.textUn}> Price                                        IDR 200.0000</Text>
              <Text style={styles.textUn}> Door to door (driver)                  IDR 50.000</Text>
              <Text style={styles.textUl}>__________________________________________</Text>
              <Text style={styles.textTp}> Total Payment                        IDR 250.000</Text>
              <Text style={styles.textUl2}>______________________________________________</Text>
              <Text style={styles.textRfp}> Responsible for Payment</Text>
              <View style={styles.screenRadio}>
                <RadioForm 
                buttonColor={'grey'}
                buttonSize={10}
                radio_props={radio_props} 
                initial={0} 
                formHorizontal={true} 
                labelStyle={{fontSize: 17}}
                onPress={(value) => {this.setState({value:value})}}/>
              </View>
              <Text style={styles.textUl3}>______________________________________________</Text>
              <Text style={styles.textPw}> Pay with</Text>
              <View style={styles.screenSp}>
                <TouchableOpacity style={styles.viewSelectOne}>
                  <Text style={styles.textStyleCash}> Cash </Text>
                  <Image style={styles.payIcon} source={require('../assets/images/img-cash.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewSelectTwo}>
                  <Text style={styles.textStyle}> Wallet </Text>
                  <Image style={styles.payIcon} source={require('../assets/images/img-wallet.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewSelectThree}>
                  <Text style={styles.textStyle}> Billed </Text>
                  <Image style={styles.payIcon} source={require('../assets/images/img-billet.png')}/>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.orderButton}>
                <Text style={styles.orderButtonText}> Order </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#CACACA',
  },
  contentContainer: {
    paddingTop: 0,
  },
  textInput: {
    color: 'black',
    padding: 10,
    borderRadius: 35,
    backgroundColor: 'white',
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 15,
    top: 22.5,
    backgroundColor: '#8F00FF',
    width: 35,
    height: 35,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 24,
  },
  layout1: {
    borderWidth: 5,
    borderColor: '#CACACA',
    borderRadius: 20,
    backgroundColor: 'white',
    top: 10,
    height: 525,
    alignItems: 'stretch',
  },
  text: {
    fontSize: 19.5,
    top: 10,
  },
  icons1: {
    top: 20,
    left: 5,
  },
  senderText: {
    fontSize: 21,
    left: 20,
    bottom: 10.5,
    color: '#8F00FF',
    fontWeight: 'bold',
  },
  icons2: {
    left: 310,
    bottom: 33,
  },
  streetText: {
    fontSize: 15,
    left: 20,
    bottom: 40,
    color: 'grey',
    fontWeight: 'normal',
  },
  textInputName: {
    color: 'black',
    left: 20,
    bottom: 37.5,
    width: 290,
    padding: 10,
    backgroundColor: 'white',
  },
  nameText: {
    color: 'grey'
  },
  textInputPhone: {
    color: 'black',
    left: 20,
    bottom: 37.5,
    width: 290,
    padding: 10,
    backgroundColor: 'white',
  },
  phoneText: {
    color: 'grey'
  },
  textInputNotes: {
    color: 'black',
    left: 20,
    bottom: 37.5,
    width: 290,
    padding: 10,
    backgroundColor: 'white',
  },
  notesText: {
    color: 'grey'
  },
  receiverText: {
    fontSize: 21,
    left: 20,
    bottom: 10.5,
    color: '#FFA500',
    fontWeight: 'bold',
  },
  layout2: {
    backgroundColor: 'white',
    top: 20,
    height: 430,
  },
  textUn: {
    fontSize: 19.5,
    top: 15,
    left: 15,
  },
  textUl: {
    fontSize: 19.5,
    top: 10,
    left: 15,
    color: '#CACACA',
  },
  textTp: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8F00FF',
    top: 17,
    left: 15,
  },
  textUl2: {
    fontSize: 19.5,
    top: 17.5,
    left: 3,
    color: '#CACACA',
  },
  textRfp: {
    fontSize: 20,
    fontWeight: 'bold',
    top: 22.5,
    left: 15,
  },
  RadioView: {
    fontSize: 20,
    fontWeight: 'bold',
    top: 25,
    left: 15,
  },
  screenRadio: {
    backgroundColor: 'white',
    top: 35,
    left: 15,
  },
  textUl3: {
    fontSize: 19.5,
    top: 35,
    left: 3,
    color: '#CACACA',
  },
  textPw: {
    fontSize: 20,
    fontWeight: 'bold',
    top: 42.5,
    left: 15,
  },
  screenSp: {
    backgroundColor: 'white',
    top: 55,
    left: 15,
    flexDirection:'row',
    height: 125,
  },
  textStyleCash: {
    color: '#8F00FF',
    top:45,
    textAlign: 'center',
  },
  textStyle: {
    top:45,
    textAlign: 'center',
  },
  payIcon: {
    left: 25,
  },
  viewSelectOne:{
    top: 5,
    width: 80, 
    height: 70,
    backgroundColor: 'white',
    left: 5,
    borderColor: '#8F00FF',
    borderWidth: 2,
  },
  viewSelectTwo:{
    top: 5,
    width: 80, 
    height: 70, 
    backgroundColor: 'white',
    left: 43,
    borderColor: 'grey',
    borderWidth: 2,
  },
  viewSelectThree:{
    top: 5,
    width: 80, 
    height: 70, 
    backgroundColor: 'white',
    left: 85,
    borderColor: 'grey',
    borderWidth: 2,
  },
  orderButton: {
    top: 22.5,
    backgroundColor: '#8F00FF',
    height: 40,
    borderRadius: 3.5,
    alignSelf: 'center',
    width: 325,
  },
  orderButtonText: {
    top: 5,
    color: 'white',
    fontSize: 22.5,
    textAlign: 'center',
  },
});