import { StyleSheet, View, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { useState, useEffect } from "react";
import api from "../api";
import PokemonMinified from "../components/PokemonMinified";

export default function Home({navigation}: any) {
  const [pokemons, setPokemons]: any = useState([])
  const search = (text: string) => {
    if (text === '') {
      api.getAll().then(setPokemons);
    } else {
      const filteredPokemons = pokemons.filter((pokemon: any) => pokemon.name.includes(text));
      setPokemons(filteredPokemons);
    }
  };

  useEffect(() => {
    api.getAll().then(setPokemons)
  },[])

  return (
    <ScrollView>
      <TextInput onChangeText={search} style={s.input} placeholder="Pesquisar"/>
      <View style={s.pokemons}>
        {pokemons.map((e: any, index: number) => (
          <TouchableOpacity key={index} onPress={() => navigation.push("Pokemon", {name: e.name})}>
            <PokemonMinified pokemon={e} id={index + 1} />
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
  },
  input: {
    borderWidth: 1,
    marginHorizontal: 32,
    marginTop: 15,
    padding: 3,
    borderRadius: 3,
    borderColor: "#0000ff",
    paddingLeft: 10
  }
})