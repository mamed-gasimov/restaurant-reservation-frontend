import { useEffect, useState } from "react";

import { RestaurantItemCard } from "@components/index";
import { sendGetRestaurantsRequest } from "@services/sendRequest";
import restaurantsCss from "./restaurants.module.css";
import { GetRestaurantsApiResponse, Restaurant } from "src/types/apiResponse";
import { toast } from "react-toastify";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const getRestaurants = async () => {
    const response = (await sendGetRestaurantsRequest(
      "/restaurants"
    )) as GetRestaurantsApiResponse;

    if (response?.status === "error" || !response) {
      toast.error("Something went wrong!");
    } else if (response?.status === "success") {
      setRestaurants(response.data.restaurants);
    }
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <>
      <div className={restaurantsCss.searchContainer}>
        <div>
          <input placeholder="Enter restaurant name" />
        </div>
        <button className="btn">Search</button>
      </div>
      <ul className={restaurantsCss.productsGrid}>
        {restaurants?.map((item) => (
          <RestaurantItemCard
            key={item?._id}
            name={item?.name}
            image={item?.image}
          />
        ))}
      </ul>
    </>
  );
};

export default Restaurants;
