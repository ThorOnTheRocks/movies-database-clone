import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkYellow);
  padding: 0 2rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 1rem 0;
  margin: 0 auto;
  color: var(--white);

  a  {
    color: var(--white);
    text-decoration: none;
    font-size: 3rem;
  }

  .loggedin {
    color: var(--white);
    text-decoration: none;
    font-size: 2rem;
  }
  

  .heading {
    font-family: 'Style Script', cursive;
    font-size: 4rem;
    

    @media screen and (max-width: 500px) {
    font-size: 3rem;
  }
  }

  
`;

export const MDBLogoImg = styled.img`
  width: 15rem;

  @media screen and (max-width) {
    width: 12rem;
  }
`;



