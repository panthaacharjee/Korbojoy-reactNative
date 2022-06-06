import React, {useState} from 'react'
import {Text, View} from 'react-native'
import RadioGroup from 'react-native-radio-buttons-group';



const RadioButton = () => {
    // Radio Button
  const radioButtonsData = [{
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'ON',
    value: 'option1',
}, {
    id: '2',
    label: 'OFF',
    value: 'option2'
}]
const [radioButtons, setRadioButtons] = useState(radioButtonsData)
    function onPressRadioButton(prop) {
        setRadioButtons(prop);
    }
  return (
    <View>
        <RadioGroup 
            radioButtons={radioButtons} 
            onPress={onPressRadioButton} 
        />
    </View>
  )
}

export default RadioButton