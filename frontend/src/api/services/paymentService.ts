import api from "../axios";


export const getPayments = async () => {

    const response = await api.get("/payments");

    return response.data;

};