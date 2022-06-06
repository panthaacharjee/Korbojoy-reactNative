import React from 'react'
import { Text,View, Image, StyleSheet, TouchableOpacity } from 'react-native'

const SinglePrduct  = ({val, ind}) => {
  return (
    <View key={ind} style={styles.product}>
        <View style={{alignItems:"center"}}>
            <Image style={{height:150, width:250,}} source={{uri:`${val.img}`}}/>
        </View>
        <View style={{paddingBottom:20, borderBottomColor:"#bfbfbf", borderBottomWidth:1}}>
            <Text style={{fontSize:17, fontWeight:"700", letterSpacing:0.5, marginLeft:10}}>{val.title}</Text>
            <Text style={{fontSize:14, letterSpacing:0.5, marginLeft:10, marginTop: 5}}>{val.desc}</Text>
        </View>
        <TouchableOpacity style={{backgroundColor:"#bbfce5", padding:10, width:150,marginTop:25, marginLeft:15, borderRadius:50}}><Text style={{color:"#026921", textAlign:"center", fontSize:12, fontWeight:"bold"}}>Add To Cart</Text></TouchableOpacity>
    </View>
  )
}

export default SinglePrduct
const styles = StyleSheet.create({
    product:{
        backgroundColor:"#fff",
        marginRight:15,
        paddingTop:10,
        paddingBottom:10,
        marginBottom:30
    }
})