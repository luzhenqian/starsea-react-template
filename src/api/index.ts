import { HELLO_WORLD_URL } from "../../mocks/api";
import { get, IDataResponse } from "@utils/http";

export async function helloWorld(): Promise<IDataResponse> {
  return await get(`/api/${HELLO_WORLD_URL}`);
}
