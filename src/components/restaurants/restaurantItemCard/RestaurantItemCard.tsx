import { Link } from "react-router-dom";

import restaurantItemCardCss from "./restaurantItemCard.module.css";
import { ROUTES } from "@router/routeNames";

interface Props {
  id: string;
  name: string;
  image: string;
}

const RestaurantItemCard = ({ id, name, image }: Props) => {
  return (
    <li>
      <article className={restaurantItemCardCss.restaurantItem}>
        <img src={image} alt={name} />
        <div className={restaurantItemCardCss.restaurantItemContent}>
          <h2>{name}</h2>
          <div className={restaurantItemCardCss.restaurantItemActions}>
            <Link to={`${ROUTES.restaurants}/${id}`} className="btn btn-alt">
              View Details
            </Link>
          </div>
        </div>
      </article>
    </li>
  );
};

export default RestaurantItemCard;
