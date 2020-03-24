import React from 'react';
import {Text, View, TextInput} from 'react-native';


const HomeScreen =()=>{
  return(
    <View style={{flex:1, paddingLeft:20, paddingRight:20}}>
      <View style={{paddingTop:30}}>
        <Text>THE COMPANY</Text>
      </View>

      <View style={{paddingTop:10}}>
        <Text style={{fontWeight:"bold", fontSize:28}}>Log In</Text>
      </View>

      <View style={{paddingTop:30}}>
        <Text style={{fontSize:15}}>Email</Text>
      </View>


    <View style={{borderBottomWidth:1, borderBottomColor:"black", padding:10}}>
    <TextInput 
    placeholder ="name"
    /> 
    </View>

    <View style={{marginTop:20}}>
      <Text>Password</Text>
    </View>




    </View>
  );
}

export default HomeScreen;