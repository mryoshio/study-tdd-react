import React from 'react'
import { shallow } from 'enzyme'
import CarouselSlide from '../CarouselSlide'

describe('carousel slide', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<CarouselSlide />)
  })
  it('renders a <figure>', () => {
    expect(wrapper.type()).toBe('figure')
  })
  it('renders a <img> and a <figcaption> as children', () => {
    expect(wrapper.childAt(0).type()).toBe('img')
    expect(wrapper.childAt(1).type()).toBe('figcaption')
  })
})
     
