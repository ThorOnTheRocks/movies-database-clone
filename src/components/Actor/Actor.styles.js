import styled from "styled-components";

export const Wrapper = styled.div`
  color: var(--white);
  background: var(--darkGrey);
  border-radius: 2rem;
  padding: 5px;
  text-align: center;

  h3 {
    margin:  1rem 0 0 0;
  }

  p {
    margin: 5px 0;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 20rem;
  object-fit: cover;
  border-radius: 1.5rem;
`;