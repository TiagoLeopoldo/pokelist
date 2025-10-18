import './PokemonCard.css';

const PokemonCard = () => {
  return (
    <section className="pokemon-card">
      <div className="pokemon-number-container"><p>#001</p></div>
      <div className="pokemon-img-container"><p>imagem</p></div>
      <div className="pokemon-name-container"><p>Bulbassaur</p></div>
    </section>
  )
}

export default PokemonCard;