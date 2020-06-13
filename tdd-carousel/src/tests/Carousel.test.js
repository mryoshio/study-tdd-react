import React from 'react'
import { shallow } from 'enzyme'
import Carousel from '../Carousel'
import CarouselButton from '../CarouselButton'
import CarouselSlide from '../CarouselSlide'

describe('carousel', () => {
  let wrapper

  const slides = [
    {
      imgUrl: 'https://example.com/slide1.png',
      description: 'slide 1',
      attribution: 'uno pizza',
    },
    {
      imgUrl: 'https://example.com/slide2.png',
      description: 'slide 2',
      attribution: 'dos equis',
    },
    {
      imgUrl: 'https://example.com/slide3.png',
      description: 'slide 3',
      attribution: 'three amigos',
    },
  ]

  beforeEach(() => {
    wrapper = shallow(<Carousel slides={slides} />)
  })

  it('renders a <div>', () => {
    expect(wrapper.type()).toBe('div')
  })

  it('has an initial index of 0', () => {
    expect(wrapper.state('slideIndex')).toBe(0)
  })

  it('renders a carousel button with `prev`', () => {
    expect(
      wrapper
        .find(CarouselButton)
        .at(0)
        .prop('children')
    ).toBe('prev')
  })
  it('renders a carousel button with `next`', () => {
    expect(
      wrapper
        .find(CarouselButton)
        .at(1)
        .prop('children')
    ).toBe('next')
  })

  describe('with a middle slide selected', () => {
    beforeEach(() => {
      wrapper.setState({ slideIndex: 1 })
    })
    it('decrements slideIndex when prev clicked', () => {
      wrapper.find("[data-action='prev']").simulate('click')
      expect(wrapper.state('slideIndex')).toBe(0)
    })

    it('increments slideIndex when next clicked', () => {
      wrapper.find("[data-action='next']").simulate('click')
      expect(wrapper.state('slideIndex')).toBe(2)
    })
  })

  describe('with a first slide selected', () => {
    beforeEach(() => {
      wrapper.setState({ slideIndex: 0 })
    })
    it('renders the current slide as a carousel slide', () => {
      let attribution = wrapper.find(CarouselSlide).props().attribution
      expect(attribution).toEqual(slides[0].attribution)
    })
    it('decrements slideIndex when prev clicked', () => {
      wrapper.find("[data-action='prev']").simulate('click')
      expect(wrapper.state('slideIndex')).toBe(slides.length - 1)
    })
  })

  describe('with a last slide selected', () => {
    beforeEach(() => {
      wrapper.setState({ slideIndex: slides.length - 1 })
    })
    it('renders the current slide as a carousel slide', () => {
      let attribution = wrapper.find(CarouselSlide).props().attribution
      expect(attribution).toEqual(slides[slides.length-1].attribution)
    })
    it('decrements slideIndex when next clicked', () => {
      wrapper.find("[data-action='next']").simulate('click')
      expect(wrapper.state('slideIndex')).toBe(0)
    })
  })
})
