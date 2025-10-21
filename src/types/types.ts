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
  sprites: {
    front_default: string;
    other?: {
      ['official-artwork']?: {
        front_default: string;
      };
    };
  };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  stats: {
    base_stat: number;
    effort: number;
    stat: {
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

export interface PokemonType {
  name: string;
  url: string;
}

export interface PokemonTypeResponse {
  results: PokemonType[];
}

export interface PokemonByTypeEntry {
  pokemon: {
    name: string;
    url: string;
  };
  slot: number;
}

export interface PokemonByTypeResponse {
  pokemon: PokemonByTypeEntry[];
}