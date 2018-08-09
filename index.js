const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'VANCHEZ?'
});

app.listen(4000);
