import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
})

export const resultify = <T>(response: AxiosResponse<T>) => {
  return response.data
}

export const get = <T>(url: string, config?: AxiosRequestConfig) => {
  return axiosInstance
    .get(url, config)
    .then(resultify<T>)
}

export const deletApi = <T>(url: string, config?: AxiosRequestConfig) => {
  return axiosInstance
    .delete(url, config)
    .then(resultify<T>)
}

export const post = <T>(url: string, data?: any, config?: AxiosRequestConfig) => {
  return axiosInstance
    .post(url, data, config)
    .then(resultify<T>)
}

export const put = <T>(url: string, data?: any, config?: AxiosRequestConfig) => {
  return axiosInstance
    .put(url, data, config)
    .then(resultify<T>)
}