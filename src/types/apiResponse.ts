export type ApiResponse =
  | RegisterApiResponse
  | LoginApiResponse
  | AccessTokenApiResponse;

export type Restaurant = {
  _id: string;
  name: string;
  description: string;
  image: string;
  startingHour: string;
  closingHour: string;
};

export type GetRestaurantsApiResponse = {
  data: { restaurants: Restaurant[] };
  status?: "error" | "success";
};

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
