import styled from 'styled-components';

export const Wrapper = styled.div`
  background: black;
  color: white;
  border-radius: 20px;
  text-align: center;

  :hover {
    cursor: pointer;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
`;