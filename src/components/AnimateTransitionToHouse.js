import React, {Component} from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

const ANIMATION_DURATION = 180;

const DESTINATION = `
  top: 80px;
  left: 0;
  width: 100%;
  height: 300px;
`;

const Animation = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center center;
  border-bottom: 1000px solid white;
  position: fixed;
  z-index: 100;
  transition: top 150ms, left 150ms, width 150ms, height 150ms;
  ${ ({dimensions, inProgress}) => inProgress ? DESTINATION : `
    top: ${dimensions.top}px;
    left: ${dimensions.left}px;
    width: ${dimensions.width}px;
    height: ${dimensions.height}px;
  `}
`;

class AnimateTransitionToHouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inProgress: false,
      complete: false
    }
  }

  componentDidMount() {
    // 1. Start the animation
    setTimeout(() => {
      this.setState({inProgress: true});
    }, 10);
    
    // 2. Mark animation as complete; declaratively render redirect.
    setTimeout(() => {
      this.setState({complete: true})
    }, ANIMATION_DURATION);
  }

  render() {
    if (this.state.complete)
      return <Redirect to={`/house/${this.props.houseId}`} push={true} />;
    else 
      return <Animation inProgress={ this.state.inProgress } {...this.props}/>;
  }
}

export default AnimateTransitionToHouse;