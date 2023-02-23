import React from "react";
import Script from "./Script";
import "./Navbar.css";
import "./Patron.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
export default function Ratepatron() {
  return (
    <div>
      <div>
        <nav
          className="navbar bg-light fixed-top"
          style={{ backgroundColor: "white" }}
        >
          <div className="container-fluid">
            <div className="left-components">
              <Navbar className="nav_artist" />
              <a className="navbar-brand " href="/">
                <span className="text-danger text">
                  {" "}
                  <strong>ekala</strong>
                </span>
                kaar
              </a>
            </div>
            <div className="right-component">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2 "
                  type="search"
                  placeholder="Search artist"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-danger btn-search "
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>

        <div className="rate-patron">
          <div className="rate-patron-header1 text-center">
            How was your experience?
          </div>
          <div className="rate-patron-header2 text-center">
            Let us know by rating the patron!
          </div>
          <div className="rate-patron-body container">
            <form action="#" onsubmit="return(validateRatePatron());">
              <div className="rate-patron-body-patron-rating">
                <div className="row">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-2 col-form-label rate-patron-body-patron-rating-text"
                  >
                    Rating:
                  </label>
                  <div className="col-sm-10">
                    <fieldset className="rate-patron-body-patron-rating-fieldset">
                      <span className="star-cb-group">
                        <input
                          type="radio"
                          id="rating-5"
                          name="rating"
                          defaultValue={5}
                        />
                        <label htmlFor="rating-5" style={{ fontSize: 26 }}>
                          5
                        </label>
                        <input
                          type="radio"
                          id="rating-4"
                          name="rating"
                          defaultValue={4}
                        />
                        <label htmlFor="rating-4" style={{ fontSize: 26 }}>
                          4
                        </label>
                        <input
                          type="radio"
                          id="rating-3"
                          name="rating"
                          defaultValue={3}
                        />
                        <label htmlFor="rating-3" style={{ fontSize: 26 }}>
                          3
                        </label>
                        <input
                          type="radio"
                          id="rating-2"
                          name="rating"
                          defaultValue={2}
                        />
                        <label htmlFor="rating-2" style={{ fontSize: 26 }}>
                          2
                        </label>
                        <input
                          type="radio"
                          id="rating-1"
                          name="rating"
                          defaultValue={1}
                        />
                        <label htmlFor="rating-1" style={{ fontSize: 26 }}>
                          1
                        </label>
                      </span>
                    </fieldset>
                  </div>
                  <div className="w-100" />
                  <div className="col-sm-10 rate-patron-body-patron-rating-number"></div>
                </div>
              </div>
              <div className="rate-patron-body-patron-feedback">
                <div className="mb-3">
                  <label
                    htmlFor="feedback"
                    className="form-label rate-patron-body-patron-feedback-text"
                  >
                    Feedback:
                  </label>
                  <textarea
                    className="form-control"
                    id="feedback"
                    rows={5}
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="d-grid gap-1 d-md-flex justify-content-center edit-patron-profile-save-changes">
                <button
                  className="btn btn-danger me-md-2 btn-new"
                  style={{ marginTop: "10px" }}
                  type="submit"
                  value="Submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    </div>
  );
}
