import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 2rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 2rem 0;
  margin: 0 auto;
`;

export const LogoImg = styled.img`
  width: 25rem;

  @media screen and (max-width: 500px) {
    width: 20rem;
  }
`;

export const MDBLogoImg = styled.img`
  width: 15rem;

  @media screen and (max-width) {
    width: 12rem;
  }
`;



