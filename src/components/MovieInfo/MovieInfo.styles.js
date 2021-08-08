import styled from "styled-components";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

export const Wrapper = styled.div`
  background: ${({ backdrop }) =>
    backdrop ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop}')`
      : '#000'
  };
  background-size: cover;
  background-position: center;
  padding: 4rem 2rem;
  animation: animateMovieInfo 1s;

  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0,0,0,0.7);
  border-radius: 2rem;
  
  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
  }
`;

export const Text = styled.div`
  width: 100%;
  padding: 2rem 4rem;
  color: var(--white);
  overflow: hidden;

  h3 {
    margin-top: 2rem;
  }

  .rating-directors {
    margin-top: 2rem;
    display: flex;
    justify-content: flex-start;
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.5rem;
    height: 3.5rem;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 50%;
    margin-top: 1rem;
  }

  .director {
    margin: 0 0 0 4rem;

    p {
      margin-top: 1rem;
    }
  }

  h1  {
    @media screen and (max-width: 768px)  {
      font-size: var(--bgFont);
    }
  }
`;