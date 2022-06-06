import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import RadioGroup from 'react-native-radio-buttons-group';
import { ProductData } from '../AllPageData';
import SinglePrduct from './SingleProduct';

const ListOfSubAgentRequest = () => {
 
  // Radio Button
  const radioButtonsData = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Free Shipping',
    value: 'option1',
    
  },
  {
    id: '2', // acts as primary key, should be unique and non-empty string
    label: 'Local Pickup :',
    value: 'option2',
  },
  {
    id: '3', // acts as primary key, should be unique and non-empty string
    label: 'Flate Rate: $5',
    value: 'option3',
  }
]
  const [radioButtons, setRadioButtons] = useState(radioButtonsData)
    function onPressRadioButton(prop) {
        setRadioButtons(prop);
  }

  // Text Input
  const [search, setSearch] = useState("Search/Product Item");

  return (
    <View style={styles.container}>
     <ScrollView style={{height:600}}>
     <View style={styles.cartBox}>
        <Text style={{fontSize:15, fontWeight:"700", color:"#535454"}}>Product Price Quantity Subtotal</Text>
        <TouchableOpacity style={{backgroundColor:"#13171f", padding:10, width:200,marginTop:5}}><Text style={{color:"#fff", textAlign:"center"}}>Continue Shopping</Text></TouchableOpacity>
        <Text style={{fontSize:22, fontWeight:"700"}}>CART TOTALS</Text>
        <View style={{flexDirection:"row", justifyContent:"space-between",paddingRight:15}}>
          <Text>Subtotal</Text>
          <Text>0.00</Text>
        </View>
        <View style={styles.shippingBox}>
          <Text>Shipping</Text>
          <RadioGroup 
                style={{backgroundColor:"#000"}}
                radioButtons={radioButtons} 
                onPress={onPressRadioButton} 
          />
        </View>
        <View style={{flexDirection:"row", justifyContent:"space-between", paddingRight:15}}>
          <Text>Total</Text>
          <Text>0.00</Text>
        </View>
        <TouchableOpacity style={{backgroundColor:"#13171f", padding:10, width:270,marginTop:25}}><Text style={{color:"#fff", textAlign:"center"}}>Proceed to Checkout</Text></TouchableOpacity>
      </View>
      <View style={styles.productBox}>
        <TextInput
          style={styles.input}
          onChangeText={setSearch}
          value={search}
        />
        {
          ProductData.map((val, ind)=>{
            return <SinglePrduct val={val} ind={ind}/>
          })
        }
      </View>
     </ScrollView>
    </View>
  )
}

export default ListOfSubAgentRequest

const styles = StyleSheet.create({
  container:{
    paddingLeft: 20,
    paddingRight:15,
    paddingTop: 15,
    flex:1,
    paddingBottom: 20
  },
  box:{
    // flex:1,
    backgroundColor:"#fff",
    paddingLeft: 10,
    paddingRight:10,
    paddingTop :20,
    paddingBottom:20,
    height: 450,
    marginTop:20
  },
  cartBox:{
    backgroundColor:"#dcdedd",
    paddingLeft:15,
    paddingTop:20,
    paddingBottom:20
  },
  shippingBox:{
    alignItems:"flex-start",
    borderBottomColor:"#bfbfbf",
    borderBottomWidth:1,
    borderTopColor:"#bfbfbf",
    borderTopWidth:1,
    marginTop:20,
    marginBottom:20
  },
  productBox:{
    backgroundColor:"#8f8f8f",
    paddingLeft:15,
    paddingTop:20,
    paddingBottom:20
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:5
  },
})