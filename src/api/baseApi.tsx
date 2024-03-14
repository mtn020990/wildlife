import { AxiosPromise } from 'axios'
import {baseApi} from './common/client'

export interface IBaseApi {
    getListRestro: () => Promise<any>
}

const getListRestro = () :AxiosPromise<any> => {
    return new Promise((resolve, reject) => {
        baseApi.get("listRestro")
        .then((res: any) => {
            const { data } = res.data;
            resolve(data);
          })
          .catch(() => reject(new Error("Invalid credential")));
    })
};

export default {
    getListRestro
} as IBaseApi;