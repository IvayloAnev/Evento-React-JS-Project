export default function Home(){
    return(
        <>
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
        </>
    )
}