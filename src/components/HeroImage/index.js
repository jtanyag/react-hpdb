import { Wrapper, Content, Text } from './HeroImage.styles';

const HeroImage = ({ activeCharacter, image, name, house, dateOfBirth, ancestry, patronus, wand }) => {

  return (
    <Wrapper>
      {Object.keys(activeCharacter).length > 0 ? (
        <Content>
          <img src={image} alt={name} />
          <Text>
            <h1>{name}</h1>
            <h3>{house || 'n/a'}</h3>
            <div className='characterInfo'>
              <div className='characterInfoCol'>
                <p>Date of birth: {dateOfBirth || 'n/a'}</p>
                <p>Ancestry: {ancestry || 'n/a'}</p>
                <p>Patronus: {patronus || 'n/a'}</p>
              </div>
              <div className='characterInfoCol'>
                  <p>Wand:</p>
                  <p>Wood: {wand.wood || 'n/a'}</p>
                  <p>Core: {wand.core || 'n/a'}</p>
                  <p>Length: {wand.length || 'n/a'}</p>
              </div>
            </div>
          </Text>
        </Content>
      ) : null}
    </Wrapper>
  );
};

export default HeroImage;