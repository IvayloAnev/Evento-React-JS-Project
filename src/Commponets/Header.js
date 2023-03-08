export default function Header(){
    return(
        <>
            <header id="header" role="banner">
      <div className="main-nav">
        <div className="container">
          <div className="header-top">
            <div className="pull-right social-icons">
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
              <a href="#">
                <i className="fa fa-google-plus" />
              </a>
              <a href="#">
                <i className="fa fa-youtube" />
              </a>
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
              <a className="navbar-brand" href="index.html">
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
                  <a href="#home">Home</a>
                </li>
                <li className="scroll">
                  <a href="#explore">Explore</a>
                </li>
                <li className="scroll">
                  <a href="#event">Event</a>
                </li>
                <li className="scroll">
                  <a href="#about">About</a>
                </li>
                <li className="no-scroll">
                  <a href="#twitter">Twitter</a>
                </li>
                <li>
                  <a className="no-scroll" href="#" target="_blank">
                    PURCHASE TICKETS
                  </a>
                </li>
                <li className="scroll">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/*/#header*/}
        </>
    )
}