import React, { useState } from "react";
import classes from "./ShowCard.module.css";
import ShowContent from "./ShowContent";
const ShowCard = ({ show }) => {
  const [isHovering, setIsHovering] = useState(null);

  return (
    <>
      {
        <div
          className={classes.card}
          onMouseOver={() => setIsHovering(show.item.id)}
          onMouseLeave={() => setIsHovering(null)}
        >
          <img
            alt="example"
            src={show.item.image.thumbnailImage}
            className={classes.image}
          />
          {isHovering === show.item.id && (
            <div class={classes.content}>
              <h2>
                <b>{show.item.title}</b>
              </h2>
              <ShowContent genres={show.item.genres} />
            </div>
          )}
        </div>
      }
      {/* {!isFetching && (
        <div className={classes.card}>
          <ShowCardSkeleton />
        </div>
      )} */}
    </>
  );
};

export default ShowCard;
