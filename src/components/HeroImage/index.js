import { Wrapper, Content, Text } from './HeroImage.styles';

const HeroImage = ({ activeCharacter }) => {

  return (
    <Wrapper>
      {Object.keys(activeCharacter).length > 0 ? (
        <Content>
          <img src={activeCharacter.image} alt={activeCharacter.name} />
          <Text>
            <h1>{activeCharacter.name}</h1>
            <h3>{activeCharacter.house}</h3>
            <div className='characterInfo'>
              <div className='characterInfoCol'>
                <p>Date of birth: {activeCharacter.dateOfBirth}</p>
                <p>Ancestry: {activeCharacter.ancestry}</p>
                <p>Patronus: {activeCharacter.patronus}</p>
              </div>
              <div className='characterInfoCol'>
                  <p>Wand:</p>
                  <p>Wood: {activeCharacter.wand.wood}</p>
                  <p>Core: {activeCharacter.wand.core}</p>
                  <p>Length: {activeCharacter.wand.length}</p>
              </div>
            </div>
          </Text>
        </Content>
      ) : null}
    </Wrapper>
  );
};

export default HeroImage;