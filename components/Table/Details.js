import React, { useState } from 'react'
import {  View, StyleSheet, Text, ScrollView} from 'react-native'





const Details = () => {


  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={{height:40, borderBottomWidth:1, borderBottomColor:"#000"}}>
          <Text style={{marginLeft:20, fontWeight:"bold"}}>Vendor Details</Text>  
        </View>
        <ScrollView  horizontal={true}>
          <View  style={styles.table}>
            <View style={styles.table_head}>
              <View style={styles.col}><Text>Permanent Address</Text></View>
              <View style={styles.col_same}><Text>Dhaka</Text></View>
            </View> 
            <View style={styles.table_head}>
              <View style={styles.col}><Text>Permanent Address</Text></View>
              <View style={styles.col_same}><Text>Noakhali</Text></View>
            </View> 
            <View style={styles.table_head}>
              <View style={styles.col}><Text>Present Address</Text></View>
              <View style={styles.col_same}><Text>Dhaka</Text></View>
            </View> 
            <View style={styles.table_head}>
              <View style={styles.col}><Text>Division</Text></View>
              <View style={styles.col_same}><Text>Chittagang</Text></View>
            </View> 
            <View style={styles.table_head}>
              <View style={styles.col}><Text>District</Text></View>
              <View style={styles.col_same}><Text>Noakhali</Text></View>
            </View> 
            <View style={styles.table_head}>
              <View style={styles.col}><Text>Upazila</Text></View>
              <View style={styles.col_same}><Text>Sadar</Text></View>
            </View> 
            <View style={styles.table_head}>
              <View style={styles.col}><Text>Company Name</Text></View>
              <View style={styles.col_same}><Text>Something</Text></View>
            </View> 
            <View style={styles.table_head}>
              <View style={styles.col}><Text>Office Address</Text></View>
              <View style={styles.col_same}><Text>Something</Text></View>
            </View> 
            <View style={styles.table_head}>
              <View style={styles.col}><Text>Commision</Text></View>
              <View style={styles.col_same}><Text>2</Text></View>
            </View> 
            <View style={styles.table_head}>
              <View style={styles.col}><Text>NID Number</Text></View>
              <View style={styles.col_same}><Text>222</Text></View>
            </View> 
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default Details

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
    paddingTop :20,
    paddingBottom:20,
    height: 500,
    marginTop:20
  },
  table:{
    paddingBottom: 40,
    paddingLeft: 10,
    paddingRight:10,
    marginTop:20
    },
  table_head:{
    flexDirection:"row"
  },
  table_row:{
      flexDirection:"row",
      height:80
  },
  col:{
      width: 350,
      paddingTop: 8,
      paddingBottom:8,
      borderWidth:1,
      borderColor:"#000",
      alignItems:'center',
      justifyContent:"center",

  },
  col_same:{
      width: 190,
      borderWidth:1,
      borderColor:"#000",
      alignItems:'center',
      justifyContent:"center",

  },
})