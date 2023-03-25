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
            <h4>{name}</h4>
            <h5>{date}-{hour}</h5>
            <h5>{location}</h5>
        </div>
        </div>
    )
}