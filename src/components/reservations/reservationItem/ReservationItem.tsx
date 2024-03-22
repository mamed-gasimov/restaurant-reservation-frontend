import { useContext } from "react";

import { sendUpdateReservation } from "@services/sendRequest";
import { AuthContext } from "@context/authContext";
import { ReservationResponse } from "src/types/apiResponse";
import reservationItemCss from "./reservationItem.module.css";
import { toast } from "react-toastify";

interface Props {
  reservation: ReservationResponse;
  setUpdatePage: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReservationItem = ({ reservation, setUpdatePage }: Props) => {
  const { authToken } = useContext(AuthContext);

  const confirmAction = (approveClicked: "approved" | "rejected") => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const sendRequest = async () => {
        const response = await sendUpdateReservation(
          "/reservations",
          { reservationId: reservation._id, status: approveClicked },
          authToken
        );

        if (response?.status === "error" || !response) {
          toast.error("Something went wrong!");
        } else if (response?.status === "success") {
          toast.success(response.data.message);
          setUpdatePage((prev) => !prev);
        }
      };

      sendRequest();
    }
  };

  return (
    <div className={reservationItemCss.reservationItem}>
      <p>
        Status of reservation: <span>{reservation?.status}</span>
      </p>
      <p>
        Reservation was created by <span>{reservation?.userFullName}</span>
      </p>
      <p>
        Email: <span>{reservation?.userEmail}</span>
      </p>
      <p>
        Date: <span>{reservation?.date}</span>
      </p>
      <p>
        Time: <span>{reservation?.time}</span>
      </p>
      <p>
        Number of People: <span>{reservation?.numberOfPeople}</span>
      </p>
      {reservation?.additionalNotes && (
        <p>
          Addional Notes: <strong>{reservation.additionalNotes}</strong>
        </p>
      )}
      <div className={reservationItemCss.btnContainer}>
        <button className="btn" onClick={() => confirmAction("approved")}>
          Approve
        </button>
        <button
          className="btn btn-alt"
          onClick={() => confirmAction("rejected")}
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default ReservationItem;
