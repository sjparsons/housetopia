import React from 'react';

/**
 * Straight from the React Router v4 docs
 */
export default class ScrollToTopOnMount extends React.Component {
  componentDidMount(prevProps) {
    window.scrollTo(0, 0)
  }

  render() {
    return null
  }
}