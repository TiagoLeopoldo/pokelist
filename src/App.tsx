import { useState } from 'react';
import Header from './components/Header';
import PokemonList from './pages/PokemonList';
import './App.css';

function App() {
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [searchPokemon, setSearchPokemon] = useState<string | null>(null);

  return (
    <>
      <Header onSelectType={setSelectedType} onSearch={setSearchPokemon}/>
      <main>
        <PokemonList selectedType={selectedType} searchPokemon={searchPokemon} />
      </main>
    </>
  )
}

export default App
