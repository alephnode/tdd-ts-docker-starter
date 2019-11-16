import request from 'supertest'
import app from './index'

describe('Default (/)', () => {
  it('greets us on request', async () => {
    const res = await get(`/`).expect(200)
    expect(res.text).toBe('Hello World!')
  })
})

function get(url: string) {
  const httpRequest = request(app).get(url)
  httpRequest.send()
  httpRequest.set('Accept', 'application/json')
  httpRequest.set('Origin', 'http://localhost:8000')
  return httpRequest
}
