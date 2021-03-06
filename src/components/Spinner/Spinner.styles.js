import styled from "styled-components";

export const Spinner = styled.div`
  border: 5px solid var(--lightYellow);
  border-top: 5px solid var(--medYellow);
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  animation: spin 0.8s linear infinite;
  margin: 2rem auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`