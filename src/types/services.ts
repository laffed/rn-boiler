export type ApiResponse = {
  success: boolean;
  message: string;
  data?: unknown;
}

export type AxiosResponse<T> = {
  data: T;
}

export type Params = {
  headers: {
    'Content-Type'?: 'application/x-www-form-urlencoded';
    Accept?: 'application/vnd.api+json';
    Authorization: string;
  };
  data?: unknown;
  stringify?: boolean;
}