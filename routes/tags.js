const router = require('koa-router')()

router.prefix('/tags')

router.get('/', function (ctx, next) {
    ctx.body = 'this is a tags response!'
})


module.exports = router
