import { useState, useEffect } from "react";
import Grid from './Grid';
import Thumb from './Thumb';
import HeroImage from './HeroImage';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [activeCharacter, setActiveCharacter] = useState({});

  useEffect(() => {
    const url = 'https://hp-api.herokuapp.com/api/characters';

    const fetchCharacters = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setCharacters(json);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchCharacters();
  }, []);

  const getCharacter = (e) => {
    const name = e.currentTarget.alt;
    const index = characters.findIndex(char => char.name === name);
    setActiveCharacter(characters[index])
  }

  return (
    <div>
      <HeroImage activeCharacter={activeCharacter} />
      <Grid>
        {characters.map(character => (
          <Thumb
            key={character.name}
            image={character.image}
            name={character.name}
            getCharacter={getCharacter}
          />
        ))}
      </Grid>
    </div>
  )
};

export default Home;