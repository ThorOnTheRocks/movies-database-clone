import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 7rem;
  background: var(--medYellow);
  color: var(--white);
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--maxWidth);
  padding: 0 2rem;

  span {
    font-size: var(--mdFont);
    color: var(--white);
    padding-right: 1rem;

    @media screen and (max-width: 768px){
      font-size: var(--smFont);
    }
  }
`;
