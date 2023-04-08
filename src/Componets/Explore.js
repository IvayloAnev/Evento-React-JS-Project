import { useEventContext } from "../contexts/EventContext";
import { useState, useEffect } from "react";

export default function Exlore() {

  const { events } = useEventContext();

  const findClosest = (data, accessor, target = Date.now()) =>
    data.reduce((prev, curr) => {
      const a = Math.abs(accessor(curr).getTime() - target);
      const b = Math.abs(accessor(prev).getTime() - target);
      return a - b < 0 ? curr : prev;
    });

  const processDateString = (dateString) => {
    const [date, month, year] = dateString.split('-').map(Number);
    return new Date(year, month - 1, date);
  };

  const closest = findClosest(events, ({ date }) => processDateString(date));
  console.log(closest);

  const deadline = closest.date;
  //console.log(deadline);


  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);


   const getTime = () => {
     const time = Date.parse(deadline) - Date.now();
     //console.log(Date.parse(deadline));
     //console.log(Date.now())

     setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
     setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
     setMinutes(Math.floor((time / 1000 / 60) % 60));
     setSeconds(Math.floor((time / 1000) % 60));
   };


  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);
    //console.log(interval)
    return () => clearInterval(interval);
  }, [deadline , getTime]);



  return (

    <>

      <section id="explore" >

        <div className="container">
          <div className="row">
            <div className="watch">
              <img className="img-responsive" src="images/watch.png" alt="" />
            </div>
            <div className="col-md-4 col-md-offset-2 col-sm-5">
              <h2>{closest.name}</h2>
            </div>
            <div className="col-md-3 col-md-offset-2 col-sm-5">
              <h2>{closest.location}</h2>
            </div>

            <div className="col-md-4 col-md-offset-2 col-sm-5">
              <h2>our next event in</h2>
            </div>

            <div className="col-sm-7 col-md-6">
              <ul id="countdown">
                <li>
                  <span className="days time-font">{days}</span>
                  <p>days </p>
                </li>
                <li>
                  <span className="hours time-font">{hours}</span>
                  <p className="">hours </p>
                </li>
                <li>
                  <span className="minutes time-font">{minutes}</span>
                  <p className="">minutes</p>
                </li>
                <li>
                  <span className="seconds time-font">{seconds}</span>
                  <p className="">seconds</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="cart">
            {/*<a href={`/events/${closest._id}`}>
              <i className="fa fa-shopping-cart" /> <span>Ad Comments</span>
            </a>*/}
          </div>
        </div>

      </section>
      {/*/#explore*/}

    </>
  );
}