import { useState, useEffect } from 'react';
import './PokemonList.css';
import PokemonCard from '../components/PokemonCard';
import {
  getPokemon,
  pokemonDetails,
  getAllTypes,
} from '../services/pokedex.service.ts';
import type { PokemonsCardData, PokemonType } from '../types/types.ts';

const PokemonList = () => {
  // Estado para armazenar os Pokémon exibidos
  const [pokemons, setPokemons] = useState<PokemonsCardData[]>([]);
  // Offset para controle de paginação
  const [offset, setOffset] = useState<number>(0);
  // Estado de carregamento
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // Termo de busca digitado pelo usuário
  const [searchTerm, setSearchTerm] = useState('');
  // Lista de tipos disponíveis
  const [types, setTypes] = useState<PokemonType[]>([]);
  // Tipo selecionado para filtro
  const [selectedType, setSelectedType] = useState<string | null>(null);

  // Carrega os tipos de Pokémon para os botões de filtro
  useEffect(() => {
    const loadTypes = async () => {
      const typeList = await getAllTypes();
      setTypes(typeList);
    };
    loadTypes();
  }, []);

  // Busca dinâmica por número ou prefixo de nome
  useEffect(() => {
    const searchByPrefix = async () => {
      if (!searchTerm) return;

      setIsLoading(true);

      const isNumeric = /^\d+$/.test(searchTerm);
      if (isNumeric) {
        try {
          const details = await pokemonDetails(searchTerm);
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
        return;
      }

      const data = await getPokemon(200, 0);
      const filtered = data.results.filter((pokemon) =>
        pokemon.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      );

      const detailed = await Promise.all(
        filtered.map(async (pokemon) => {
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

    const delayDebounce = setTimeout(() => {
      searchByPrefix();
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  // Carrega os Pokémon da página atual (sem busca ativa)
  useEffect(() => {
    const loadInitialData = async () => {
      if (searchTerm) return;

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
  }, [offset, searchTerm]);

  // Aplica filtro por tipo se selecionado
  const filteredPokemons = selectedType
    ? pokemons.filter((pokemon) => pokemon.type === selectedType)
    : pokemons;

  return (
    <>
      {/* Seção de busca e filtro */}
      <section className="search-filter-section">
        <p>Buscar Pokémon | Selecionar por tipo:</p>

        <div className="search-container">
          <input
            className="input-search"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="ex.: 25 ou Pikachu"
          />
        </div>

        <ul className="buttons-list">
          <li>
            <button
              onClick={() => setSelectedType(null)}
              className="filter-button"
            >
              Todos
            </button>
          </li>
          {types.map((type) => (
            <li key={type.name}>
              <button
                onClick={() => setSelectedType(type.name)}
                className="filter-button"
              >
                {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Mensagem de erro se nenhum Pokémon for encontrado */}
      {!isLoading && pokemons.length === 0 && searchTerm && (
        <p className="not-found-message">Pokémon não encontrado.</p>
      )}

      {/* Lista de Pokémon ou indicador de carregamento */}
      {isLoading ? (
        <h1>Carregando...</h1>
      ) : (
        <section className="section-pokemon-list">
          {filteredPokemons.map((pokemon: PokemonsCardData) => (
            <PokemonCard
              key={pokemon.id}
              {...pokemon}
              onClick={() => sessionStorage.setItem('lastOffset', String(offset))}
            />
          ))}
        </section>
      )}

      {/* Paginação visível apenas sem busca ativa */}
      {!searchTerm && (
        <section className="pagination-section">
          <button
            className="button"
            onClick={() => setOffset(offset - 20)}
            disabled={offset === 0}
          >
            &lt;&lt;&lt; Anteriores
          </button>
          <button className="button" onClick={() => setOffset(offset + 20)}>
            Próximos &gt;&gt;&gt;
          </button>
        </section>
      )}
    </>
  );
};

export default PokemonList;