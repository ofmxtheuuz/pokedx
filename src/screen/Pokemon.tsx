import {useState, useEffect} from "react"
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native"
import api from "../api";
import types from "../types";

export default function Pokemon({navigation, route}: any) {
  
  try {
    function newImage() {
      if(image >= 2) {
        setImage(0)
      } else {
        setImage(image + 1)
      }
    }
    const [pokemon, setPokemon]: any = useState();
    const [image, setImage]: any = useState(0);
    useEffect(() => {
      api.getOne(route.params.name).then(setPokemon)
    },[])
    const name: string = pokemon.name
    const type: string = pokemon.types[0].type.name

    const images: string[] = [
      pokemon.sprites.other.home.front_default,
      pokemon.sprites.front_default,
      pokemon["sprites"]["other"]["official-artwork"]["front_default"]
    ]

    const color: string = types[type]
    const weight: string = pokemon.weight
    const height: string = pokemon.height
    return <View style={s.view}>
      <TouchableOpacity onPress={newImage}>
        <Image style={{width: 300, height: 300}} source={{uri: images[image]}} />
      </TouchableOpacity>
      <Text style={[s.text, {color}]}>{name[0].toUpperCase() + name.substring(1)}</Text>
    </View>
  } catch(e) {
    console.log("Error: " + e)
    return <Text></Text>
  }

}

const s = StyleSheet.create({
  view: {
    display: "flex",
    alignItems: "center"
  },
  text: {
    marginTop: 35,
    fontSize: 17,
    fontWeight: "bold"
  }
})