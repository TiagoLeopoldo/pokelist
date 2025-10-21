import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PokemonList from './pages/PokemonList';
import PokemonDetailsPage from './pages/PokemonDetailsPage';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/pokemon/:name" element={<PokemonDetailsPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;