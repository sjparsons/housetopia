import React from 'react';
import HouseCardWithAnimation from './HouseCardWithAnimation';
import { Grid } from './Grid';

const HouseList = ({houses}) => (
  <Grid>
    { houses.map( house => 
      <HouseCardWithAnimation {...house} key={house.id}/>
    )}
  </Grid>
);

export default HouseList;