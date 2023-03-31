
import styles from './details.module.css';
import { useEffect, useState, useContext } from 'react';

import { useParams,useNavigate, Link} from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { useService } from '../../hooks/useService';
import {eventServiceFactory} from '../../services/eventService'


export default function Details() {
    const { userId } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const{eventId} = useParams();
    const[event,setEvenet] = useState({});
    const eventService = useService(eventServiceFactory);
    const navigate = useNavigate();

    useEffect(() => {
        eventService.getOne(eventId)
         .then(result => {
            setEvenet(result);
         })
    }, [eventId]);
    
    


    return (
        <section className={styles["details-page"]}>
            <h1>All you need to know </h1>
            <article className={styles["details-card"]}>
                <article className={styles["details-card-text"]}>
                    <h2>
                        <br /> {event.name}
                    </h2>
                    <h3>location - {event.location}</h3>
                    <h3>
                       <br /> date - {event.date}
                    </h3>
                    <h3>start {event.hour}</h3>
                    <h3>
                     {event.description}
                    </h3>
                    <h3>artist page : {event.website}</h3>
                    {/* If there is no registered user, do not display buttons*/}
                    <div className={styles["buttons"]}>
                        {/* Only for registered user and author of the review */}
                        <a href="#" className={styles["btn-edit"]}>
                            Edit
                        </a>
                        <a href="#" className={styles["btn-delete"]}>
                            Delete
                        </a>
                        {/* logged in user who has not yet wished book*/}
                        <a href="#" className={styles["btn-wish"]}>
                            Book a ticket
                        </a>
                        {/* logged in user who has already wished book*/}
                        <p className={styles["wish-pub"]}>You already have booked your ticket</p>
                    </div>
                </article>
                <article className={styles["details-card-image"]}>
                    <img src={event.imgUrl} />
                </article>
            </article>
        </section>
    )
}