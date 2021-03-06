import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 10rem;
  background: var(--darkYellow);
  padding: 0 2rem;
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  width: 100%;
  margin: 0 auto;


  .column {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--medYellow);
    border-radius: 2rem;
    margin: 0 2rem;
    flex: 1;
    min-height: 5rem;

    :first-child{
      margin-left: 0;
    }

    :last-child{
      margin-right: 0;
    }
  }

  @media screen and (max-width: 768px){
    display: block;

    .column{
      margin: 2rem 0;
    }
  }
`;