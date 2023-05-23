import axios from 'axios';
const API_PORT = 8080;
const API_ADDRESS = `http://localhost:${API_PORT}`;
const newHeader = {
    headers: {
        'Content-Type': 'application/json',
    },
};

export const getFeedback = async text => {
    const newMessage = {
        text: text,
    };
    try {
        const response = await axios.post(
            `${API_ADDRESS}/chatbot`,
            newMessage,
            newHeader
        );
        return response;
    } catch (err) {}
};
