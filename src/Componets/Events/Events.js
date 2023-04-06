import { useEventContext } from "../../contexts/EventContext"
import EventItem from "./EventItem"

export default function Events() {

	const { events } =  useEventContext();

	return (
		<>
			<section id="event">
				<div className="container">
					<div className="row">
						<div className="col-sm-11 col-md-16">
							<div
								id="event-carousel"
								className="carousel slide"
								data-interval="false"
							>
								<h2 className="heading">THE ROCKING EVENTS</h2>
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


											{events.map(x =>
												<EventItem key={x._id} {...x} />
											)}

											{events.length === 0 && (
												<h3 className="no-event">No Events yet</h3>
											)}


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

	)
}