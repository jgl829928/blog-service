const router = require('koa-router')()
const Blog = require('../db/blog');

router.get('/', async (ctx, next) => {
  Blog.
    findById("6102798cb001571ef95f4d9e", (err, docs) => {
      console.log(docs)
    })
  await ctx.render('index', {
    title: 'user'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
