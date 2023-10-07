import { Link } from "react-router-dom";

export default function notFound() {
  return (
    <>
      <div className="not-found-container">
        <h1>404</h1>
        <h2>This page could not be found!</h2>
        <h3>Sorry, but the page you are looking for does not exist</h3>
        <button className="not-found-button">
          <Link to='/'>
            Go Back
          </Link>
        </button>
      </div>
    </>
  )
}