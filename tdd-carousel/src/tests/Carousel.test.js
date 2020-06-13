import React from 'react'
import { shallow } from 'enzyme'
import Carousel from '../Carousel'

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
})
