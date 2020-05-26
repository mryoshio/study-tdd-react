import React from 'react'

describe('JXS', () => {
  it('calls React.createElement', () => {
    const ceSpy = jest.spyOn(React, 'createElement');
      <h1>Hello, JSX</h1>
      expect(ceSpy).toHaveBeenCalledWith('h1', null, 'Hello, JSX')
  })
})
      
