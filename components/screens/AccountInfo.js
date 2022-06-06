import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, SafeAreaView, TextInput, } from 'react-native'


const AccountInfo = () => {
  const [name, setName] = useState("Alice Williams");
  const [phone, setPhone] = useState("(01) 97 563 15613");
  const [email, setEmail] = useState("alicewilliams@gmail.com");
  const [nid, setNid] = useState("151");
  const [address, setAddress] = useState("1234 North Avenue Luke Lane, South Bend,151 IN 360001");
  const [districts, setDistricts] = useState("Noakhali");
  const [upazilla, setUpazila] = useState("Sadar");
  const [division, setDivision] = useState("Chittagang");
  const [cname, setCname] = useState("IT Hub");
  const [office, setOffice] = useState("Maijdee Court");


  // Checkbox 
  
 
 

  return (
    <SafeAreaView>
      <View style={styles.container}>
      <Text style={{color:"#000", textAlign:'left', fontSize:15, marginBottom: 15}}>Account Settings</Text>

    
        <ScrollView style={{height: 600,  backgroundColor:"#e2dfe6",}}>
          <View style={{paddingEnd: 5}}>
            <View style={{ alignItems:"center"}}> 
                    <Image style={{height: 80, width: 80, borderRadius:50,}} source={{uri : "https://chicagophotovideo.com/wp-content/uploads/2018/01/professional-environmental-photo-of-man-in-suit-1024x683.jpg"}}/>
                    <Text style={{fontSize:18, fontWeight:"700", marginTop:10}}>Alice Williams</Text>
                    <Text>Enthusiast</Text>
                    <View style={{flexDirection:"row"}}>
                      <View style={styles.desc}>
                        <Text style={{textAlign:"center", fontSize:20, fontWeight:"700"}}>90</Text>
                        <Text style={{textAlign:"center",}}>Post</Text>
                      </View>
                      <View style={styles.desc}>
                        <Text style={{textAlign:"center", fontSize:20, fontWeight:"700"}}>1.5K</Text>
                        <Text style={{textAlign:"center",}}>Messages</Text>
                      </View>
                      <View style={[styles.desc, {borderRightColor:"#e2dfe6"}]}>
                        <Text style={{textAlign:"center", fontSize:20, fontWeight:"700"}}>4.4K</Text>
                        <Text style={{textAlign:"center",}}>Members</Text>
                      </View>
                    </View>
                    <TouchableOpacity  style={{borderRadius:5, backgroundColor:"#92f7fc", width:250, marginLeft:15, marginTop:10, paddingTop:12, paddingBottom:12, paddingLeft:10, paddingRight:10}}>
                      <Text style={{color:"#000"}}>Upload New Avatar</Text>
                    </TouchableOpacity>
                  </View>
             <View style={styles.form}>
                <Text style={{paddingLeft:15, fontSize: 15, }}>Full Name</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setName}
                  value={name}
                />
                <Text style={{paddingLeft:15, fontSize: 15,}}>Phone Number</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setPhone}
                  value={phone}
                />
                <Text style={{paddingLeft:15, fontSize: 15,}}>Email</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setEmail}
                  value={email}
                />
                <Text style={{paddingLeft:15, fontSize: 15,}}>Nid</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setNid}
                  value={nid}
                />
                <Text style={{paddingLeft:15, fontSize: 15}}>Permanent Address</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setAddress}
                  value={address}
                />
                <Text style={{paddingLeft:15, fontSize: 15, }}>Districts</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setDistricts}
                  value={districts}
                />
                <Text style={{paddingLeft:15, fontSize: 15, }}>Full Upazila</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setUpazila}
                  value={upazilla}
                />
                <Text style={{paddingLeft:15, fontSize: 15, }}>Division</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setDivision}
                  value={division}
                />
                <Text style={{paddingLeft:15, fontSize: 15,}}>Company Name</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setCname}
                  value={cname}
                />
                <Text style={{paddingLeft:15, fontSize: 15, }}>Office Address</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setOffice}
                  value={office}
                />
                <Text>I agree to receive email notification</Text>
                <TouchableOpacity style={{borderRadius:5, borderWidth:1, borderColor:"blue", width:180, marginLeft:15, marginTop:25, paddingTop:8, paddingBottom:8, paddingLeft:10, paddingRight:10}}>
                  <Text style={{color:"#000", textAlign:"center"}}>Upload Information</Text>
                </TouchableOpacity>
             </View>
             
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default AccountInfo

const styles = StyleSheet.create({
  container:{
    paddingLeft: 20,
    paddingRight:15,
    paddingTop: 15,
    // flex:1,
    paddingBottom: 20
  },
  main_div:{
    backgroundColor:"#e2dfe6",
    maxHeight:600,
    paddingTop:25
  },
  form:{
    paddingTop:25
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:5
  },
  
  // Profile
  desc:{
    width: 90,
    alignItems:"center",
    justifyContent:"center",
    borderRightColor:"#000",
    borderRightWidth:1,
    marginTop:20
  }
})