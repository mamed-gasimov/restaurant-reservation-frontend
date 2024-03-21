import restaurantItemCardCss from "./restaurantItemCard.module.css";

interface Props {
  name: string;
  image: string;
}

const RestaurantItemCard = ({ name, image }: Props) => {
  return (
    <li>
      <article className={restaurantItemCardCss.restaurantItem}>
        <img src={image} alt={name} />
        <div className={restaurantItemCardCss.restaurantItemContent}>
          <h2>{name}</h2>
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
