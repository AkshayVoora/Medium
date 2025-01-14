import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono';
import { sign } from 'hono/jwt'

export const blogRouter = new Hono<{
    Bindings : {

    }
}>()

blogRouter.post('/blog', (c) => {
    return c.text('sdc')
  })
  
blogRouter.put('/blog', (c) => {
    return c.text('sdc')
  })
  
blogRouter.get('/blog/:id', (c) => {
    return c.text('sdc')
  })
blogRouter.get('/blog/bulk', (c) => {
    return c.text('sdc')
  })