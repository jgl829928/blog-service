const router = require('koa-router')()

router.prefix('/comments')

router.get('/', function (ctx, next) {
    ctx.body = 'this is a comment response!'
})


module.exports = router
