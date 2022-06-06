import React, { useState } from 'react'
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native'


const InvoiceTable = ({val, ind}) => {
  return (
    <View style={styles.table_row} key={ind}>
        <View style={styles.col}><Text>{val.desc}</Text></View>
        <View style={styles.col_same}><Text>{val.qty}</Text></View>
        <View style={styles.col}><Text>{val.total}</Text></View>
    </View>
 
  )
}

export default InvoiceTable

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
})