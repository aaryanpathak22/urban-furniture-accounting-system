import axios from "../axios";


export interface VendorBill {

    id: string;

    billNumber: string;

    vendorName: string;

    date: string;

    amount: number;

    status: string;

}



interface VendorBillResponse {

    id?: string;

    _id?: string;

    billNumber: string;

    vendorName?: string;

    vendorId?: string;

    billDate: string;

    totalAmount: number;

    paymentStatus?: string;

}




export const getVendorBills = async (): Promise<VendorBill[]> => {


    try {


        const response =
            await axios.get<VendorBillResponse[]>("/vendor-bills");



        return response.data.map((bill) => ({


            id:
                bill.id ?? bill._id ?? "",


            billNumber:
                bill.billNumber,


            vendorName:
                bill.vendorName ?? bill.vendorId ?? "",


            date:
                bill.billDate,


            amount:
                bill.totalAmount,


            status:
                bill.paymentStatus ?? "Pending"



        }));



    } catch (error) {


        console.error(
            "Failed to fetch vendor bills",
            error
        );


        return [];


    }


};