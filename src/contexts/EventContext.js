import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { eventServiceFactory } from '../services/eventService';

export const EventContext = createContext();

export const EventProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);
    const eventService = eventServiceFactory();

    useEffect(() => {
        eventService.getAll()
            .then(result => {
                setEvents(result)
            })
    }, []);

    const onCreateEventSubmit = async (data) => {

        if(!data.imgUrl.startsWith("https://")){
            alert("Please enter a valid URL address");
            return;
        }else if(!/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/.test( data.date)){
            alert("Please enter valid date format YYYY-MM-DD !");
            return;
        }else{
            try{
                const newEvent = await eventService.create(data);
                setEvents(state => [...state, newEvent]);
                navigate('/events');
            }catch(err){
                alert(err);
            }
        }

    };

    const onEventEditSubmit = async (values) => {
        const result = await eventService.edit(values._id, values);
        
        setEvents(state => state.map(x => x._id === values._id ? result : x))

        navigate(`/events/${values._id}`);
    };

    const deleteEvent = (eventId) => {
        setEvents(state => state.filter(event => event._id !== eventId));
    };

    const getEvent = (eventId) => {
        return events.find(event => event._id === eventId);
    };

    const contextValues = {
        events,
        onCreateEventSubmit,
        onEventEditSubmit,
        deleteEvent,
        getEvent,
    };

    return (
        <EventContext.Provider value={contextValues}>
            {children}
        </EventContext.Provider>
    );
};

export const useEventContext = () => {
    const context = useContext(EventContext);

    return context;
};