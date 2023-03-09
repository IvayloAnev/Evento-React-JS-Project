export default function Event(){
    return(
        <>
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
        </>
    );
}