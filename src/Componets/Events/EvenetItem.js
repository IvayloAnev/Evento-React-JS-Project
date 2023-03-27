import { Link } from "react-router-dom";

export default function EvenetItem({
    _id,
    name,
    imgUrl,
    date,
    location,
    hour
}) {
    return (
        <div className="col-sm-4">
            <div className="single-event">
                <img
                    className="imgUrl"
                    src={imgUrl}
                    alt="event-image"

                />
                <h2>{name}</h2>
                <h3>{date}-{hour}</h3>
                <h4>{location}</h4>
                <div class="details-btn">
                    <Link to={`/events/${_id}`}  class="details">More</Link>
                </div>
            </div>
        </div>
    )
}