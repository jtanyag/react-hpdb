import styled from 'styled-components';

export const Wrapper = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.65)), url('https://i.ytimg.com/vi/5D0pRhxZWFI/maxresdefault.jpg');
  background-size: 100%, cover;
  background-position: center;
  height: 600px;
  position: relative;
  padding: 40px 20px;
`;

export const Content = styled.div`
  padding: 20px;
  max-width: 1280px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;

  img {
    height: 400px;
    width: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`;
  
  export const Text = styled.div`
  color: white;
  padding: 20px;
  font-size: 1.2rem;
  
  h1 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  .characterInfo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
  
  .characterInfoCol {
    padding: 20px;
  }
  `;