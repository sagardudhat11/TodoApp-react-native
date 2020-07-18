import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const  Header=()=>{
    return(
        <View style={styles.header}>
        <Text style={styles.text}>My ToDo List</Text>
        </View>


    )
}

const styles = StyleSheet.create({

header:{
    backgroundColor:'#ff5976',
    height:60,
    paddingTop:20,
},
text:{
    textAlign:'center',
    fontSize:20,
    color:'#fff',
    fontWeight:'700'
    


}



})

export default Header