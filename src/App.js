import Header from "./Commponets/Header";

function App() {
  return (
    <>

    <Header />
    <section id="home">
      <div id="main-slider" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#main-slider" data-slide-to={0} className="active" />
          <li data-target="#main-slider" data-slide-to={1} />
          <li data-target="#main-slider" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="item active">
            <img
              className="img-responsive"
              src="images/slider/bg1.jpg"
              alt="slider"
            />
            <div className="carousel-caption">
              <h2>register for our next event </h2>
              <h4>full event package only @$199</h4>
              <a href="#contact">
                GRAB YOUR TICKETS <i className="fa fa-angle-right" />
              </a>
            </div>
          </div>
          <div className="item">
            <img
              className="img-responsive"
              src="images/slider/bg2.jpg"
              alt="slider"
            />
            <div className="carousel-caption">
              <h2>register for our next event </h2>
              <h4>full event package only @$199</h4>
              <a href="#contact">
                GRAB YOUR TICKETS <i className="fa fa-angle-right" />
              </a>
            </div>
          </div>
          <div className="item">
            <img
              className="img-responsive"
              src="images/slider/bg3.jpg"
              alt="slider"
            />
            <div className="carousel-caption">
              <h2>register for our next event </h2>
              <h4>full event package only @$199</h4>
              <a href="#contact">
                GRAB YOUR TICKETS <i className="fa fa-angle-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*/#home*/}
    <section id="explore">
      <div className="container">
        <div className="row">
          <div className="watch">
            <img className="img-responsive" src="images/watch.png" alt="" />
          </div>
          <div className="col-md-4 col-md-offset-2 col-sm-5">
            <h2>our next event in</h2>
          </div>
          <div className="col-sm-7 col-md-6">
            <ul id="countdown">
              <li>
                <span className="days time-font">00</span>
                <p>days </p>
              </li>
              <li>
                <span className="hours time-font">00</span>
                <p className="">hours </p>
              </li>
              <li>
                <span className="minutes time-font">00</span>
                <p className="">minutes</p>
              </li>
              <li>
                <span className="seconds time-font">00</span>
                <p className="">seconds</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="cart">
          <a href="#">
            <i className="fa fa-shopping-cart" /> <span>Purchase Tickets</span>
          </a>
        </div>
      </div>
    </section>
    {/*/#explore*/}
    <section id="event">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-9">
            <div
              id="event-carousel"
              className="carousel slide"
              data-interval="false"
            >
              <h2 className="heading">THE ROCKING Performers</h2>
              <a
                className="even-control-left"
                href="#event-carousel"
                data-slide="prev"
              >
                <i className="fa fa-angle-left" />
              </a>
              <a
                className="even-control-right"
                href="#event-carousel"
                data-slide="next"
              >
                <i className="fa fa-angle-right" />
              </a>
              <div className="carousel-inner">
                <div className="item active">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="single-event">
                        <img
                          className="img-responsive"
                          src="images/event/event1.jpg"
                          alt="event-image"
                        />
                        <h4>Chester Bennington</h4>
                        <h5>Vocal</h5>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="single-event">
                        <img
                          className="img-responsive"
                          src="images/event/event2.jpg"
                          alt="event-image"
                        />
                        <h4>Mike Shinoda</h4>
                        <h5>vocals, rhythm guitar</h5>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="single-event">
                        <img
                          className="img-responsive"
                          src="images/event/event3.jpg"
                          alt="event-image"
                        />
                        <h4>Rob Bourdon</h4>
                        <h5>drums</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="single-event">
                        <img
                          className="img-responsive"
                          src="images/event/event1.jpg"
                          alt="event-image"
                        />
                        <h4>Chester Bennington</h4>
                        <h5>Vocal</h5>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="single-event">
                        <img
                          className="img-responsive"
                          src="images/event/event2.jpg"
                          alt="event-image"
                        />
                        <h4>Mike Shinoda</h4>
                        <h5>vocals, rhythm guitar</h5>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="single-event">
                        <img
                          className="img-responsive"
                          src="images/event/event3.jpg"
                          alt="event-image"
                        />
                        <h4>Rob Bourdon</h4>
                        <h5>drums</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="guitar">
            <img
              className="img-responsive"
              src="images/guitar.png"
              alt="guitar"
            />
          </div>
        </div>
      </div>
    </section>
    {/*/#event*/}
    <section id="about">
      <div className="guitar2">
        <img className="img-responsive" src="images/guitar2.jpg" alt="guitar" />
      </div>
      <div className="about-content">
        <h2>About Evento</h2>
        <p>
          We have created an extremely positive and relaxed environment all geared
          towards developing your skills whether you are an absolute beginner
          trying to get off the ground or an accomplished player looking to move
          to the next level. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s
        </p>
        <a href="#" className="btn btn-primary">
          View Date &amp; Place <i className="fa fa-angle-right" />
        </a>
      </div>
    </section>
    {/*/#about*/}
    <section id="twitter">
      <div id="twitter-feed" className="carousel slide" data-interval="false">
        <div className="twit">
          <img className="img-responsive" src="images/twit.png" alt="twit" />
        </div>
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <div className="text-center carousel-inner center-block">
              <div className="item active">
                <img src="images/twitter/twitter1.png" alt="" />
                <p>
                  In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus
                  suscipit{" "}
                </p>
                <a href="#">http://t.co/yY7s1IfrAb 2 days ago</a>
              </div>
              <div className="item">
                <img src="images/twitter/twitter2.png" alt="" />
                <p>
                  In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus
                  suscipit{" "}
                </p>
                <a href="#">http://t.co/yY7s1IfrAb 2 days ago</a>
              </div>
              <div className="item">
                <img src="images/twitter/twitter3.png" alt="" />
                <p>
                  In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus
                  suscipit{" "}
                </p>
                <a href="#">http://t.co/yY7s1IfrAb 2 days ago</a>
              </div>
            </div>
            <a
              className="twitter-control-left"
              href="#twitter-feed"
              data-slide="prev"
            >
              <i className="fa fa-angle-left" />
            </a>
            <a
              className="twitter-control-right"
              href="#twitter-feed"
              data-slide="next"
            >
              <i className="fa fa-angle-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
    {/*/#twitter-feed*/}
    <section id="sponsor">
      <div id="sponsor-carousel" className="carousel slide" data-interval="false">
        <div className="container">
          <div className="row">
            <div className="col-sm-10">
              <h2>Sponsors</h2>
              <a
                className="sponsor-control-left"
                href="#sponsor-carousel"
                data-slide="prev"
              >
                <i className="fa fa-angle-left" />
              </a>
              <a
                className="sponsor-control-right"
                href="#sponsor-carousel"
                data-slide="next"
              >
                <i className="fa fa-angle-right" />
              </a>
              <div className="carousel-inner">
                <div className="item active">
                  <ul>
                    <li>
                      <a href="#">
                        <img
                          className="img-responsive"
                          src="images/sponsor/sponsor1.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="img-responsive"
                          src="images/sponsor/sponsor2.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="img-responsive"
                          src="images/sponsor/sponsor3.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="img-responsive"
                          src="images/sponsor/sponsor4.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="img-responsive"
                          src="images/sponsor/sponsor5.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="img-responsive"
                          src="images/sponsor/sponsor6.png"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="item">
                  <ul>
                    <li>
                      <a href="#">
                        <img
                          className="img-responsive"
                          src="images/sponsor/sponsor6.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="img-responsive"
                          src="images/sponsor/sponsor5.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="img-responsive"
                          src="images/sponsor/sponsor4.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="img-responsive"
                          src="images/sponsor/sponsor3.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="img-responsive"
                          src="images/sponsor/sponsor2.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="img-responsive"
                          src="images/sponsor/sponsor1.png"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="light">
          <img className="img-responsive" src="images/light.png" alt="" />
        </div>
      </div>
    </section>
    {/*/#sponsor*/}
    <section id="contact">
      <div id="map">
        <div id="gmap-wrap">
          <div id="gmap"></div>
        </div>
      </div>
      {/*/#map*/}
      <div className="contact-section">
        <div className="ear-piece">
          <img className="img-responsive" src="images/ear-piece.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-sm-offset-4">
              <div className="contact-text">
                <h3>Contact</h3>
                <address>
                  E-mail: promo@party.com
                  <br />
                  Phone: +1 (123) 456 7890
                  <br />
                  Fax: +1 (123) 456 7891
                </address>
              </div>
              <div className="contact-address">
                <h3>Contact</h3>
                <address>
                  Unit C2, St.Vincent's Trading Est.,
                  <br />
                  Feeder Road,
                  <br />
                  Bristol, BS2 0UY
                  <br />
                  United Kingdom
                </address>
              </div>
            </div>
            <div className="col-sm-5">
              <div id="contact-section">
                <h3>Send a message</h3>
                <div
                  className="status alert alert-success"
                  style={{ display: "none" }}
                />
                <form
                  id="main-contact-form"
                  className="contact-form"
                  name="contact-form"
                  method="post"
                  action="sendemail.php"
                >
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      required="required"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      required="required"
                      placeholder="Email ID"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      required="required"
                      className="form-control"
                      rows={4}
                      placeholder="Enter your message"
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary pull-right">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*/#contact*/}
    <footer id="footer">
      <div className="container">
        <div className="text-center">
          <p>
            {" "}
            Copyright ©2014
            <a target="_blank" href="http://shapebootstrap.net/">
              {" "}
              Evento{" "}
            </a>
            Theme. All Rights Reserved. <br /> Designed by{" "}
            <a target="_blank" href="http://shapebootstrap.net/">
              ShapeBootstrap
            </a>
          </p>
        </div>
      </div>
    </footer>
    {/*/#footer*/}
  </>
  
  );
}

export default App;
