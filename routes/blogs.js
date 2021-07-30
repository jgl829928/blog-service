const router = require('koa-router')()
const Blog = require('../db/blog');

router.prefix('/blogs')

router.post('/', function (ctx, next) {
  ctx.body = 'Save'
})

router.get('/', async (ctx, next) => {
  const data = await Blog.find()
  const result = { 
    code: 200,
    data: data,
    message: "success"
  }
  ctx.response.body = result 
  return result 
})

router.get('/:id', function (ctx, next) {
  ctx.body = 'Query By Id'
})

router.put('/:id', function (ctx, next) {
  ctx.body = 'Update'
})

module.exports = router
