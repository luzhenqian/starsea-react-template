import {
  GET_INFO_BEGIN,
  GET_INFO_FAILURE,
  GET_INFO_SUCCESS,
  IActions,
} from "../actions";
import { helloWorld } from "@api/index";
import { Dispatch } from "redux";

export function getInfo() {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: GET_INFO_BEGIN });
    const promise = new Promise((resolve, reject) => {
      helloWorld().then(
        res => {
          if (typeof res === "object") {
            if (res.code === 200) {
              dispatch({ type: GET_INFO_SUCCESS, payload: res.data });
              resolve(res);
            } else {
              dispatch({ type: GET_INFO_FAILURE });
              reject(res);
            }
          }
        },
        err => {
          dispatch({ type: GET_INFO_FAILURE });
          reject(err);
        },
      );
    });
    return promise;
  };
}

export function reducer(state: any, action: IActions) {
  switch (action.type) {
    case GET_INFO_BEGIN:
      return { ...state, getInfoState: GET_INFO_BEGIN };
    case GET_INFO_FAILURE:
      return { ...state, getInfoState: GET_INFO_FAILURE };
    case GET_INFO_SUCCESS:
      const newState = {
        ...state,
        getInfoState: GET_INFO_SUCCESS,
        info: action.payload,
      };
      return newState;
    default:
      return state;
  }
}
