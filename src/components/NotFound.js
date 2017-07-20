import React from 'react';
import styled from 'styled-components';

const CenterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
`;

const NotFound = ({location}) => {
    return (
        <CenterContent>404 Aw, shucks! {location.pathname} cannot be found</CenterContent>
    );
};

export default NotFound;