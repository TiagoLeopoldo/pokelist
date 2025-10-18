export interface PokemonResponse {
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonDetails {
  id: number;
  name: string;
  sprites: { front_default: string };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
}


export interface PokemonsCardData {
  id: number;
  image: string;
  name: string;
  type: string;
}
