const api = require("./api.js");
const HelloWorldData = require("./data/HelloWorld");

const configs = [
  {
    method: "get",
    url: api.HELLO_WORLD_URL,
    data: HelloWorldData
  }
];

module.exports = configs;
