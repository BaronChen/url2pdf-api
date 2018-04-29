import * as Koa from 'koa';
import { Context } from 'koa';
import * as Router from 'koa-router';
import { Url2PdfController } from './url-2-pdf/url-2-pdf-controller';

export class MyApp {

  app: Koa;
  router: Router;

  constructor() {
    this.app = new Koa();
    this.router = new Router();
  }

  start() {
    this.registerActions();
    this.app.use(this.router.routes()).use(this.router.allowedMethods());

    this.app.listen(3000);
    console.log("server listenning to port 3000...");
  }

  registerActions() {

    this.router.get('/', async (ctx: Context) => {
      ctx.body = 'Hello url2pdf!';
    })
    .get('/url2pdf/convert', async (ctx: Context) => {
      const url = decodeURIComponent(ctx.request.query['url']);
      let controller = new Url2PdfController();
      ctx.response.set('Content-disposition', 'attachment; filename=converted.pdf');
      ctx.response.set('Content-type', 'application/pdf');
      ctx.body = await controller.convert(url);
    });    
  }

}


const app = new MyApp();
app.start();

