import { ReservationResponse } from "src/types/apiResponse";
import reservationItemCss from "./reservationItem.module.css";

interface Props {
  reservation: ReservationResponse;
}

const ReservationItem = ({ reservation }: Props) => {
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
        <button className="btn">Approve</button>
        <button className="btn btn-alt">Reject</button>
      </div>
    </div>
  );
};

export default ReservationItem;
