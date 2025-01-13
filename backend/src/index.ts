import { Hono } from 'hono'

const app = new Hono()

app.post('/api/v1/user/signup', (c) => {
  return c.('sdc')
})

app.post('/api/v1/user/signin', (c) => {
  return c.('sdc')
})

app.post('/api/v1/blog', (c) => {
  return c.('sdc')
})

app.put('/api/v1/blog', (c) => {
  return c.('sdc')
})

app.get('/api/v1/blog/:id', (c) => {
  return c.('sdc')
})

app.get('/api/v1/blog/bulk', (c) => {
  return c.('sdc')
})
export default app
