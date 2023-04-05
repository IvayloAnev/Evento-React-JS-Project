
import { useEventContext } from '../../contexts/EventContext';
import { useForm } from '../../hooks/useForm';
import styles from './create.module.css'

export default function Create() {
    const {onCreateEventSubmit} = useEventContext();
    const { values, changeHandler, onSubmit } = useForm({
        name: '',
        imgUrl: '',
        location: '',
        date: '',
        hour: '',
        description: '',
        website: '',
    },onCreateEventSubmit);

    return (
        <section className={styles["create-form-container"]}>
            <form action="/create" method="POST" id="create" onSubmit={onSubmit}>
                <h3>Add Event</h3>
                <label htmlFor="name" className={styles["label"]} >Name</label>
                <input
                    value={values.name}
                    onChange={changeHandler}
                    type="text"
                    name="name"
                    className={styles["box"]}
                    id="name"
                    placeholder='Enter Event Name...'
                />
                <label htmlFor="imgUrl">Image:</label>
                <input
                    value={values.imgUrl}
                    onChange={changeHandler}
                    type="text"
                    name="imgUrl"
                    className={styles["box"]}
                    id="imgUrl"
                    placeholder='Enter ImageUrl...'
                />
                <label htmlFor="location">Location</label>
                <input
                    value={values.location}
                    onChange={changeHandler}
                    type="text"
                    name="location"
                    className={styles["box"]}
                    id="location"
                    placeholder='Enter Location...'
                />
                <label htmlFor="date">Date</label>
                <input
                    value={values.date}
                    onChange={changeHandler}
                    type="text"
                    name="date"
                    className={styles["box"]}
                    id="date"
                    placeholder='Enter Date...'
                />
                <label htmlFor="hour">Hour</label>
                <input
                    value={values.hour}
                    onChange={changeHandler}
                    type="text"
                    name="hour"
                    className={styles["box"]}
                    id="hour"
                    placeholder='Enter Hour...'
                />
                <label htmlFor="description">Description</label>
                <input
                    value={values.description}
                    onChange={changeHandler}
                    type="text"
                    name="description"
                    className={styles["box"]}
                    id="description"
                    placeholder='Enter Description...'
                />
                <label htmlFor="website">Website</label>
                <input
                    value={values.website}
                    onChange={changeHandler}
                    type="text"
                    name="website"
                    className={styles["box"]}
                    id="website"
                    placeholder='Enter Artist Website...'
                />
                <label></label>
                <input
                    type="submit"
                    defaultValue="Add Event"
                    className={styles["btn"]}

                />
            </form>
        </section>
    )
}