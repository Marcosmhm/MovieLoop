import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import placeHolder from "../src/assets/images/poster_placeholder.jpg";
import Stars from "./Stars";

export default function PersonCredits({ handleFilterChange, selectedFilter, ...props }) {
  let creditsArray = [];
  selectedFilter === "cast"
    ? (creditsArray = props.credits.cast)
    : (creditsArray = props.credits.crew);

  const creditsElements = creditsArray
    .sort((a, b) => b.vote_count - a.vote_count)
    .map((item, index) => (
      <div
        className="person-credits-card"
        key={`${item.media_type}-${item.id}-${index}`}
      >
        <Link to={`/${item.media_type}/${item.id}`}>
          <LazyLoadImage
            key={`${item.media_type}-${item.id}-${index}`}
            src={
              item.poster_path
                ? `https://image.tmdb.org/t/p/w342/${item.poster_path}`
                : placeHolder
            }
            effect="blur"
            className="person-credits-image"
          />
          <div className="person-credits-info">
            <span className="person-credits-name">
              {item.name || item.title}
            </span>
            <br />
            <Stars rating={(item.vote_average?.toFixed(2) / 2).toFixed(2)} />
            <span className="slider-item-reviews-vote">
              {(item.vote_average?.toFixed(2) / 2).toFixed(2)}
            </span>
            <br />
            <span className="person-credits-job">
              {item.character ? `${item.character}` : item.job}
            </span>
          </div>
        </Link>
      </div>
    ));

  return (
    <>
      <select
        className="detail-media-filter"
        id="filter"
        value={selectedFilter}
        onChange={(e) => handleFilterChange(e.target.value)}
      >
        <option value="cast">Cast</option>
        <option value="crew">Crew</option>
      </select>
      <section className="person-credits-wrapper">{creditsElements}</section>
    </>
  );
}
