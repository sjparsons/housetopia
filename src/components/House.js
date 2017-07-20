import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import {houses} from '../data/houses';
import HouseImage from './HouseImage';
import Map from './Map';
import HouseSummary from './HouseSummary';
import RequestViewingForm from './RequestViewingForm';
import ScrollToTopOnMount from './ScrollToTopOnMount';

const MAP_API_KEY = 'AIzaSyDoEKTDIXDrskeTDNXGSGwEbGQVkDtFxb4';

const HouseDetails = styled.div`
  display: flex;
  position: relative;
  left: ${ props => props.leftOffset };
  transition: left 200ms;
  > * {
    flex: 0 0 50%;
  }
`;

const HouseTitle = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
  color: white;
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.95) 100%);
  font-size: 1.5em;
  font-weight: bold;
  letter-spacing: 1px;
  padding-top: 40px;
`;

const House = ({id, match}) => {    
    const house = houses.find( house => house.id === id);
    const {address: {street, city, state, zip}, image, summary} = house;

    return (
      <div>
        <ScrollToTopOnMount />            

        <HouseImage image={image} height={'300px'}>
          <HouseTitle>{street}, {city}, {state} {zip}</HouseTitle>
        </HouseImage>

        <Route path={`/house/${id}/viewing`} children={({ match }) => {

          if (match) {
            // SUBROUTE for requesting a house viewing
            return (
              <HouseDetails>
                <HouseSummary summary={summary} id={id} />
                <RequestViewingForm id={id} />
              </HouseDetails>
            )
          } else {
            // INITIAL STATE
            return (
              <HouseDetails>
                <Map 
                  mode="place" 
                  apiKey={MAP_API_KEY}
                  params={`q=${city}+${state}`}
                  width="100%"
                />
                <HouseSummary summary={summary} id={id} />
              </HouseDetails> 
            );
          }
          
        }} />
          
      </div>
    );
};

export default House;