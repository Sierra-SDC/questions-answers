// This test fails because 1 !== 2
const app = require('../index.js') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true)
  })
})