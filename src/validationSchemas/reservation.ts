import * as yup from "yup";

export const reservationSchema = yup.object().shape({
  date: yup.string().trim().required("Date is a required field!"),
  time: yup.string().trim().required("Time is a required field!"),
  numberOfPeople: yup
    .number()
    .integer("Number of people must be a positive integer!")
    .min(1)
    .required("Number of people is a required field!"),
  additionalNotes: yup
    .string()
    .max(500, "Additional Notes can not be more than 500 characters long!")
    .optional(),
});
