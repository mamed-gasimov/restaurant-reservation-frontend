export type ApiResponse =
  | RegisterApiResponse
  | LoginApiResponse
  | AccessTokenApiResponse;

export type RegisterApiResponse = {
  data: { message: string };
  status?: "error" | "success";
};

export type LoginApiResponse = {
  data: {
    message: string;
    token: string;
    userId: string;
  };
  status?: "error" | "success";
};

export type AccessTokenApiResponse = {
  data: {
    message: string;
    token: string;
  };
  status?: "error" | "success";
};
