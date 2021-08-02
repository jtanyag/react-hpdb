import { Image } from './Thumb.styles';

const Thumb = ({ image, name } ) => (
  <div>
    <Image src={image} alt={name} />
  </div>
);

export default Thumb;