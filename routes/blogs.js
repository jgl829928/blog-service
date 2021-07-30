const router = require('koa-router')()
const Blog = require('../db/blog');

router.prefix('/blogs')

router.post('/', function (ctx, next) {
  ctx.body = 'Save'
})

router.get('/', async (ctx, next) => {
  const data = await Blog.find()
  const result = { // 创建响应返回的数据结构
    code: 200,
    data: data,
    message:"success"
  }
  ctx.response.body = result // 直接把响应写进页面
  return result // return干嘛，return到network吗？
})

router.get('/:id', function (ctx, next) {
  ctx.body = 'Query By Id'
})

router.put('/:id', function (ctx, next) {
  ctx.body = 'Update'
})

module.exports = router
