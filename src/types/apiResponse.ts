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

export interface Reservation {
  _id: string;
  date: string;
  time: string;
  numberOfPeople: number;
  additionalNotes?: string;
  status: "pending" | "approved" | "rejected";
}

export type GetRestaurantsApiResponse = {
  data: { restaurants: Restaurant[] };
  status?: "error" | "success";
};

export type GetRestaurantApiResponse = {
  data: { restaurant: Restaurant };
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

export type CreateReservationApiResponse = {
  data: {
    message: string;
    reservation: Reservation;
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
