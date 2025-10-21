import normal from "../assets/areas/normal-area.jpg";
import fire from "../assets/areas/fire-area.jpg";
import water from "../assets/areas/water-area.jpg";
import electric from "../assets/areas/electric-area.jpg";
import grass from "../assets/areas/grass-area.jpg";
import ice from "../assets/areas/ice-area.jpg";
import fighting from "../assets/areas/fighting-area.jpg";
import poison from "../assets/areas/poison-area.jpg";
import ground from "../assets/areas/ground-area.jpg";
import flying from "../assets/areas/flying-area.jpg";
import psychic from "../assets/areas/psychic-area.jpg";
import dark from "../assets/areas/dark-area.jpg";
import fairy from "../assets/areas/fairy-area.jpg";

const typeBackgrounds: Record<string, string> = {
  normal: normal,
  fire: fire,
  water: water,
  electric: electric,
  grass: grass,
  ice: ice,
  fighting: fighting,
  poison: poison,
  ground: ground,
  flying: flying,
  psychic: psychic,
  bug: grass,
  rock: ground,
  ghost: psychic,
  dragon: flying,
  dark: dark,
  steel: ground,
  fairy: fairy,
};

export default typeBackgrounds;
