import React from 'react';
import styled from 'styled-components';
import HouseImage from './HouseImage';
import AnimateTransitionToHouse from './AnimateTransitionToHouse';

const Card = styled.div`
  display: block;
  color: black;
  text-decoration: none;
  padding: 10px; 
  box-sizing: border-box;
  transition: background-color 800ms;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
    transition: background-color 200ms;
  }
`;

class HouseCardWithAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { goToHouse: false, dimensions: {} };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { top, left, width, height } = this.image._reactInternalInstance.getHostNode().getBoundingClientRect();    
    this.setState({ goToHouse: true, dimensions: { top, left, width, height} })
  }

  render() {
    const {id, image, address: {street, city, state, zip}} = this.props;
    return (
      <Card onClick={ this.handleClick }>
        { this.state.goToHouse &&
          <AnimateTransitionToHouse houseId={id} image={image} dimensions={this.state.dimensions}/>
        }
        <HouseImage 
          image={image} 
          height="200px" 
          ref={ ref => this.image = ref }
        />
        <p>{street}<br/>
        {city}, {state} {zip}</p>
      </Card>
    );
    
  }
};


export default HouseCardWithAnimation;