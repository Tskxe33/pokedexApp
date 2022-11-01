import axios from 'axios';
import {ENV_URL} from '@env';
import {PokemonClient} from 'pokenode-ts';

class PokemonService {
  getPokemons = async (offset?: number) => {
    const response = await axios.get(`pokemon?limit=5&offset=${offset}`, {
      baseURL: ENV_URL,
    });

    return response.data;
  };

  updatePokemons = async (url: string) => {
    const response = await axios.get(url);

    return response.data;
  };

  getPokemonDetails = async (pokemonName: string) => {
    const api = new PokemonClient();

    const response = await api.getPokemonByName(pokemonName);
    return response;
  };
}

export default new PokemonService();
