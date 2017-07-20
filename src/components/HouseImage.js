import styled from 'styled-components';

const HouseImage = styled.div`
  background-image: url(${ props => props.image });
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: ${props => props.height};
  transition: height 200ms;
  position: relative;
`;

export default HouseImage;