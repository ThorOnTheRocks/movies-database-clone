import styled from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 10rem;
  background: var(--darkGrey);
  padding: 0 2rem;
`;

export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  width: 100%;
  height: 5.5rem;
  background: var(--medGrey);
  margin: 0 auto;
  border-radius: 4rem;
  color: var(--white);

  img {
    position: absolute;
    left: 1.5rem;
    top: 1.4rem;
    width: 3rem;
  }

  input {
    font-size: var(--bgFont);
    position: absolute;
    left: 0%;
    margin: 8px 0;
    padding: 0 0 0 6rem;
    border: 0;
    width: 95%;
    background: transparent;
    height: 4rem;
    color: var(--white);

    :focus {
      outline: none;
    }

  }

`;