import axios, {AxiosInstance} from 'axios';
import {Params, ApiResponse, AxiosResponse} from '@types';
import {config} from '@core';

class ApiClass {
  protected api: AxiosInstance = axios.create({
    baseURL: config.baseURL,
  });

  public async get(endpoint: string, params: Params): Promise<ApiResponse> {
    try {
      return this.handleSuccess(
        (await this.api.get(
          endpoint,
          {...params}
        ))
      );
    } catch (err) {
      return this.handleError(err);
    }
  }

  public async post(endpoint: string, params: Params): Promise<ApiResponse> {
    try {
      return this.handleSuccess(
        (await this.api.post(
          endpoint,
          {...params}
        ))
      );
    } catch (err) {
      return this.handleError(err);
    }
  }

  public async put(endpoint: string, params: Params): Promise<ApiResponse> {
    try {
      return this.handleSuccess(
        (await this.api.put(
          endpoint,
          {...params}
        ))
      );
    } catch (err) {
      return this.handleError(err);
    }
  }

  public async delete(endpoint: string, params: Params): Promise<ApiResponse> {
    try {
      return this.handleSuccess(
        (await this.api.delete(
          endpoint,
          {...params}
        ))
      );
    } catch (err) {
      return this.handleError(err);
    }
  }

  protected handleSuccess<T>(res: AxiosResponse<T>): ApiResponse {
    return {success: true, message: '', data: res.data};
  }

  protected handleError(err: string): ApiResponse {
    return {success: false, message: err}
  }

}

export default ApiClass;
