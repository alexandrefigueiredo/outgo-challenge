import { useEffect, useState } from "react";

import { getCastByMovieId } from "../../services/api";
import { ICast } from "../../services/interfaces";
import { Loader } from "../Loader/Loader";
import styles from "./styles.module.scss";

const IMG_URL = process.env.IMG_URL;

interface ICastProps {
  movieId?: string;
}

export function Cast({ movieId }: ICastProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cast, setCast] = useState<ICast[]>([]);

  useEffect(() => {
    if (movieId) {
      setIsLoading(true);
      getCastByMovieId(movieId).then(({ cast }) => {
        setCast(cast.slice(0, 8));
        setIsLoading(false);
      });
      
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.cast}>
          {cast &&
            cast.map((cast) => {
              return (
                <div className={styles.castCard} key={cast.id}>
                  {cast.profile_path ? (
                    <img
                      className={styles.castImg}
                      src={`${IMG_URL}${cast.profile_path}`}
                      alt={cast.name}
                    />
                  ) : (
                    <div className={styles.castImg}></div>
                  )}
                  <h5 className={styles.castName}>{cast.name}</h5>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
}
