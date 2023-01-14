import React, { useState, useEffect } from "react";
import { Text, View, Image, StyleSheet, Button } from "react-native";
import blackImage from '../assets/multimedia/blackImage.jpg';
import colorImage from '../assets/multimedia/colorImage.jpg';

export default function App() {

  const [nombre, setNombre] = useState("Hola soy Darwin");
  const [imagen, setImagen] = useState(blackImage);
  const [count, setCount] = useState(0);

  useEffect(() => {
    { console.log('función setCount llamada ${count} veces') }
  }, [count]);

  return (

    <View style={am_styles.am_container} >

      <Welcome name="Darwin Fraga" />
      <Text>{"\n"}</Text > 
      <Image style={am_styles.am_image} source={imagen} />
      <Button title="PINTAR IMAGEN"  color="#34495E" onPress={(e) => cambiarImagen(colorImage)} > </Button>
      <Text>{"\n"}</Text > 
      <Text style={am_styles.am_text}> {nombre}</Text>
      <Button title="CAMBIAR NOMBRE"  color="#34495E" o onPress={(e) => cambiarNombre("... ahora soy Luis")} > </Button>
      <Text></Text>
      <Text style={am_styles.am_text}>Has presionado {count} veces</Text>
      <Button title="PRESIONE PARA CONTAR"  color="#34495E" o onPress={() => setCount(count + 1)}></Button>
    </View>


  )

  function cambiarNombre(nuevoNombre) {
    // {console.log("función cambiarNombre")}
    setNombre(nuevoNombre);
  }

  function cambiarImagen(nuevaImagen) {
    // { console.log("función cambiarImagen") }
    setImagen(nuevaImagen);
  }

}


function Welcome(props) {
  return (
    <View>
      <Text style={am_styles.am_text} >Hola mi nombre es: {props.name}</Text>
    </View>
  );
}


const am_styles = StyleSheet.create({
  am_container: {
    flex: 1,
    padding: 30,
    backgroundColor: "white"
  },
  am_title: {
    textAlign: "center",
    fontSize: 20,
    color: "black"
  },
  am_image: {
    width: 100,
    height: 100,
    alignSelf: "center"
  },
  am_text: {
    color: "black",
    backgroundColor: "white",
    fontSize: 20,
    alignSelf: "center"
  },

})