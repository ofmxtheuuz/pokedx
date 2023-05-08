import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import api from "../api";
import Pokemon from "../components/Pokemon";

export default function Home({navigation}: any) {
  const [pokemons, setPokemons] = useState([])
  useEffect(() => {
    api.getAll().then(setPokemons)
  },[])
  return (
    <ScrollView>
      <View style={s.pokemons}>
        {pokemons.map((e: any) => (
          <TouchableOpacity onPress={() => navigation.push("Pokemon", {name: e.name})}>
            <Pokemon pokemon={e} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  )
}

const s = StyleSheet.create({
  pokemons: {
    display: "flex",
    flexDirection: "column",
    gap: 30,
    alignItems: "center",
    marginTop: 30
  }
})