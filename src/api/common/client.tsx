import axios, { AxiosHeaders, AxiosInstance, AxiosResponse } from "axios";


const getToken = () => {
    return "";
}

const setupApiClient = (
    apiUrl: string
  ): AxiosInstance => {
    const axiosWrapper = axios.create({
      baseURL: apiUrl,
    });
  
    axiosWrapper.interceptors.request.use((config) => {
      const token = getToken();
      if (!config.headers) {
        config.headers = new AxiosHeaders();
      }
  
      if (token && !config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  
    axiosWrapper.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        // this is a compatibility fix to remove custom JSON serializer introduced in new axios versions
        // see: https://github.com/axios/axios/commit/6b44e80adebf66984b7ad41fd71fcaac28f3fed8
        if (typeof error?.toJSON === "function") {
          delete error.toJSON;
        }
  
        // const stringyfy = JSON.stringify(error);
        // const parseError = JSON.parse(stringyfy);
        // const status = parseError?.response?.status;
        // const url = parseError?.response?.config?.url as string;
        // if (status === 401 || status === 403) {
          
        // }
  
        throw error;
      }
    );
  
    return axiosWrapper as any;
  };

const baseUrl ='http://127.0.0.1:8000/';
export const baseApi = setupApiClient(baseUrl);