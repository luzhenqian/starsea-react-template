const api = require("./api.js");
const HelloWorldData = require("./data/HelloWorld");

enum Method {
  "GET" = "get",
  "POST" = "post",
  "PUT" = "put",
  "DELETE" = "delete",
  'HEAD' = "head",
  'OPTIONS' = "options",
  'PATCH' = "patch"
}

interface Config {
  method: Method,
  url: string,
  data?: any
}

const configs: Config[] = [
  {
    method: Method.GET,
    url: api.HELLO_WORLD_URL,
    data: HelloWorldData
  }
];

module.exports = configs;
