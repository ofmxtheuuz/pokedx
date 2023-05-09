import {View, Text, StyleSheet, Image} from "react-native"
import { useState, useEffect } from "react";

import api from "../api";
import types from "../types";

export default function PokemonMinified({pokemon}: any) {

  try {
    
    const [pokemonInformations, setPokemon]: any = useState({})
    useEffect(() => {
      api.getOne(pokemon.name).then(setPokemon)
    },[])

    const name: string = pokemonInformations.name
    const type: string = pokemonInformations.types[0].type.name
    const image: string = pokemonInformations.sprites.other.home.front_default
    const color: string = types[type]
    const weight: string = pokemonInformations.weight
    const height: string = pokemonInformations.height
    return (
      <View style={[s.box, {borderColor: color}]}>
        <Image style={s.image} source={{ uri:image }} />
        <Text style={[s.text, {color}]}>
          {name[0].toUpperCase() + name.substring(1)}
        </Text>
        <View style={s.abilities}>
          <Text style={[{color}]}>Weight: {weight}kg</Text>
          <Text style={[{color}]}>Height: {height}cm</Text>
        </View>
      </View>
    )
    
  } catch(e) {
    console.log("Error: " + e)
    return <Text></Text>
  }
  

}

const s = StyleSheet.create({
  box: {
    borderWidth: 2,
    borderRadius: 6,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 45,
    paddingBottom: 15
  },
  text: {
    marginBottom: 5,
    fontWeight: "bold",
    fontSize: 17
  },
  image: {
    width: 200, height: 200
  },
  abilities: {
    display: "flex",
    flexDirection: "row",
    gap: 20
  }
})