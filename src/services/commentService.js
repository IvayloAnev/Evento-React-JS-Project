import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/comments';
const request = requestFactory();

export const getAll = async (eventId) => {
    const searchQuery = encodeURIComponent(`eventId="${eventId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`);

    const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);
    const comments = Object.values(result);

    return comments;
};

export const create = async (eventId, comment) => {
    const result = await request.post(baseUrl, { eventId, comment });

    return result;
};
