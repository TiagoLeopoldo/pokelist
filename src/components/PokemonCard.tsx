import './PokemonCard.css';
import type { PokemonsCardData } from '../types/types.ts';

const PokemonCard = ({ id, name, image, type }: PokemonsCardData) => {


  const typeColors: Record<string, string> = {
    normal: 'radial-gradient(circle at center, #B5B9C4, #8C8C8C)',
    fire: 'radial-gradient(circle at center, #FF6B00, #FF0000)',
    water: 'radial-gradient(circle at center, #00BFFF, #1E90FF)',
    electric: 'radial-gradient(circle at center, #FFF700, #FFD700)',
    grass: 'radial-gradient(circle at center, #3cdf3cff, #107010ff)',
    ice: 'radial-gradient(circle at center, #A0F0F0, #70D6FF)',
    fighting: 'radial-gradient(circle at center, #D32F2F, #8B0000)',
    poison: 'radial-gradient(circle at center, #AB47BC, #6A1B9A)',
    ground: 'radial-gradient(circle at center, #D2B48C, #A0522D)',
    flying: 'radial-gradient(circle at center, #87CEFA, #6A5ACD)',
    psychic: 'radial-gradient(circle at center, #FF69B4, #C71585)',
    bug: 'radial-gradient(circle at center, #c0e27dff, #64744aff)',
    rock: 'radial-gradient(circle at center, #C2B280, #8B7D6B)',
    ghost: 'radial-gradient(circle at center, #7B68EE, #4B0082)',
    dragon: 'radial-gradient(circle at center, #6F35FC, #1A1AFF)',
    dark: 'radial-gradient(circle at center, #5A5A5A, #2F2F2F)',
    steel: 'radial-gradient(circle at center, #B0C4DE, #708090)',
    fairy: 'radial-gradient(circle at center, #FFB6C1, #FF69B4)',

  };

  return (
    <section className="pokemon-card" style={{ backgroundImage: typeColors[type] || 'radial-gradient(circle at center, #eee, #ccc)' }}>
      <div className="pokemon-number-container"><p>#{String(id).padStart(3, '0')}</p></div>
      <div className="pokemon-img-container"><img src={image} alt={name} /></div>
      <div className="pokemon-name-container"><h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3></div>
    </section>
  )
}

export default PokemonCard;