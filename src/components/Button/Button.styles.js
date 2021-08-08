import styled from "styled-components";

export const Wrapper = styled.button`
  display: block;
  background: var(--darkGrey);
  width: 25%;
  min-width: 20rem;
  height: 6rem;
  border-radius: 3rem;
  color: var(--white);
  border: 0;
  font-size: var(--bgFont);
  margin: 2rem auto;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;