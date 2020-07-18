import React,{useState} from 'react';
import { StyleSheet, Text,View } from 'react-native';
import {TextInput, Button,Card} from 'react-native-paper';


const Addtodo =({submitfun})=> {
const [text,setText]= useState('');

// const changeHandler =(val)=>{
//     setText(val)

// }



return(
    <View>
        <TextInput
        label="Write Task" 
        style={styles.txt}
        multiline
        onChangeText={text => setText(text)}
        />
        <Button style={styles.btn}
            mode="contained"
            onPress={()=>submitfun(text)}
        >ADD Task</Button>
    </View>

)}

const styles = StyleSheet.create({
    btn:{
        margin:5
      },
      txt:{
          margin:5
      }
})

export default Addtodo