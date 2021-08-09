import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 2rem;

  h1 {
    color: var(--medYellow);

    @media screen and (max-width: 768px) {
      font-size: var(--bgFont);
    }
  }
`;

export const Content = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
`;