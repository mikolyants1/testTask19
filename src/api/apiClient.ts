import axios, { AxiosInstance } from 'axios';

export const baseUrl:AxiosInstance = axios.create({
    baseURL:"https://restcountries.com/v3.1/"
})