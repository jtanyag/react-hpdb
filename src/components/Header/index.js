import { Wrapper, Content } from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <span className='full'>Harry Potter Database</span>
      <span className='short'>HPDB</span>
      <i className="fas fa-bolt"></i>
    </Content>
  </Wrapper>
);

export default Header;