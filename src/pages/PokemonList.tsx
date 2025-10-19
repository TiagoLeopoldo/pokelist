import { useState, useEffect } from 'react';
import './PokemonList.css';
import PokemonCard from '../components/PokemonCard';
import { getPokemon, pokemonDetails } from '../services/pokedex.service.ts';
import type { Pokemon, PokemonsCardData } from '../types/types.ts';

interface PokemonListProps {
  selectedType: string | null;
}


const PokemonList = ({ selectedType }: PokemonListProps) => {
  const [pokemons, setPokemons] = useState<PokemonsCardData[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);


  useEffect(() => {
    const loadInitialData = async () => {
      setIsLoading(true);
      const data = await getPokemon(20, offset);
      const detailed = await Promise.all(
        data.results.map(async (pokemon: Pokemon) => {
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
  }, [offset]);

  const filteredPokemons = selectedType
  ? pokemons.filter((pokemon) => pokemon.type === selectedType)
  : pokemons;

  return (
    <>
      {isLoading ? <h1>Carregando...</h1> : (
        <section className='section-pokemon-list'>
          {filteredPokemons.map((pokemon: PokemonsCardData) => (
            <PokemonCard {...pokemon} />
          ))}
        </section>
      )}
      <section className="pagination-section">
        <button className="button" onClick={() => setOffset(offset - 20)} disabled={offset === 0}>&lt;&lt;&lt; Anteriores</button>
        <button className="button" onClick={() => setOffset(offset + 20)}>Próximos &gt;&gt;&gt;</button>
      </section>
    </>
  )
}

export default PokemonList;