import React from 'react'
import { shallow } from 'enzyme'
import CarouselSlide from '../CarouselSlide'

describe('carousel slide', () => {
  let wrapper
  let imgUrl = 'https://example.com/image.png'
  let description = 'A beautiful image'
  let attribution = 'trevor burnham'
  beforeEach(() => {
    wrapper = shallow(
        <CarouselSlide imgUrl={imgUrl} description='default image' />
    )
  })
  it('renders a <figure>', () => {
    expect(wrapper.type()).toBe('figure')
  })
  it('renders a <img> and a <figcaption> as children', () => {
    expect(wrapper.childAt(0).type()).toBe(CarouselSlide.defaultProps.Img)
    expect(wrapper.childAt(1).type()).toBe('figcaption')
  })
  it('passes `imgUrl` through to the <img>', () => {
    wrapper.setProps({ imgUrl })
    const img = wrapper.find(CarouselSlide.defaultProps.Img)
    expect(img.prop('src')).toBe(imgUrl)
  })
  it('uses description and attribution as <figcaption>', () => {
    wrapper.setProps({ description, attribution })
    expect(wrapper.find('figcaption').text()).toBe(`${description} ${attribution}`)
    expect(wrapper.find('figcaption strong').text()).toBe(description)
  })
  it('passes other props throught the <figure>', () => {
    const style ={}
    const onClick = () => {}
    const className = 'my-cr-slide'
    wrapper.setProps({ style, onClick, className })
    expect(wrapper.prop('style')).toBe(style)
    expect(wrapper.prop('onClick')).toBe(onClick)
    expect(wrapper.prop('className')).toBe(className)
  })
})
     
