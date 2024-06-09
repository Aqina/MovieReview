import React from 'react'
import { Link } from 'react-router-dom';

//header page
export default function Navbar(props) {
    const { title } = props;
    // const { home } = props;
    // const { categories } = props;
    // const { contact } = props;
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/MovieReview">{title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">{home}</Link>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link" href="/link">{contact}</a>
              </li> */}
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {categories}
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/action">Romance</a></li>
                  <li><a className="dropdown-item" href="/another-action">Thriller</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/something-else">More...</a></li>
                </ul>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled link</a>
              </li> */}
            {/* </ul> */}
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search input" />
              <button className="btn btn-outline-success" type="submit" aria-label="Search button">Search</button>
            </form> */}
          {/* </div> */}
        </div>
      </nav>
    );
}