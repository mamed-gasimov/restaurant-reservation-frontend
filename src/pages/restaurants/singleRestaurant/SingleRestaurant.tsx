import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { sendGetSingleRestaurant } from "@services/sendRequest";
import { GetRestaurantApiResponse, Restaurant } from "src/types/apiResponse";
import restaurantCss from "./singleRestaurant.module.css";
import { AuthContext } from "@context/authContext";
import { ReservationForm } from "@components/index";

const SingleRestaurant = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const { isAuth } = useContext(AuthContext);

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
    }
  }, [id]);

  return (
    <div className={restaurantCss.container}>
      <h1>{restaurant?.name}</h1>
      <img src={restaurant?.image} className={restaurantCss.restaurantImage} />
      <p className={restaurantCss.description}>{restaurant?.description}</p>
      <section className={restaurantCss.reservationFormSection}>
        {!isAuth && (
          <h2>Please Login to Your account to make a reservation.</h2>
        )}
        {isAuth && <ReservationForm restaurantId={id} />}
      </section>
    </div>
  );
};

export default SingleRestaurant;
