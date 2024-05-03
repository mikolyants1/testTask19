import { AxiosResponse } from "axios";
import { baseUrl } from "../apiClient";
import { ICity } from "../../libs/types/type";

export async function getCountry(name:string):Promise<ICity[]> {
  return baseUrl.get<ICity[]>(`/name/${name}`)
  .then(({data}:AxiosResponse<ICity[]>) => data);
}