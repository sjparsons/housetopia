import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import HouseImage from './HouseImage';

const HouseCard = ({id, image, address: {street, city, state, zip}, ...otherProps}) => (
  <Link to={`house/${id}`} {...otherProps}>
    <HouseImage image={image} height="200px" />
    <p>{street}<br/>
    {city}, {state} {zip}</p>
  </Link>
);

export default styled(HouseCard)`
  display: block;
  color: black;
  text-decoration: none;
  padding: 10px; 
  box-sizing: border-box;
  transition: background-color 800ms;
  &:hover {
    background-color: #f0f0f0;
    transition: background-color 200ms;
  }
`;