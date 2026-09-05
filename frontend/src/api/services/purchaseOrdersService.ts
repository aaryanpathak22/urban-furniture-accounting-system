import axios from "../axios";


export interface PurchaseOrder {

    id: string;
    orderNumber: string;
    vendorName: string;
    date: string;
    amount: number;
    status: string;

}



export const getPurchaseOrders = async (): Promise<PurchaseOrder[]> => {


    try {

        const response = await axios.get("/purchase-orders");

        return response.data;

    } catch (error) {


        console.error(
            "Failed to fetch purchase orders",
            error
        );


        return [];

    }

};