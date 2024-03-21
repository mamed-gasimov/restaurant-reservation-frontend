export interface RegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface LoginForm {
  email: string;
  password: string;
}

export interface ReservationForm {
  date: string;
  time: string;
  numberOfPeople: number;
  additionalNotes?: string;
}

export interface AccessTokenByUserId {
  userId: string;
}

export type Forms = RegisterForm | LoginForm | ReservationForm;
