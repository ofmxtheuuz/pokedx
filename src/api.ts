import axios from "axios";


class PokeAPI {
  private readonly BASE_URL: string = "https://pokeapi.co/api/v2/pokemon"
  public POKEMONS_LIMIT: number = 30

  async getAll() {
    return ((await axios(this.BASE_URL + "?limit=" + this.POKEMONS_LIMIT)).data).results
  }

  async getOne(name: string) {
    return (await axios(this.BASE_URL + `/${name}`)).data
  }
}

export default new PokeAPI()