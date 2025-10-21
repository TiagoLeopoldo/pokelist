import './PokemonCard.css';
import { Link } from 'react-router-dom';
import type { PokemonsCardData } from '../types/types.ts';
import typeColors from '../constants/typeColors';

const PokemonCard = ({ id, name, image, type }: PokemonsCardData) => {


  return (
    <Link to={`/pokemon/${name}`} className="pokemon-card" style={{ backgroundImage: typeColors[type] || 'radial-gradient(circle at center, #eee, #ccc)' }}>
      <div className="pokemon-number-container"><p>#{String(id).padStart(2, '0')}</p></div>
      <div className="pokemon-img-container"><img src={image} alt={name} /></div>
      <div className="pokemon-name-container"><p>{name.charAt(0).toUpperCase() + name.slice(1)}</p></div>
    </Link>
  );
};

export default PokemonCard;