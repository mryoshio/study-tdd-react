import React from 'react'
import CarouselButton from './CarouselButton'
import CarouselSlide from './CarouselSlide'

class Carousel extends React.PureComponent {
  state = {
    slideIndex: 0,
  }
  render() {
    const { slides, ...rest } = this.props
    return (
        <div {...rest}>
        <CarouselSlide {...slides[this.state.slideIndex]} />
        <CarouselButton data-action='prev' onClick={this.handlePrevClick}>prev</CarouselButton>
        <CarouselButton data-action='next' onClick={this.handleNextClick}>next</CarouselButton>
        </div>
    )
  }
  handlePrevClick = () => {
    const { slides } = this.props
    this.setState(({ slideIndex }) => ({
      slideIndex: (slideIndex + slides.length - 1) % slides.length,
    }))
  }
  handleNextClick = () => {
    const { slides } = this.props
    this.setState(({ slideIndex }) => ({
      slideIndex: (slideIndex + 1) % slides.length,
    }))
  }
}

export default Carousel
