import logo from '../assets/pkm-logo.svg';
import pokeball from '../assets/pkball.svg';
import './Header.css';

const Header = () => {
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
          <input className="input-search" type="text" />
          <button className="search-button">Buscar</button>
        </div>

        <ul className="buttons-list">
            <li><button className="filter-button">tipo</button></li>
            <li><button className="filter-button">tipo</button></li>
            <li><button className="filter-button">tipo</button></li>
            <li><button className="filter-button">tipo</button></li>
            <li><button className="filter-button">tipo</button></li>
            <li><button className="filter-button">tipo</button></li>
            <li><button className="filter-button">tipo</button></li>
            <li><button className="filter-button">tipo</button></li>
            <li><button className="filter-button">tipo</button></li>
            <li><button className="filter-button">tipo</button></li>
            <li><button className="filter-button">tipo</button></li>
            <li><button className="filter-button">tipo</button></li>
            <li><button className="filter-button">tipo</button></li>
            <li><button className="filter-button">tipo</button></li>
        </ul>

      </section>

    </header>
  )
}

export default Header;