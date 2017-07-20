import React from 'react';
import HouseCard from './HouseCard';
import { Grid } from './Grid';

const HouseList = ({houses}) => (
  <Grid>
    { houses.map( house => 
      <HouseCard {...house} key={house.id}/>
    )}
  </Grid>
);

export default HouseList;