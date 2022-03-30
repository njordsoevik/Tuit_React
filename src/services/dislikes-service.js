import axios from "axios";

const BASE_URL = 'https://tuit-a4.herokuapp.com';
const USERS_API = `${BASE_URL}/api/users`;

const api = axios.create({
  withCredentials: true
});

export const findAllTuitsDislikedByUser = (userId) =>
    api.get(`${USERS_API}/${userId}/dislikes`)
        .then(response => response.data);

export const userDislikesTuit = (uid, tid) =>
    api.put(`${USERS_API}/${uid}/dislikes/${tid}`)
        .then(response => response.data);