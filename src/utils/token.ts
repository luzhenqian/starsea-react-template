import { Base64 } from "js-base64";

export enum IStore {
  "localStorage" = "localStorage",
  "sessionStorage" = "sessionStorage",
}

export let tokenKey = "qazxsw";

function saveToken(token: any, store: IStore = IStore.localStorage) {
  if (store === IStore.localStorage) {
    localStorage.setItem(tokenKey, Base64.encode(token));
  } else if (store === IStore.sessionStorage) {
    sessionStorage.setItem(tokenKey, Base64.encode(token));
  }
}

function getToken() {
  return Base64.decode(localStorage.getItem(tokenKey) || "");
}

export { saveToken, getToken };
