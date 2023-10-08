import { useState } from "react"
import { AiOutlinePlayCircle } from 'react-icons/ai'
import { Link } from "react-router-dom"

import Stars from "./Stars"
import TrailerModal from './TrailerModal'

export default function Hero({ ...props }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleWatchTrailerClick() {
    document.body.style.overflow = 'hidden'
    return setIsModalOpen(true)
  }

  function handleCloseModal() {
    document.body.style.overflow = 'unset'
    setIsModalOpen(false)
  }

  return (
    <>
      <section className="media-hero-container">
        <Link to={props.link} style={{ display: 'contents' }}>
          <div className="img-container">
            <img
              src={props.image}
              className="hero-poster"
            />
          </div>
        </Link>
        <div className="hero-info">
          <Link to={props.link} style={{ display: 'contents' }}>
            <h1>{props.title}</h1>
            <div className="hero-container-info-container">
              <div className="hero-rating">
                <Stars
                  rating={props.rating}
                  reviews={props.reviews}
                />
              </div>
              <div className="hero-media-info">
                <span className="hero-media-date">
                  {props.airDate}
                </span>
                <span>
                  {props.seasons}
                </span>
              </div>
            </div>
            <p className="hero-media-overview">
              {props.overview}
            </p>
          </Link>
          <button onClick={handleWatchTrailerClick} className="hero-button">
            <AiOutlinePlayCircle />Watch Trailer
          </button>
        </div>
      </section>
      {isModalOpen && (
        <TrailerModal
          onClose={handleCloseModal}
          videoUrl={`https://www.youtube.com/watch?v=${props.url}`} />
      )}
    </>
  )
}