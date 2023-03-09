export default function Sponsor(){
    return(
        <>
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
        </>
    );
}