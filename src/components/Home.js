import React from 'react'
import HouseList from './HouseList'
import { houses } from '../data/houses'

const Home = () => (
  <div>
    <p>Welcome, you might be interested in the following houses.</p>
    <HouseList houses={ houses } />
  </div>
);

export default Home;