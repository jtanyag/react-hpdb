import { Wrapper, Image } from './Thumb.styles';

const Thumb = ({ image, name, actor, getCharacter } ) => (
  <Wrapper>
    <Image src={image} alt={name} onClick={getCharacter} />
    <p>{name}</p>
    <p>{actor}</p>
  </Wrapper>
);

export default Thumb;