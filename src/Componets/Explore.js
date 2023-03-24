


export default function Exlore() {
  return (
    <>
    
      <section id="explore" >
        
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
   
    </>
  );
}