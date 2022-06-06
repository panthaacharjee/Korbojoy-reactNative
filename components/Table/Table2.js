import React from 'react'
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native'
import RadioButton from '../RadioButton/RadioButton'


const Table2 = ({val, ind}) => {
  return (
        <View style={styles.table_row} key={ind}>
            <View style={styles.col_same}><Text>{val.id}</Text></View>
            <View style={styles.col}><Text>{val.name}</Text></View>
            <View style={styles.col_same}><Text>{val.number}</Text></View>
            <View style={styles.col}><Text>{val.email}</Text></View>
            <View style={styles.col}><Text>{val.join_date}</Text></View>
            <View style={styles.col_same}><Text>{val.totalProduct}</Text></View>
            <View style={styles.col_same}><Text>{val.totalQty}</Text></View>
            <View style={styles.col_same}><Text>{val.totalAmount}</Text></View>
            <View style={styles.col}><TouchableOpacity style={styles.details}><Text style={{color:"blue", textAlign:"center"}}>{val.invoice}</Text></TouchableOpacity></View>
        </View>
 
  )
}

export default Table2

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
        width: 100,
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
        paddingLeft:10,
        paddingRight:10,
        fontSize:20,
        fontWeight:"bold",
        width:80
    },
    delete:{
        borderWidth:2,
        borderColor:"blue",
        height:30,
        width:60,
        alignItems: "center",
        justifyContent:'center',
    },
})