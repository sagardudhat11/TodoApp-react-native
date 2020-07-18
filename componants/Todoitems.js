import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Card} from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';


const Todoitems = ({look,delfunction})=>{
    return(
        <TouchableOpacity onPress={()=>delfunction(look.key)}>
        
        <Card style={styles.card}> 
        <View style={{flexDirection:"row"}}>
        <MaterialIcons name="delete" size={18}  />
             <Text>{look.text}</Text> 
             </View>  
             </Card>
       
        </TouchableOpacity>
    )


}




const styles= StyleSheet.create({

    card:{
        backgroundColor:'#f5cde6',
        padding:15,
        margin:10,
        
        flexDirection:'row'
      }
});



export default Todoitems