import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 32rem;
  padding: 2rem;
  color: var(--darkYellow);

  label {
    font-size: 3rem;
  }

  input {
    width: 100%;
    height: 3rem;
    border: 1px solid var(--darkYellow);
    border-radius: 2rem;
    margin: 1rem 0;
    padding: 1rem;
  }

  .error {
    color: red;
  }
`;

