// 获取用户信息
const GET_INFO_BEGIN = "GET_INFO_BEGIN";
const GET_INFO_SUCCESS = "GET_INFO_SUCCESS";
const GET_INFO_FAILURE = "GET_INFO_FAILURE";

export interface IActions {
  type: string;
  payload: any;
}

export { GET_INFO_BEGIN, GET_INFO_SUCCESS, GET_INFO_FAILURE };
