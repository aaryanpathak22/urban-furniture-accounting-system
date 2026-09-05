import api from "../axios";


export const getCustomers = async () => {

    const response = await api.get("/contacts");

    return response.data;

};