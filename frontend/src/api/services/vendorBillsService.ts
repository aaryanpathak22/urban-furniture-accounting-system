import axios from "../axios";


export interface VendorBill {

    id: string;
    billNumber: string;
    vendorName: string;
    date: string;
    amount: number;
    status: string;

}



export const getVendorBills = async (): Promise<VendorBill[]> => {


    try {


        const response = await axios.get("/vendor-bills");


        return response.data;


    } catch (error) {


        console.error(
            "Failed to fetch vendor bills",
            error
        );


        return [];


    }

};