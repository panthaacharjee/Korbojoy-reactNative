import React, { useState } from 'react'
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native'
import RadioButton from "../RadioButton/RadioButton"
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Table = ({val, ind, navigation}) => {
  return (
        <View style={styles.table_row} key={ind}>
            <View style={styles.col_same}><Text>{val.id}</Text></View>
            <View style={styles.col}><Image style={{height: 120, width: 140}} source={{uri : val.img}}/></View>
            <View style={styles.col}><Text>{val.name}</Text></View>
            <View style={styles.col_same}><Text>{val.number}</Text></View>
            <View style={styles.col}><Text>{val.email}</Text></View>
            <View style={styles.col}><TouchableOpacity onPress={()=>navigation.navigate("details")} style={styles.details}><Text style={{color:"blue"}}>Information</Text></TouchableOpacity></View>
            <View style={styles.col}><Text>{val.join_date}</Text></View>
            <View style={styles.col_same}>
                <RadioButton />
            </View>
            <View style={styles.col_same}><TouchableOpacity><FontAwesome style={{fontSize:18, marginLeft: 5}} name='edit' color="#000"/></TouchableOpacity></View>
            <View style={styles.col_same}><TouchableOpacity style={styles.delete}><Text style={{color:"red"}}>Delete</Text></TouchableOpacity></View>
        </View>
 
  )
}

export default Table

const styles = StyleSheet.create({
    table:{
        paddingBottom: 40
    },
    table_head:{
        flexDirection:"row"
    },
    table_row:{
        flexDirection:"row",
    },
    col:{
        width: 250,
        paddingTop: 8,
        paddingBottom:8,
        borderWidth:1,
        borderColor:"#000",
        alignItems:'center',
        justifyContent:"center",

    },
    col_same:{
        width: 90,
        borderWidth:1,
        borderColor:"#000",
        alignItems:'center',
        justifyContent:"center",

    },
    details:{
        borderWidth:1,
        borderColor:"blue",
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:30,
        paddingRight:30,
        fontSize:20,
        fontWeight:"bold"
    },
    delete:{
        borderWidth:1,
        borderColor:"red",
        padding:10
    },
})