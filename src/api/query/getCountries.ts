import { AxiosResponse } from "axios";
import { baseUrl } from "../apiClient";
import { ICity } from "../../libs/types/type";

export async function getCountries():Promise<ICity[]> {
    return baseUrl.get<ICity[]>(
    "/all?fields=name,flags,capital,region")
    .then(({data}:AxiosResponse<ICity[]>) => data);
}