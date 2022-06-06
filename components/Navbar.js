import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Navbar = ({navigation}) => {
  return (
    <View style={styles.navbar}>
        <TouchableOpacity onPress={()=>{}}>
          <FontAwesome name='bars' style={styles.bar}/>
        </TouchableOpacity>
        <View style={{flexDirection:"row", alignItems:'center', justifyContent:"center", alignContent:'center'}}>
            <Image style={styles.image_notification} source={require("../assets/images/notification.png")}/>
            <Image style={styles.image_logo} source={require("../assets/images/idLogo.png")}/>
        </View>
  </View>
  )
}

export default Navbar

const styles = StyleSheet.create({
    navbar:{
      backgroundColor : "#086266",
      height:60,
      justifyContent : "space-between",
      paddingLeft:20,
      paddingRight :20,
      flexDirection:"row",
      alignItems:"center",
    //   position:"absolute",
      width:"100%",
      zIndex: -100000
    },
    bar:{
      fontSize: 34,
      color : "#fff"
    },
    image_notification:{
      height: 38,
      width: 38,
      marginRight: 10
    },
    image_logo:{
      height: 48,
      width : 48,
      marginTop : 3
    }
  });