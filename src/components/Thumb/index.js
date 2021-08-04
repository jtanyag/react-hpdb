import { Image } from './Thumb.styles';

const Thumb = ({ image, name, getCharacter } ) => (
  <div>
    <Image src={image} alt={name} onClick={getCharacter} />
  </div>
);

export default Thumb;