import axios from 'axios';

const BASE_URL = 'https://api.github.com/';

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});
