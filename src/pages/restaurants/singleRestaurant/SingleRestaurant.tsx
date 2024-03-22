import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import {
  sendGetReservations,
  sendGetSingleRestaurant,
} from "@services/sendRequest";
import {
  GetReservationsApiResponse,
  GetRestaurantApiResponse,
  ReservationResponse,
  Restaurant,
} from "src/types/apiResponse";
import restaurantCss from "./singleRestaurant.module.css";
import { AuthContext } from "@context/authContext";
import { ReservationForm, ReservationItem } from "@components/index";

const SingleRestaurant = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const [listOfReservations, setListOfReservations] = useState<
    ReservationResponse[]
  >([]);
  const [updatePage, setUpdatePage] = useState(false);
  const { isAuth, restaurantOwner, authToken } = useContext(AuthContext);

  useEffect(() => {
    if (id) {
      const getRestaurantInfo = async (id: string) => {
        const response = (await sendGetSingleRestaurant(
          `/restaurants/${id}`
        )) as GetRestaurantApiResponse;

        if (response?.status === "error" || !response) {
          toast.error("Something went wrong!");
        } else if (response?.status === "success") {
          setRestaurant(response.data.restaurant);
        }
      };

      getRestaurantInfo(id);

      if (isAuth && restaurantOwner?.restaurantId === id) {
        const getReservations = async (id: string) => {
          const response = (await sendGetReservations(
            `/reservations/${id}`,
            authToken
          )) as GetReservationsApiResponse;

          if (response?.status === "error" || !response) {
            toast.error("Something went wrong!");
          } else if (response?.status === "success") {
            setListOfReservations(response.data.reservations);
          }
        };

        getReservations(id);
      }
    }
  }, [id, restaurantOwner?.restaurantId, updatePage]);

  return (
    <div className={restaurantCss.container}>
      <h1>{restaurant?.name}</h1>
      <img src={restaurant?.image} className={restaurantCss.restaurantImage} />
      <p className={restaurantCss.description}>{restaurant?.description}</p>
      <section className={restaurantCss.reservationFormSection}>
        {!isAuth && (
          <h2>Please Login to Your account to make a reservation.</h2>
        )}
        {isAuth && restaurantOwner?.restaurantId !== id && (
          <ReservationForm restaurantId={id} />
        )}
        {isAuth &&
          restaurantOwner?.restaurantId === id &&
          listOfReservations?.length > 0 &&
          listOfReservations.map((item) => (
            <ReservationItem
              key={item?._id}
              reservation={item}
              setUpdatePage={setUpdatePage}
            />
          ))}
        {isAuth &&
          restaurantOwner?.restaurantId === id &&
          listOfReservations?.length === 0 && (
            <p>There is no reservation for now!</p>
          )}
      </section>
    </div>
  );
};

export default SingleRestaurant;
