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
})

