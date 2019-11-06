import Koa from "koa";
import Router from "koa-router";
import Mock from "mockjs";
import chalk from "chalk";
import program from "commander";
import MockConfig from "./config";
import net from "net";
// import websocket

const app = new Koa();
const router: any = new Router();

MockConfig.forEach((config: any) => {
  router[config.method](config.url, (ctx: any, next: any) => {
    next();
    if (typeof config.data === "object") {
      ctx.body = Mock.mock(config.data);
    } else if (typeof config.data === "function") {
      ctx.body = config.data();
    } else {
      ctx.body = "no data.";
    }
  });
});

app.use(router.routes()).use(router.allowedMethods());

program.option("-p, --port <port>", "server port.").parse(process.argv);

let port: number = program.port || 8000;

function checkPort() {
  const server = net.createServer().listen(port);
  server.on("listening", () => {
    server.close();
    listen();
  });
  server.on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      port++;
      checkPort();
    }
  });
}

function listen() {
  app.listen(port);
  console.log(chalk.green("mock server address: http://localhost:" + port));
}

checkPort();
