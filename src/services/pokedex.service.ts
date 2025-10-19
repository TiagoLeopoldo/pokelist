import axios from "axios";
import type {
  PokemonResponse,
  PokemonDetails,
  PokemonTypeResponse,
  PokemonType,
  PokemonByTypeResponse,
  Pokemon,
} from "../types/types.ts";

export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export const getPokemon = async (limit: number, offset: number) => {
  const response = await api.get<PokemonResponse>(
    `/pokemon?limit=${limit}&offset=${offset}`
  );
  return response.data;
};

export const pokemonDetails = async (name: string) => {
  const response = await api.get<PokemonDetails>(`/pokemon/${name}`);
  return response.data;
};

export const getAllTypes = async (): Promise<PokemonType[]> => {
  const response = await api.get<PokemonTypeResponse>("/type");
  return response.data.results;
};

export const getPokemonByType = async (typeName: string): Promise<Pokemon[]> => {
  const response = await api.get<PokemonByTypeResponse>(`/type/${typeName}`);
  return response.data.pokemon.map((p) => p.pokemon);
};
