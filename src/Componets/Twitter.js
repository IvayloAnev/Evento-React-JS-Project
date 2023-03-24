export default function Twitter(){
   return(
    <>
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
    </>
   );
}