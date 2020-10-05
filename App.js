import * as React from 'react';
import {  Text,  View,  StyleSheet,  TextInput,  TouchableOpacity,} from 'react-native';
import {Header} from 'react-native-elements';
import * as Speech from 'expo-speech';
import { render } from 'react-dom';


export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      text:'',
      history:[],
      ishistoryButtonPressed:''
    }
  }

  convertText(){
    var textToConvert = this.state.text
    Speech.speak(textToConvert)
  }

  render(){
      return (
      <View style={styles.container}>
        <Header backgroundColor={'#9c8210'} centerComponent={{text: 'Text To Speech App ',style: { color: '#fff', fontSize: 20 }}}/>
        <Text style={styles.Text}>Please type your text here↓</Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          placeholder="Enter your word here"
          value={this.state.text}
        />
        <TouchableOpacity style={styles.goButton} 
        onPress={() => {
          this.state.text === ''?
            alert('You have not entered any text!Please enter text and try again.'):
              this.convertText(this.state.text);
          console.log(this.state.text)
        }}><Text style={styles.buttonText}>Search</Text></TouchableOpacity>
        <Text style={styles.Text}>The word that has been typed:{this.state.text}</Text>
      </View>
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lime',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 65,
    textAlign: 'center',
    borderWidth: 4,
    fontSize:24,
    fontWeight:'bold',
    placeholderTextColor:'blue'
  },
  goButton: {
    marginLeft:65,
    width:200,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,
    borderWidth:1,
    borderColor:'black',
    marginTop:50,
    backgroundColor:'red'
  },
  buttonText: {
    fontSize:32,
    fontWeight:'bold',
    color:'black'
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
  },
  Text: {
    fontSize:22,
    fontWeight:'bold',
    color:'black',
    textAlign: 'center',
  }
});
