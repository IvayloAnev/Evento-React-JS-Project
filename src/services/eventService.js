import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/events'

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const events = Object.values(result);
    
    return events;
};

export const getOne = async (gameId) => {
    const result = await request.get(`${baseUrl}/${gameId}`);

    return result;
};

export const create = async (eventData) => {
    const result = await request.post(baseUrl, eventData);

    console.log(result);

    return result;
};