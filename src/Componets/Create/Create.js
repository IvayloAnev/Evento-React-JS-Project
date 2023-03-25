import { useState } from 'react';
import styles from './create.module.css'

export default function Create({
    onCreateGameSubmit,
}) {
    const [values, setValues] = useState({
        name: '',
        imgUrl: '',
        location: '',
        date: '',
        hour: '',
        description: '',
        website: '',
    });

    const onChangeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}))
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onCreateGameSubmit(values);
    };

    return (
        <section className={styles["create-form-container"]}>
            <form action="/create" method="POST" id="create" onSubmit={onSubmit}>
                <h3>Add Event</h3>
                <label htmlFor="name">Name</label>
                <input
                    value={values.name}
                    onChange={onChangeHandler}
                    type="text"
                    name="name"
                    className={styles["box"]}
                    id="name"
                    placeholder='Enter Event Name...'
                />
                <label htmlFor="imgUrl">Image</label>
                <input
                    value={values.imgUrl}
                    onChange={onChangeHandler}
                    type="text"
                    name="imgUrl"
                    className={styles["box"]}
                    id="imgUrl"
                    placeholder='Enter ImageUrl...'
                />
                <label htmlFor="location">Location</label>
                <input
                    value={values.location}
                    onChange={onChangeHandler}
                    type="text"
                    name="location"
                    className={styles["box"]}
                    id="location"
                    placeholder='Enter Location...'
                />
                <label htmlFor="date">Date</label>
                <input
                    value={values.date}
                    onChange={onChangeHandler}
                    type="text"
                    name="date"
                    className={styles["box"]}
                    id="date"
                    placeholder='Enter Date...'
                />
                <label htmlFor="hour">Hour</label>
                <input
                    value={values.hour}
                    onChange={onChangeHandler}
                    type="text"
                    name="hour"
                    className={styles["box"]}
                    id="hour"
                    placeholder='Enter Hour...'
                />
                <label htmlFor="description">Description</label>
                <input
                    value={values.description}
                    onChange={onChangeHandler}
                    type="text"
                    name="description"
                    className={styles["box"]}
                    id="description"
                    placeholder='Enter Description...'
                />
                <label htmlFor="website">Website</label>
                <input
                    value={values.website}
                    onChange={onChangeHandler}
                    type="text"
                    name="website"
                    className={styles["box"]}
                    id="website"
                    placeholder='Enter Artist Website...'
                />
                <label>Add</label>
                <input
                    type="submit"
                    defaultValue="Add"
                    className={styles["btn"]}

                />
            </form>
        </section>
    )
}