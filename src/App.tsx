import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PokemonList from './pages/PokemonList';
import PokemonDetailsPage from './pages/PokemonDetailsPage';
import { useState } from 'react';
import './App.css';

function App() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [searchPokemon, setSearchPokemon] = useState<string | null>(null);

  return (
    <Router>
      <Header onSelectType={setSelectedType} onSearch={setSearchPokemon} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <PokemonList
                selectedType={selectedType}
                searchPokemon={searchPokemon}
              />
            }
          />
          <Route path="/pokemon/:name" element={<PokemonDetailsPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;