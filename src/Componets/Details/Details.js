import styles from './details.module.css';
import { useEffect , useState } from 'react';
import { useParams} from 'react-router-dom';

import * as eventService from '../../services/eventService'

export default function Details() {

    const{eventId} = useParams();
    const[event,setEvenet] = useState({});

    useEffect(() => {
        eventService.getOne(eventId)
         .then(result => {
            setEvenet(result);
         })
    }, [eventId]);

    return (
        <section className={styles["details-page"]}>
            <h1>Details</h1>
            <article className="details-card">
                <article className="details-card-text">
                    <h2>
                        Title:
                        <br /> A Game Of Thrones
                    </h2>
                    <h3>Author: George R.R Martin</h3>
                    <h3>Stars: 5</h3>
                    <h3>Genre: Fiction</h3>
                    <h3>
                        Review: Okay - I am SO incredibly late to this party but hey, I made it!
                        And the hype was real! Winter is coming. A totally magnificent start to
                        a seminal epic fantasy series. If you love watching the first season of
                        Game of Thrones, you're most likely going to love reading A Game of
                        Thrones.
                    </h3>
                    {/* If there is no registered user, do not display buttons*/}
                    <div className="buttons">
                        {/* Only for registered user and author of the review */}
                        <a href="#" className="btn-edit">
                            Edit
                        </a>
                        <a href="#" className="btn-delete">
                            Delete
                        </a>
                        {/* logged in user who has not yet wished book*/}
                        <a href="#" className="btn-wish">
                            Wish to read
                        </a>
                        {/* logged in user who has already wished book*/}
                        <p className="wish-pub">You already added the book to your wish list</p>
                    </div>
                </article>
                <article className="details-card-image">
                    <img src="./image/Game-of-thrones.jpg" />
                </article>
            </article>
        </section>
    )
}