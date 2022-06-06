import { DrawerContentScrollView } from '@react-navigation/drawer'
import React, { useState } from 'react'
import { StyleSheet, View , Image, Text,  TouchableOpacity} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomDrawerData from './CustomDrawerData';

const CustomDrawer = ({navigation}) => {
  return (

        <DrawerContentScrollView >
            <View style={{flexDirection:"row", alignItems :"center", paddingTop:30, paddingBottom: 20}}>
                <Image style={{width:80, height: 80, borderRadius: 50,  marginRight:5,  marginLeft: 5}} source={require("../../assets/images/idLogo.png")} />
                <View >
                    <Text style={styles.name}>Pantha Acharjee</Text>
                    <View style={styles.rating}><FontAwesome style={{fontSize:18, marginLeft: 5}} name='star' color="#fff"/><Text style={styles.ratingText}>4.9</Text></View>
                </View>
            </View>
            <View style={styles.sidebarMenu}>
            {/*  <TouchableOpacity style={styles.sidebarBtn}  onPress={()=>navigation.navigate("Home")}><Text style={styles.sidebarText}>Account Info</Text></TouchableOpacity> */}
                <TouchableOpacity style={styles.sidebarBtn}  onPress={()=>navigation.navigate("AccountInfo")}><Text style={styles.sidebarText}>Account Info</Text></TouchableOpacity>
                <View style={styles.menuBox}>
                    {CustomDrawerData.map((item, index)=>{
                        const [subnav, setSubnav] = useState(false);
                        return(
                            <View key={index}>
                                <TouchableOpacity style={styles.sidebarBtn} onPress={()=>setSubnav(!subnav)}><Text style={styles.sidebarText}>{item.title}</Text></TouchableOpacity>
                                <View style={ subnav ? {display : "flex", transition : 0.8} : {display:"none"}}>
                                    {subnav ?  item.subNav.map((val, ind)=>{
                                        return(
                                            <TouchableOpacity key={ind} style={styles.sidebarSubBtn}  onPress={()=>navigation.navigate(`${val.path}`)}><Text style={styles.sidebarMenuText}>{val.title}</Text></TouchableOpacity>

                                        )
                                    }):<Text></Text>}
                                </View>
                            </View>
                        
                        )
                    })}
                </View>
                <TouchableOpacity style={styles.sidebarBtn}  onPress={()=>navigation.navigate("Invoice")}><Text style={styles.sidebarText}>Invoice</Text></TouchableOpacity>
                <TouchableOpacity style={styles.sidebarBtn}  onPress={()=>navigation.navigate("Details")}><Text style={styles.sidebarText}>Details</Text></TouchableOpacity>
                <TouchableOpacity style={styles.sidebarBtn}  onPress={()=>navigation.navigate("Settings")}><Text style={styles.sidebarText}>Settings</Text></TouchableOpacity>
                <TouchableOpacity style={styles.sidebarBtn}  onPress={()=>navigation.navigate("TermsandCondition")}><Text style={styles.sidebarText}>Terms and Condtion</Text></TouchableOpacity>
                <TouchableOpacity style={styles.sidebarBtn}><Text style={styles.sidebarText}>Log Out</Text></TouchableOpacity>


            </View>
        </DrawerContentScrollView>

  )
}

export default CustomDrawer

const styles = StyleSheet.create({
    name:{
        fontSize: 18,
        fontFamily:"Roboto",
        fontWeight: "bold"
    },
    rating:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#E7AF21",
        width: 75,
        padding:5,
        borderRadius:30,
        marginTop: 5
    },
    ratingText:{
        fontSize: 16,
        fontFamily:"Roboto",
        fontWeight:"400",
        marginLeft: 5
    },
    menuBox:{
        borderBottomWidth: 0.5,
        borderTopWidth:0.5,
        borderTopColor:"rgba(0, 0, 0, 0.5)",
        borderBottomColor:"rgba(0, 0, 0, 0.5)",
    },
    sidebarBtn:{
        paddingTop:10,
        paddingBottom:5,
        paddingLeft: 20,
    },
    sidebarText:{
        fontSize:18,
        fontFamily:"Roboto",
        fontWeight:"300"
    },
    sidebarSubBtn:{
        marginLeft: 50,
        marginTop: 5,
    },
    sidebarMenuText:{
        fontSize:16,
        fontFamily:"Roboto",
        fontWeight:"300"
    }
})