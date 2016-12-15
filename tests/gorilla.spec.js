const Gorilla = require('../src/gorilla')
document.body.innerHTML = '<div id="demo"></div>'

test('adds 1 + 2 to equal 3', () => {
  let gorilla = new Gorilla('#demo')
  expect(gorilla.sum(1, 2)).toBe(3)
})
