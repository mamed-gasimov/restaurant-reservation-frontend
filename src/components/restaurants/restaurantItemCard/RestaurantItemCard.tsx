import restaurantItemCardCss from "./restaurantItemCard.module.css";

const RestaurantItemCard = () => {
  return (
    <li>
      <article className={restaurantItemCardCss.restaurantItem}>
        <img src="/src/assets/1.jpeg" alt="new restaurant" />
        <div className={restaurantItemCardCss.restaurantItemContent}>
          <h2>new restaurant</h2>
          <div className={restaurantItemCardCss.restaurantItemActions}>
            <a
              href="/restaurants/65f96f71f9d7eba98736ddc3"
              className="btn btn-alt"
            >
              View Details
            </a>
          </div>
        </div>
      </article>
    </li>
  );
};

export default RestaurantItemCard;
