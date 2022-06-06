import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import InvoiceTable from './InvoiceTable'




const Invoice = () => {
  const InvoiceData = [
    {
      desc:"N-5200",
      qty : 1,
      total:56000
    },
    {
      desc:"N-5200",
      qty : 1,
      total:56000
    },
    {
      desc:"N-5200",
      qty : 1,
      total:56000
    },
    {
      desc:"N-5200",
      qty : 1,
      total:56000
    },    
  ]
 
  const image = "https://us.123rf.com/450wm/fizkes/fizkes2010/fizkes201001384/157765614-profile-picture-of-smiling-indian-female-isolated-on-grey-studio-background-show-optimism-and-positi.jpg?ver=6"
  return (
    <View style={styles.container}>
      <ScrollView style={styles.box}>
        <View >
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
              <Image style={{height: 120, width: 140}} source={{uri:image}}/>
              <View>
                  <Text>sss</Text>
                  <Text>sss</Text>
                  <Text>sss</Text>
                  <Text>sss</Text>
              </View>
          </View>
          <View>
              <Text>Invoice: {"31"}</Text>
              <Text>Invoice Date: {"2022-05-08"}</Text>
              <Text>Due Date: {"Thursday, December 1th, 15"}</Text>
              <Text>Status: <View style={{backgroundColor:"red", borderRadius:50, alignContent:"center",  marginTop:50, paddingLeft:5, paddingRight:5,}}><Text>Pending</Text></View></Text>
              <Text>Invoice To</Text>
              <Text>Pantha Acharjee</Text>
              <Text>UK</Text>
              <Text>Dhaka</Text>
              <Text>US</Text>
          </View>
          <ScrollView  horizontal={true}>
            <View  style={styles.table}>
              <View style={styles.table_head}>
                <View style={styles.col}><Text>Description</Text></View>
                <View style={styles.col_same}><Text>Qty</Text></View>
                <View style={styles.col}><Text>Total</Text></View>
              </View> 
              {
                InvoiceData.map((val, ind)=>{
                  return <InvoiceTable val={val} key={ind}/>
                })
              }
              <View style={styles.table_row}>
                <View style={styles.col_half}><Text style={{textAlign:"right"}}>Sub Total</Text></View>
                <View style={styles.col}><Text>13680</Text></View>
              </View>
              <View style={styles.table_row}>
                <View style={styles.col_half}><Text style={{textAlign:"right"}}>20% VAT</Text></View>
                <View style={styles.col}><Text>$45.00USD</Text></View>
              </View>
              <View style={styles.table_row}>
                <View style={styles.col_half}><Text style={{textAlign:"right"}}>Credit</Text></View>
                <View style={styles.col}><Text>$0.00USD</Text></View>
              </View>
              <View style={styles.table_row}>
                <View style={styles.col_half}><Text style={{textAlign:"right"}}>Total</Text></View>
                <View style={styles.col}><Text>13680</Text></View>
              </View>
            </View>
          </ScrollView>
          </View>
        </ScrollView>
    </View>
  )
}

export default Invoice

const styles = StyleSheet.create({
  container:{
    paddingLeft: 20,
    paddingRight:15,
    paddingTop: 15,
    // flex:1,
    paddingBottom: 20
  },
  box:{
    backgroundColor:"#fff",
    paddingLeft: 10,
    paddingRight:10,
    paddingTop :20,
    paddingBottom:20,
    height: 650,
    marginTop:20
  },
  heading:{
    fontSize : 20,
    fontFamily:"Roboto",
    fontWeight:"500",
    fontStyle :"normal"
  },
  table:{
      paddingBottom: 40,
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
  col_half:{
    width:350,
    paddingTop: 8,
    paddingBottom:8,
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
      borderWidth:2,
      borderColor:"blue",
      height:30,
      width:60,
      alignItems: "center",
      justifyContent:'center',
  },
  pagination:{
    padding :10,
    borderWidth: 0.5,
    borderColor: "#000"
  },
  pagination_page:{
    padding :10,
    borderWidth: 0.5,
    borderColor: "#000",
    backgroundColor: "#009dff",
  }
})