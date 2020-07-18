import React,{useState} from 'react';
import { StyleSheet, Text, View ,FlatList,Alert} from 'react-native';
import Constants from 'expo-constants' 
import {TextInput, Button,Card} from 'react-native-paper';
import Header from './componants/Header';
import Todoitems from './componants/Todoitems';
import Addtodo from './componants/Addtodo'
import { MaterialIcons } from '@expo/vector-icons';





export default function App() {

  const [todos,setTodo] =useState([
    
    // {name:'breackfast',key:'2'},
    // {name:'sleep',key:'3'}


  ])

  const pressHandler =(key)=>{

      setTodo((prevtodo)=>(
       prevtodo.filter(todo => todo.key != key)
      ))
  }

  const submitfun =(text)=>{
    
      
    if(text != ''){
    setTodo((prevtodo)=>{
      return[
        
           {text:text, key:Math.random().toString()},
        ...prevtodo
      ]
      
    })
  }else{
      Alert.alert('Warning!','Add any task first!!!',[{text:'understood',onPress:()=>{console.log('understood')}},{text:'cancel',onPress:()=>{console.log('cancel')}}])
  }
  }
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.contant}>
      <Addtodo submitfun={submitfun}/>

        <View style={styles.list}>

          <FlatList 
            data={todos}
            renderItem={({item})=>(
             <Todoitems look={item} delfunction={pressHandler}/>
            )}

          />
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:Constants.statusBarHeight,
   
  },
  contant:{
    padding:30,
    flex:1
  },
  list:{
    flex:1,
    flexDirection:'row'
  }
  
});
