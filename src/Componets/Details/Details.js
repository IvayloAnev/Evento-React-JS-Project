
import styles from './details.module.css';

import { useEffect, useState, useReducer } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { eventServiceFactory } from '../../services/eventService'
import * as commentService from '../../services/commentService';
import { useService } from '../../hooks/useService';
import { useAuthContext } from '../../contexts/AuthContext';

import { AddComment } from './AddComment/AddCommnet';
import { eventReducer } from '../../reducers/eventReducer';
import { useEventContext } from '../../contexts/EventContext';

export default function Details() {
    const { eventId } = useParams();
    const { userId, userEmail } = useAuthContext();
    const { deleteEvent } = useEventContext();
    const [event, dispatch] = useReducer(eventReducer, {});
    const eventService = useService(eventServiceFactory);
    const navigate = useNavigate();


    useEffect(() => {
        Promise.all([
            eventService.getOne(eventId),
            commentService.getAll(eventId),
        ]).then(([eventData, comments]) => {
            const eventState = {
                ...eventData,
                comments,
            };

            dispatch({ type: 'EVENT_FETCH', payload: eventState })
        });
    }, [eventId]);

    const onCommentSubmit = async (values) => {
        const response = await commentService.create(eventId, values.comment);

        dispatch({
            type: 'COMMENT_ADD',
            payload: response,
            userEmail,
        });
    };

    const isOwner = event._ownerId === userId;

    const onDeleteClick = async () => {
        // eslint-disable-next-line no-restricted-globals
        const result = confirm(`Are you sure you want to delete ${event.name}`);

        if (result) {
            await eventService.delete(event._id);

            deleteEvent(event._id);

            navigate('/events');
        }
    };

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
                    {isOwner && (
                        <div className={styles["buttons"]}>

                            <Link to={`/events/${event._id}/edit`} className={styles["btn-edit"]}>
                                Edit
                            </Link>
                            <button className={styles["btn-delete"]} onClick={onDeleteClick}>
                                Delete
                            </button>
                        </div>
                    )}
                    {!isOwner && userEmail && (
                        <div className={styles["buttons"]}>
                            {/* logged in user who has not yet wished book*/}
                            {/*<a href="#" className={styles["btn-wish"]}>
                                Book a ticket
                            </a>*/}
                            {/*logged in user who has already wished book*/}
                            {/*<p className={styles["wish-pub"]}>You already have booked your ticket</p>*/}
                        </div>
                    )}

                    <div className="details-comments">
                        <h2>Comments:</h2>
                        <ul>
                            {event.comments && event.comments.map(x => (
                                <li key={x._id} className="comment">
                                    <p>{x.author.email}: {x.comment}</p>
                                </li>
                            ))}
                        </ul>

                        {!event.comments?.length && (
                            <p className="no-comment">No comments.</p>
                        )}
                    </div>

                </article>
                <article className={styles["details-card-image"]}>
                    <img src={event.imgUrl} />
                </article>
            </article>
            {userEmail && <AddComment onCommentSubmit={onCommentSubmit} />}
        </section >
    )
}