import base, { IBaseApi } from "./baseApi";

export interface IApiServices {
    base: IBaseApi
}

const api : IApiServices = {
    base
}

export default api;