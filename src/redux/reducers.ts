// import { initState } from "./initialState";
import { reducer as getInfoReducer } from "./reducers/getInfo";

const reducers = [getInfoReducer];

export default function reducer(state = {}, action: any) {
  let newState = {};
  switch (action.type) {
    default:
      newState = state;
      break;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
}
