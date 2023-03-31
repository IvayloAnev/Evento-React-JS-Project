import styles from './edit.module.css'
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { eventServiceFactory } from "../../services/eventService";

export default function Edit({
    onEventEditSubmit,
}) {
    const { eventId } = useParams();
    const eventService = useService(eventServiceFactory);
    const { values, changeHandler, onSubmit, changeValues } = useForm({
        _id: '',
        name: '',
        imageUrl: '',
        location: '',
        date: '',
        hour: '',
        description: '',
        website: ''
    }, onEventEditSubmit);

    useEffect(() => {
        eventService.getOne(eventId)
            .then(result => {
                changeValues(result);
            });
    }, [eventId]);

    return (
        <section className={styles["edit-form-container"]}>
            <form id="edit" method="post" onSubmit={onSubmit}>
                <h3>Edit Event</h3>
                <label>Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className={styles["box"]}
                    value={values.name}
                    onChange={changeHandler}
                />
                <label>ImgUrl</label>
                <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    className={styles["box"]}
                    value={values.imgUrl}
                    onChange={changeHandler}


                />
                <label>Location</label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    className={styles["box"]}
                    value={values.location}
                    onChange={changeHandler}
                />
                <label>Date</label>
                <input
                    type="text"
                    id="date"
                    name="date"
                    className={styles["box"]}
                    value={values.date}
                    onChange={changeHandler}
                />
                <label>Hour</label>
                <input
                    type="text"
                    id="hour"
                    name="hour"
                    className={styles["box"]}
                    value={values.hour}
                    onChange={changeHandler}
                />
                <label>Description</label>
                <textarea
                    className={styles["box"]}
                    name="descrition"
                    value={values.description}
                    onChange={changeHandler}
                />
                <input type="submit" defaultValue="Edit Event" className={styles["btn"]} />
            </form>
        </section>
    )
}