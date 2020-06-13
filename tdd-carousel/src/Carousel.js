import React from 'react'
import CarouselButton from './CarouselButton'

class Carousel extends React.PureComponent {
  state = {
    slideIndex: 0
  }
  render() {
    return (
        <div>
        <CarouselButton data-action='prev' onClick={this.handlePrevClick}>prev</CarouselButton>
        <CarouselButton data-action='next' onClick={this.handleNextClick}>next</CarouselButton>
        </div>
    )
  }
  handlePrevClick = () => {
    this.setState(({ slideIndex }) => ({
      slideIndex: slideIndex - 1
    }))
  }
  handleNextClick = () => {
    this.setState(({ slideIndex }) => ({
      slideIndex: slideIndex + 1
    }))
  }
}

export default Carousel
