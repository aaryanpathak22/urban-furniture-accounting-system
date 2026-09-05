import { useEffect, useState } from "react";
import { getSalesOrders } from "../api/services/salesOrderService";


interface SalesOrder {

    id: string;
    orderNumber: string;
    customerName: string;
    orderDate: string;
    totalAmount: number;
    status: string;

}



export default function SalesOrders() {


    const [orders, setOrders] = useState<SalesOrder[]>([]);



    useEffect(() => {


        const fetchOrders = async () => {

            const data = await getSalesOrders();

            setOrders(data);

        };


        fetchOrders();


    }, []);




    return (

        <div>


            <h1 className="text-3xl font-bold mb-6">
                Sales Orders
            </h1>



            <div
                className="
                    bg-white
                    rounded-xl
                    border
                    overflow-hidden
                "
            >


                <table className="w-full">


                    <thead>


                        <tr className="border-b">


                            <th className="p-4 text-left">
                                Order Number
                            </th>


                            <th className="p-4 text-left">
                                Customer
                            </th>


                            <th className="p-4 text-left">
                                Date
                            </th>


                            <th className="p-4 text-left">
                                Amount
                            </th>


                            <th className="p-4 text-left">
                                Status
                            </th>


                        </tr>


                    </thead>




                    <tbody>


                        {
                            orders.map((order) => (


                                <tr
                                    key={order.id}
                                    className="border-b"
                                >


                                    <td className="p-4">
                                        {order.orderNumber}
                                    </td>


                                    <td className="p-4">
                                        {order.customerName}
                                    </td>


                                    <td className="p-4">
                                        {order.orderDate}
                                    </td>


                                    <td className="p-4">
                                        ₹{order.totalAmount}
                                    </td>


                                    <td className="p-4">
                                        {order.status}
                                    </td>


                                </tr>


                            ))
                        }


                    </tbody>


                </table>


            </div>


        </div>

    );

}