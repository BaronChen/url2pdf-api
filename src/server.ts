import * as Koa from 'koa';
import { Context } from 'koa';

export class MyApp {

  app: Koa;

  constructor() {
    this.app = new Koa();
  }

  start() {
    this.app.listen(3000);
    this.registerActions();

    console.log("server listenning to port 3000...");
  }

  registerActions() {
    this.app.use(async (ctx: Context) => {
      ctx.body = 'Hello lalal';
    });
  }

}


const app = new MyApp();
app.start();

