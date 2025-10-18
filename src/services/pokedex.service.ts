import axios from 'axios';
import type { PokemonResponse, PokemonDetails } from '../types/types.ts';

export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export const getPokemon = async (limit: number, offset: number) => {
  const response = await api.get<PokemonResponse>(`/pokemon?limit=${limit}&offset=${offset}`);
  return response.data;
};

export const pokemonDetails = async (name: string) => {
  const response = await api.get<PokemonDetails>(`/pokemon/${name}`);
  return response.data;
};



