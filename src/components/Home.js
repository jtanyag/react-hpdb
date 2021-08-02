import { useState, useEffect } from "react";
import Grid from './Grid';
import Thumb from './Thumb';

const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const url = 'https://hp-api.herokuapp.com/api/characters';

    const fetchCharacters = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setCharacters(json);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchCharacters();
  }, [])

  return (
    <div>
      <Grid>
        {characters.map(character => (
          <Thumb
            key={character.name}
            image={character.image}
            name={character.name}
          />
        ))}
      </Grid>
    </div>
  )
};

export default Home;