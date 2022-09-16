import { Link } from "react-router-dom";
import { Rating } from "../Rating";

import { IMG_URL } from "../../services/api";

import styles from "./styles.module.scss";

interface ICardLargeProps {
  id: number;
  imageUrl: string;
  title: string;
  rating: string | number;
}

export function CardLarge({id, imageUrl, rating, title}: ICardLargeProps) {
  return (
    <Link to={`/movie/${id}`}>
      <div className={styles.cardLarge}>
        <img src={`${IMG_URL}${imageUrl}`} className={styles.cardImg} />
        <h3 className={styles.cardTitle}>{title}</h3>
        <Rating score={rating} />
      </div>
    </Link>
  );
}