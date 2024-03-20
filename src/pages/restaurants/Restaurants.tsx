import { RestaurantItemCard } from "@components/index";
import restaurantsCss from "./restaurants.module.css";

const Restaurants = () => {
  return (
    <>
      <div className={restaurantsCss.searchContainer}>
        <div>
          <input placeholder="Enter restaurant name" />
        </div>
        <button className="btn">Search</button>
      </div>
      <ul className={restaurantsCss.productsGrid}>
        {[1, 2, 3, 4, 5].map((item) => (
          <RestaurantItemCard key={item} />
        ))}
      </ul>
    </>
  );
};

export default Restaurants;
