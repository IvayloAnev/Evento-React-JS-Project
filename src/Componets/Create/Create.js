import styles from './create.module.css'

export default function Create() {
    return (
        <section className={styles["create-form-container"]}>
            <form action="/create" method="POST" id="create">
                <h3>Add Event</h3>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="title"
                    className={styles["box"]}   
                    id="name"
                    defaultValue=""
                    placeholder='Enter Event Name...'
                />
                <label htmlFor="author">Image</label>
                <input
                    type="text"
                    name="author"
                    className={styles["box"]}
                    id="author"
                    defaultValue=""
                    placeholder='Enter ImageUrl...'
                />
                <label>Location</label>
                <input
                    type="text"
                    name="gerne"
                    className={styles["box"]}
                    id="gerne"
                    defaultValue=""
                    placeholder='Enter Location...'
                />
                <label>Date</label>
                <input
                    type="number"
                    name="stars"
                    className={styles["box"]}
                    id="stars"
                    defaultValue=""
                    placeholder='Enter Date...'
                />
                <label>Description</label>
                <input
                    type="text"
                    name="image"
                    className={styles["box"]}
                    id="image"
                    defaultValue=""
                    placeholder='Enter Description...'
                />
                 <label>Website</label>
                <input
                    type="text"
                    name="image"
                    className={styles["box"]}
                    id="image"
                    defaultValue=""
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