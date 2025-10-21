import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { pokemonDetails } from '../services/pokedex.service';
import type { PokemonDetails } from '../types/types';
import './PokemonDetailsPage.css';
import typeBackgrounds from '../constants/typeBackgrounds';

const PokemonDetailsPage = () => {
  const { name = '' } = useParams<{ name?: string }>();
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const details = await pokemonDetails(name);
        setPokemon(details);
      } catch {
        setPokemon(null);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [name]);

  if (loading) return <p>Carregando detalhes do Pokémon...</p>;
  if (!pokemon) return <h2>Pokémon não encontrado!</h2>;

  const mainType = pokemon.types[0]?.type.name;
  const backgroundType = typeBackgrounds[mainType];

  return (
    <section className="pokemon-detail">

      <Link to="/" className="back-link">← Voltar para a lista</Link>
      <div className="pokemon-identity-container"
        style={{
          backgroundImage: `url(${backgroundType})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
        <img
          src={pokemon.sprites.other?.['official-artwork']?.front_default || pokemon.sprites.front_default}
          alt={pokemon.name}
        />
      </div>

      <div className="details-section">
        <div className="details">
          <h3>Tipos</h3>
          <p>{pokemon.types.map((type: { type: { name: string } }) => type.type.name).join(', ')}</p>
        </div>
        <div className="details">
          <h3>Habilidades</h3>
          <p>{pokemon.abilities.map((a: { ability: { name: string } }) => a.ability.name).join(', ')}</p>
        </div>
        <div className="details">
          <h3>Estatísticas</h3>
          <ul>
            {pokemon.stats.map((stat: { stat: { name: string }; base_stat: number }) => (
              <li key={stat.stat.name}>
                <strong>{stat.stat.name}:</strong> {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PokemonDetailsPage;