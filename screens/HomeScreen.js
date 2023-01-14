import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
//import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {

  const navigation = useNavigation();

  return (
    <View>
      <Text
        style={{
            fontSize: 20,
            textAlign: "center",
            marginTop: "20%"
        }}  
      >PROYECTO DE APLICACIONES MOVILES</Text>

<TouchableOpacity
        onPress={() => navigation.navigate("Stack")}
        style={{
          backgroundColor: "#34495E",
          padding: 10,
          marginTop: "20%",
          width: "50%",
          alignSelf: "center",
          borderRadius: 10  
        }}
      >
        <Text 
          style={{
            fontSize: 15,
            textAlign: "center",
            color: "white"
          }}
         >PROPS Y HOOKS</Text> 
         
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Forms")}
        style={{
          backgroundColor: "#34495E",
          padding: 10,
          marginTop: "20%",
          width: "50%",
          alignSelf: "center",
          borderRadius: 10  
        }}
      >
        <Text 
          style={{
            fontSize: 15,
            textAlign: "center",
            color: "white"
          }}
         >FORMULARIO</Text> 
         
      </TouchableOpacity>
    </View>
  )
}