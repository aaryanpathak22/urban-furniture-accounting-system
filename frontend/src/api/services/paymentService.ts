import axios from "axios";


export const getPayments = async()=>{


    const response = await axios.get(
        "http://localhost:8080/api/payments"
    );


    return response.data;


};