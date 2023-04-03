import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/events';

export const eventServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);
        const events = Object.values(result);
    
        return events;
    };
    
    const getOne = async (eventId) => {
        const result = await request.get(`${baseUrl}/${eventId}`);
    
        return result;
    };
    
    const create = async (eventData) => {
        const result = await request.post(baseUrl, eventData);
    
        //console.log(result);
    
        return result;
    };
    


    const edit = (eventId, data) => request.put(`${baseUrl}/${eventId}`, data);

    const deleteEvent = (eventId) => request.delete(`${baseUrl}/${eventId}`);


    return {
        getAll,
        getOne,
        create,
        edit,
        delete: deleteEvent,
    };
}