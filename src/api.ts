import axios from "axios";


class PokeAPI {

  private readonly BASE_URL: string = "https://pokeapi.co/api/v2/pokemon"

  async getAll() {
    return ((await axios(this.BASE_URL + "?limit=30")).data).results
  }

  async getOne(name: string) {
    return (await axios(this.BASE_URL + `/${name}`)).data
  }
}

export default new PokeAPI()