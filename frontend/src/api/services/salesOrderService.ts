import api from "../axios";


export const getSalesOrders = async () => {

    const response = await api.get("/sales-orders");

    return response.data;

};