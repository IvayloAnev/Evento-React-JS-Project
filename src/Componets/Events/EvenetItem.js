export default function EvenetItem({
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
                    <a href="/book/{{_id}}/details" class="details">More</a>
                </div>
            </div>
        </div>
    )
}