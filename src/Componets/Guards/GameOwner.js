import { useParams, Outlet, Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

import { useEventContext } from "../../contexts/EventContext";

//IT CAN BE USED AS GUARD , I WILL NOT USE IT AT THE MOMENT 
export const EventOwner = ({
    children,
}) => {
    const { eventId } = useParams();
    const { getEvent } = useEventContext();
    const { userId } = useAuthContext();

    const currentEvent = getEvent(eventId);

    if (currentEvent && currentEvent._ownerId !== userId) {
        return <Navigate to={`/catalog/${eventId}`} replace />
    }

    return children ? children : <Outlet />
};