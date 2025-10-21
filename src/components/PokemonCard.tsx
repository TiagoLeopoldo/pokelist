import './PokemonCard.css';
import { Link } from 'react-router-dom';
import type { PokemonsCardData } from '../types/types.ts';
import typeColors from '../constants/typeColors';

// Componente que renderiza o card individual de um Pokémon na lista
// Aplica cor de fundo com base no tipo do Pokémon
const PokemonCard = ({ id, name, image, type, onClick }: PokemonsCardData) => {
  return (
    <Link
      to={`/pokemon/${name}`}
      className="pokemon-card"
      style={{ backgroundImage: typeColors[type] || 'radial-gradient(circle at center, #eee, #ccc)' }}
      onClick={onClick}
    >
      <div className="pokemon-number-container">
        <p>#{String(id).padStart(2, '0')}</p> {/* Exibe o número do Pokémon com dois dígitos */}
      </div>
      <div className="pokemon-img-container">
        <img src={image} alt={name} /> {/* Imagem do Pokémon */}
      </div>
      <div className="pokemon-name-container">
        <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p> {/* Nome com primeira letra maiúscula */}
      </div>
    </Link>
  );
};

export default PokemonCard;