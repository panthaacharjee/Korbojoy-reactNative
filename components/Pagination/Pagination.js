import React, { useEffect, useState } from 'react'
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native'

const Pagination = ({showPerpage, onPaginationChange, total}) => {
    const [counter, setCounter] = useState(1);
    useEffect(()=>{
        const value = showPerpage * counter;
        onPaginationChange(value - showPerpage, value)
    },[counter]);
    const onButtonClick=(type)=>{
        if(type === "prev"){
            if(counter===1){
                setCounter(1)
            }else{
                setCounter(counter-1)
            }
        }else if(type ==="next"){
                if(Math.ceil(total/showPerpage)===counter){
                    setCounter(counter);
                }
                else{
                    setCounter(counter+1);
                }
        }
    }

  return (
    <View style={{flexDirection:'row', justifyContent:'center', marginTop: 20}}>
          <View style={{flexDirection:"row"}}>
              <TouchableOpacity style={styles.pagination} onPress={()=>onButtonClick("prev")} ><Text>Previous</Text></TouchableOpacity>
              <TouchableOpacity style={styles.pagination_page}><Text style={{color: "white"}}>{counter}</Text></TouchableOpacity>
              <TouchableOpacity style={styles.pagination} onPress={()=>onButtonClick("next")}><Text>Next</Text></TouchableOpacity>
          </View>
    </View>
  )
}

export default Pagination
const styles = StyleSheet.create({
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