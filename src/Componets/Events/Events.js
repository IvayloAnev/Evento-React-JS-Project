import EvenetItem from "./EvenetItem"

export default function Events({
	events,
}) {
	return (
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
												<EvenetItem key={x._id} {...x} />
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