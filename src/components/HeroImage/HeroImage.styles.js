import styled from "styled-components";

export const Wrapper = styled.div`
  background: linear-gradient(
    to bottom, rgba(0, 0, 0, 0)
    39%, rgba(0, 0, 0, 0)
    41%, rgba(0, 0, 0, 0.65)
    100%
  ),
    url(${({ image }) => image}), var(--darkGrey);
  background-size: 100%, cover;
  background-position: center;
  height: 60rem;
  position: relative;
  animation: animateHeroImage 1s;

  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  padding: 2rem;
  max-width: var(--maxWidth);
  margin: 0 auto;

`;

export const Text = styled.div`
  z-index: 100;
  max-width: 70rem;
  position: absolute;
  bottom: 4rem;
  margin-right: 2rem;
  min-height: 10rem;
  color: var(--white);

  h1 {
    font-size: var(--superBigFont);

    @media screen and (max-width: 720px) {
      font-size: var(--bgFont);
    }
  }

  p {
    font-size: var(--mdFont);

    @media screen and (max-width: 720px) {
      font-size: var(--smFont);
    }
  }

  @media screen and (max-width: 720px) {
    max-width: 100%;
  }
`;