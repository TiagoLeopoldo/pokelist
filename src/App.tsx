import { useState } from 'react';
import Header from './components/Header';
import PokemonList from './pages/PokemonList';
import './App.css';

function App() {
  const [selectedType, setSelectedType] = useState<string | null>(null)
  return (
    <>
      <Header onSelectType={setSelectedType} />
      <main>
        <PokemonList selectedType={selectedType} />
      </main>
    </>
  )
}

export default App
