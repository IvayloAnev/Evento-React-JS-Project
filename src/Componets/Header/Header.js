import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { useEventContext } from "../../contexts/EventContext"


export default function Header() {
  const { isAuthenticated, userEmail } = useContext(AuthContext);
  const { events } = useEventContext();

  return (
    <>
      <header id="header" role="banner">
        <div className="main-nav">
          <div className="container">
            <div className="header-top">
              <div className="pull-right social-icons">
                <Link to="#">
                  <i className="fa fa-twitter" />
                </Link>
                <Link to="#">
                  <i className="fa fa-facebook" />
                </Link>
                <Link to="#">
                  <i className="fa fa-google-plus" />
                </Link>
                <Link to="#">
                  <i className="fa fa-youtube" />
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <a className="navbar-brand" href="/">
                  <img
                    className="img-responsive"
                    src="images/logo.png"
                    alt="logo"
                  />
                </a>
              </div>
              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">

                  <li className="scroll active">

                    <Link to="/">Home</Link>
                  </li>

                  <li className="scroll">
                    <Link to="/events">Events</Link>
                  </li>
                  <li className="scroll">
                    <Link to="/about">About</Link>
                  </li>

                  {userEmail && (
                    <li className="no-scroll">
                      <Link to="/create">Add Event</Link>
                    </li>
                  )}

                  {events.length != 0 && (
                    <li className="scroll">
                      <Link to="/explore">Explore</Link>
                    </li>
                  )}

                  <li className="scroll">
                    <Link to="/contact">Contact</Link>
                  </li>

                  {userEmail && (
                    <li className="no-scroll">
                      <Link to="/logout">Logout</Link>
                    </li>
                  )}

                  {!userEmail && (
                    <li className="no-scroll">
                      <Link to="/register">Register</Link>
                    </li>
                  )}

                  {!userEmail && (
                    <li className="no-scroll">
                      <Link to="/login">Login</Link>
                    </li>
                  )}

                  {userEmail && (
                    <li className="no-scroll">
                      <a>{userEmail}</a>
                    </li>
                  )}

                </ul>
              </div>

            </div>
          </div>
        </div>
      </header >
      {/*/#header*/}
    </>
  )
}