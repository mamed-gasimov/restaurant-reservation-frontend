import { useContext } from "react";
import { UseFormRegister, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { AuthContext } from "@context/authContext";
import { sendCreateReservationRequest } from "@services/sendRequest";
import { TextInput } from "@components/index";
import { reservationSchema } from "@validationSchemas/reservation";
import { Forms, ReservationForm as ReservationFormType } from "src/types/forms";
import reservationFormCss from "./reservationForm.module.css";

const timeList = [
  "11:00 AM",
  "12:00 AM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
  "08:00 PM",
  "09:00 PM",
];

interface Props {
  restaurantId?: string;
}

const ReservationForm = ({ restaurantId }: Props) => {
  const { authToken } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      date: "",
      time: "",
      numberOfPeople: 1,
      additionalNotes: "",
    },
    resolver: yupResolver(reservationSchema),
  });

  const handleSubmitReservation = async (values: ReservationFormType) => {
    if (!isValid || !restaurantId) return;

    const dateSplited = values.date.split("-");
    const formatedDate = `${dateSplited[1]}-${dateSplited[2]}-${dateSplited[0]}`;
    const response = await sendCreateReservationRequest(
      "/reservations",
      {
        ...values,
        date: formatedDate,
        restaurantId,
      },
      authToken
    );

    if (response?.status === "error" || !response) {
      toast.error(response?.data.message || "Something went wrong!");
    } else if (response?.status === "success") {
      toast.success(
        response.data.message || "Reservation successfully submitted!"
      );
      reset();
    }
  };

  return (
    <form
      className={reservationFormCss.reservationForm}
      onSubmit={handleSubmit(handleSubmitReservation)}
    >
      <TextInput
        register={register as UseFormRegister<Forms>}
        label="Date"
        inputId="date"
        type="date"
        errorMsg={errors.date?.message}
      />
      <p>
        <label htmlFor="time">Time</label>
        <select id="time" {...register("time")}>
          {timeList.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        {!!errors.time?.message && (
          <span className="errorSpan">{errors.time.message}</span>
        )}
      </p>
      <TextInput
        register={register as UseFormRegister<Forms>}
        label="Number of People"
        inputId="numberOfPeople"
        type="number"
        errorMsg={errors.numberOfPeople?.message}
      />
      <p>
        <label htmlFor="notes">Additional Notes</label>
        <textarea id="notes" {...register("additionalNotes")}></textarea>
        {!!errors.additionalNotes?.message && (
          <span className="errorSpan">{errors.additionalNotes.message}</span>
        )}
      </p>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ReservationForm;
