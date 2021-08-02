import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: black;
  margin: 0 auto;
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-size: 50px;

  i {
    transform: scale(-1, 1) rotate(-30deg);
  }

  .short {
    display: none;
  }

  @media screen and (max-width: 700px) {
    font-size: 30px;

    .full {
      display: none;
    }

    .short {
      display: block;
    }
  }
`;