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


        const data = response.data;



        if (!Array.isArray(data)) {

            return [];

        }




        return data.map(

            (order: Record<string, unknown>): PurchaseOrder => ({


                id: String(
                    order.id ??
                    ""
                ),



                orderNumber:
                    order.orderNumber
                        ? String(order.orderNumber)
                        : "PO-" + String(order.id).slice(-5),



                vendorName:
                    String(
                        order.vendorId ??
                        "Unknown Vendor"
                    ),



                date:
                    String(
                        order.orderDate ??
                        ""
                    ),



                amount:
                    Number(
                        order.totalAmount ??
                        0
                    ),



                status:
                    order.status
                        ? String(order.status)
                        : "Pending"



            })


        );



    } catch (error) {


        console.error(
            "Failed to fetch purchase orders",
            error
        );


        return [];


    }


};