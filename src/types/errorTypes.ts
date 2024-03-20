export type AxiosResponseError = {
  code: string;
  message: string;
  name: string;
  response: {
    data?: {
      message?: string;
    };
    status: number;
    statusText: string;
  };
};
