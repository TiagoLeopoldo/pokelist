import { useState, useEffect } from 'react';
import logo from '../assets/pkm-logo.svg';
import pokeball from '../assets/pkball.svg';
import './Header.css';
import { getAllTypes } from '../services/pokedex.service.ts';
import type { PokemonType } from '../types/types.ts';

interface HeaderProps {
  onSelectType: (type: string | null) => void;
  onSearch: (term: string) => void;
}

const Header = ({ onSelectType, onSearch }: HeaderProps) => {
  const [types, setTypes] = useState<PokemonType[]>([]);
  const [searchPokemon, setSearchPokemon] = useState<string>('');

  useEffect(() => {
    const loadTypes = async () => {
      const typeList = await getAllTypes();
      setTypes(typeList);
    };
    loadTypes();
  }, []);


  return (
    <header>

      <div className="logo-container">
        <img className="pkmball" src={pokeball} alt="Pokeball image" />
        <img className="pkm" src={logo} alt="Pokémon logo" />
        <img className="pkmball" src={pokeball} alt="Pokeball image" />
      </div>

      <section className="search-filter-section">
        <p>Buscar Pokémon | Selecionar por tipo:</p>

        <div className="search-container">
          <input className="input-search" type="text" value={searchPokemon} onChange={(e) => setSearchPokemon(e.target.value)} placeholder="ex.: 25 ou Pikachu"/>
          <button className="search-button" onClick={() => onSearch(searchPokemon.trim().toLowerCase())}>Buscar</button>
        </div>

        <ul className="buttons-list">
          <li>
            <button onClick={() => onSelectType(null)} className="filter-button">Todos</button>
          </li>
          {types.map((type) => (
            <li key={type.name} >
              <button onClick={() => onSelectType(type.name)} className="filter-button">{type.name.charAt(0).toUpperCase() + type.name.slice(1)}</button>
            </li>
          ))}

        </ul>


      </section>

    </header>
  )
}

export default Header;