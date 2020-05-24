const greeting = guest => `Hello, ${guest}`;

describe('greeting()', () => {
  it('says Hello', () => {
    expect(greeting('Jest')).toBe('Hello, Jest')
  })
})
