import styled from 'styled-components';

/**
 * A poor man's mobile-first responsive grid
 */

export const Grid = styled.div`
  display: block;
  width: 100%;
  
  @media (min-width: 601px) {
    display: flex;
    flex-wrap: wrap;

    > * {
      flex: 0 0 50%;
    }
  }

  @media (min-width: 850px) {
    > * {
      flex: 0 0 33%;
    }
  }

  @media (min-width: 1000px) {
    > * {
      flex: 0 0 25%;
    }
  }

`;
