import Axios, { AxiosResponse } from "axios";

const instance = Axios.create({
  timeout: 8000,
});

export enum PostDataType {
  "formdata",
  "json",
}

export interface IDataResponse {
  message: string;
  data: any;
  code: number;
}

export function get(url: string, params?: object): Promise<IDataResponse> {
  addToken();
  return instance.get(url, { params });
}

export function post(
  url: string,
  data: object,
  type: PostDataType = PostDataType.formdata,
): Promise<IDataResponse> {
  addToken();
  if (type === PostDataType.formdata) {
    return instance({ method: "post", url, data }) as Promise<any>;
  } else {
    return instance.post(url, data);
  }
}

function addToken(
  tokenName: string = "token",
  localTokenName: string = tokenName,
) {
  const token = sessionStorage.getItem(localTokenName);
  if (token) {
    instance.defaults.headers.common[tokenName] = token;
  }
}

instance.interceptors.response.use(
  (response): AxiosResponse<IDataResponse> => {
    switch (response.status) {
      case 200:
      default:
        return response.data;
      case 400:
        return response.data;
    }
  },
  error => Promise.reject(error),
);

export default { get, post };
