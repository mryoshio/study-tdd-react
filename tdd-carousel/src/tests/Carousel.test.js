import React from 'react'
import { shallow } from 'enzyme'
import Carousel from '../Carousel'
import CarouselButton from '../CarouselButton'

describe('carousel', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Carousel />)
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
})
