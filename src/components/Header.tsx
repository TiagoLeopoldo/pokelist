import pokeball from '../assets/pkball.svg';
import logo from '../assets/pkm-logo.svg';
import './Header.css';

// Componente de cabeçalho que exibe o logo da Pokédex
const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img className="pkmball" src={pokeball} alt="Pokeball image" />
        <img className="pkm" src={logo} alt="Pokémon logo" />
        <img className="pkmball" src={pokeball} alt="Pokeball image" />
      </div>
    </header>
  );
};

export default Header;