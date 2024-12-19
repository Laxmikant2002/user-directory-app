import axios from 'axios';

const API_URL = 'https://api.example.com/users';

export const fetchUsers = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error('Error fetching users: ' + error.message);
        } else {
            throw new Error('Error fetching users');
        }
    }
};

export const fetchUserById = async (id: number) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error('Error fetching user details: ' + error.message);
        } else {
            throw new Error('Error fetching user details');
        }
    }
};