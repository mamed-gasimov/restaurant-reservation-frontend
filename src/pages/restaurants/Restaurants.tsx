import { FormEventHandler, SyntheticEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { RestaurantItemCard } from "@components/index";
import { sendGetRestaurantsRequest } from "@services/sendRequest";
import { GetRestaurantsApiResponse, Restaurant } from "src/types/apiResponse";
import restaurantsCss from "./restaurants.module.css";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [searchInput, setSearchInput] = useState("");

  const getRestaurants = async (
    e?: SyntheticEvent<HTMLFormElement, SubmitEvent>
  ) => {
    if (e) {
      e.preventDefault();
    }

    const response = (await sendGetRestaurantsRequest(
      `/restaurants${searchInput ? "?name=" + searchInput : ""}`
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
      <form
        className={restaurantsCss.searchContainer}
        onSubmit={getRestaurants as FormEventHandler<HTMLFormElement>}
      >
        <div>
          <input
            placeholder="Enter restaurant name"
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">
          Search
        </button>
      </form>
      <ul className={restaurantsCss.productsGrid}>
        {restaurants?.map((item) => (
          <RestaurantItemCard
            key={item?._id}
            id={item?._id}
            name={item?.name}
            image={item?.image}
          />
        ))}
      </ul>
    </>
  );
};

export default Restaurants;
