import { useState, useEffect } from 'react';
import './PokemonList.css';
import PokemonCard from '../components/PokemonCard';
import { getPokemon, pokemonDetails } from '../services/pokedex.service.ts';
import type { PokemonsCardData } from '../types/types.ts';

interface PokemonListProps {
  selectedType: string | null;
  searchPokemon: string | null;
}

const PokemonList = ({ selectedType, searchPokemon }: PokemonListProps) => {
  const [pokemons, setPokemons] = useState<PokemonsCardData[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Busca por nome ou número
  useEffect(() => {
    const searchByNameOrId = async () => {
      if (!searchPokemon) return;

      setIsLoading(true);
      try {
        const details = await pokemonDetails(searchPokemon);
        const found = {
          id: details.id,
          name: details.name,
          image: details.sprites.front_default,
          type: details.types[0].type.name,
        };
        setPokemons([found]);
      } catch {
        setPokemons([]);
      }
      setIsLoading(false);
    };

    searchByNameOrId();
  }, [searchPokemon]);

  // Carregamento 20 por página
  useEffect(() => {
    const loadInitialData = async () => {
      if (searchPokemon) return; // evita carregar lista padrão durante busca

      setIsLoading(true);
      const data = await getPokemon(20, offset);
      const detailed = await Promise.all(
        data.results.map(async (pokemon) => {
          const details = await pokemonDetails(pokemon.name);
          return {
            id: details.id,
            name: details.name,
            image: details.sprites.front_default,
            type: details.types[0].type.name,
          };
        })
      );
      setPokemons(detailed);
      setIsLoading(false);
    };

    loadInitialData();
  }, [offset, searchPokemon]);

  // Filtro por tipo
  const filteredPokemons = selectedType
    ? pokemons.filter((pokemon) => pokemon.type === selectedType)
    : pokemons;

  return (
    <>
      {/* Mensagem de erro caso a busca falhe*/}
      {!isLoading && pokemons.length === 0 && searchPokemon && (
        <p className="not-found-message">Pokémon não encontrado.</p>
      )}

      {/* Exibe mensangem "Carregando" ou mostrando cards */}
      {isLoading ? (
        <h1>Carregando...</h1>
      ) : (
        <section className="section-pokemon-list">
          {filteredPokemons.map((pokemon: PokemonsCardData) => (
            <PokemonCard key={pokemon.id} {...pokemon} />
          ))}
        </section>
      )}

      {/*  Paginação (somente se não estiver buscando) */}
      {!searchPokemon && (
        <section className="pagination-section">
          <button
            className="button"
            onClick={() => setOffset(offset - 20)}
            disabled={offset === 0}
          >
            &lt;&lt;&lt; Anteriores
          </button>
          <button
            className="button"
            onClick={() => setOffset(offset + 20)}
          >
            Próximos &gt;&gt;&gt;
          </button>
        </section>
      )}
    </>
  );
};

export default PokemonList;