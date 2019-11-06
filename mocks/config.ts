import api from "./api";
import HelloWorldData from "./data/HelloWorld";

enum Method {
  "GET" = "get",
  "POST" = "post",
  "PUT" = "put",
  "DELETE" = "delete",
  "HEAD" = "head",
  "OPTIONS" = "options",
  "PATCH" = "patch",
}

interface IConfig {
  type?: string;
  method: Method;
  url: string;
  data?: any;
}

const configs: IConfig[] = [
  {
    method: Method.GET,
    url: api.HELLO_WORLD_URL,
    data: HelloWorldData,
  },
];

export default configs;
