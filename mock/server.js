// @ts-nocheck
const Koa = require("koa");
const Router = require("koa-router");
const Mock = require("mockjs");
const chalk = require("chalk");
const program = require("commander");
const MockConfig = require("./config");

let app = new Koa();
let router = new Router();

MockConfig.forEach(config => {
  router[config.method](config.url, (ctx, next) => {
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

const port = program.port || 8000;

app.listen(port);
console.log(chalk.green("mock server address: http://localhost:" + port));
