import { Wrapper, Content, Text } from './HeroImage.styles';

const HeroImage = ({ activeCharacter }) => {

  return (
    <Wrapper>
      {Object.keys(activeCharacter).length > 0 ? (
        <Content>
          <img src={activeCharacter.image} alt={activeCharacter.name} />
          <Text>
            <h1>{activeCharacter.name}</h1>
            <h3>{activeCharacter.house || 'n/a'}</h3>
            <div className='characterInfo'>
              <div className='characterInfoCol'>
                <p>Date of birth: {activeCharacter.dateOfBirth || 'n/a'}</p>
                <p>Ancestry: {activeCharacter.ancestry || 'n/a'}</p>
                <p>Patronus: {activeCharacter.patronus || 'n/a'}</p>
              </div>
              <div className='characterInfoCol'>
                  <p>Wand:</p>
                  <p>Wood: {activeCharacter.wand.wood || 'n/a'}</p>
                  <p>Core: {activeCharacter.wand.core || 'n/a'}</p>
                  <p>Length: {activeCharacter.wand.length || 'n/a'}</p>
              </div>
            </div>
          </Text>
        </Content>
      ) : null}
    </Wrapper>
  );
};

export default HeroImage;