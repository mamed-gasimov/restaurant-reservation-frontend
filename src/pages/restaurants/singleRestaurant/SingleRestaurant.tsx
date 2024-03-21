import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { sendGetSingleRestaurant } from "@services/sendRequest";
import { GetRestaurantApiResponse, Restaurant } from "src/types/apiResponse";
import restaurantCss from "./singleRestaurant.module.css";

const SingleRestaurant = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState<Restaurant>();

  useEffect(() => {
    if (id) {
      console.log(id);

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
    </div>
  );
};

export default SingleRestaurant;
