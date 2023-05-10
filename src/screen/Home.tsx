import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import api from "../api";
import PokemonMinified from "../components/PokemonMinified";

export default function Home({navigation}: any) {
  const [pokemons, setPokemons] = useState([])
  useEffect(() => {
    api.getAll().then(setPokemons)
  },[])

  return (
    <ScrollView>
      <View style={s.pokemons}>
        {pokemons.map((e: any) => (
          <TouchableOpacity key={e.name} onPress={() => navigation.push("Pokemon", {name: e.name})}>
            <PokemonMinified pokemon={e} />
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