import {View, Text, StyleSheet, Image} from "react-native"
import { useState, useEffect } from "react";

import api from "../api";
import types from "../types";

export default function Pokemon({pokemon}: any) {

  const [pokemonState, setPokemon]: any = useState({})
  useEffect(() => {
    api.getOne(pokemon.name).then(setPokemon)
  },[])

  const type: string = pokemonState?.types[0]?.type?.name
  const image: string = pokemonState?.sprites?.other?.home?.front_default
  const color: string = types[type]
  
  return <View style={[s.box, {borderColor: color}]}>
    <Image style={s.image} source={{ uri:image }} />
    <Text style={[s.text, {color}]}>
      {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
    </Text>
  </View>
}

const s = StyleSheet.create({
  box: {
    borderWidth: 2,
    borderRadius: 6,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
  text: {
    marginBottom: 15,
    fontWeight: "bold",
    fontSize: 17
  },
  image: {
    width: 200, height: 200
  }
})