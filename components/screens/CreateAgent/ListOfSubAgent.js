import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import {ListOfSubAgentData} from "../AllPageData"
import Pagination from '../../Pagination/Pagination'
import Table from '../../Table/Table';




const ListOfSubAgent = () => {
  // Pagination
  const [showPerpage] = useState(5)
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerpage
  })
  const onPaginationChange =( start, end)=>{
    setPagination({start:start, end:end})
  }
 

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>List of Sub Agent</Text>
      <ScrollView style={styles.box}>
        <ScrollView  horizontal={true}>
          <View  style={styles.table}>
            <View style={styles.table_head}>
                <View style={styles.col_same}><Text>Serial</Text></View>
                <View style={styles.col}><Text>Picture</Text></View>
                <View style={styles.col}><Text>Name</Text></View>
                <View style={styles.col_same}><Text>Number</Text></View>
                <View style={styles.col}><Text>Email</Text></View>
                <View style={styles.col}><Text>Details</Text></View>
                <View style={styles.col}><Text>Date</Text></View>
                <View style={styles.col_same}><Text>Active/Inactive</Text></View>
                <View style={styles.col_same}><Text>Edit</Text></View>
                <View style={styles.col_same}><Text>Delete</Text></View>
            </View> 
            {
              ListOfSubAgentData.slice(pagination.start, pagination.end).map((val,  ind)=>{
                return(
                    <Table val={val} ind={ind}/>
                )
            })
            } 
          </View>
        </ScrollView>
      </ScrollView>
      <Pagination showPerpage={showPerpage} onPaginationChange={onPaginationChange} total={ListOfSubAgentData.length}/>
    </View>
  )
}

export default ListOfSubAgent

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
    height: 550,
    marginTop:20
  },
  heading:{
    fontSize : 20,
    fontFamily:"Roboto",
    fontWeight:"500",
    fontStyle :"normal"
  },
  table:{paddingBottom: 40},
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
     // width: 150,

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