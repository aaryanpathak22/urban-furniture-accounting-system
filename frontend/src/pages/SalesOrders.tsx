import { useEffect, useState } from "react";
import axios from "axios";


interface SalesOrder {

    id: string;

    customerId: string;

    orderDate: string;

    subtotal: number;

    taxAmount: number | null;

    totalAmount: number | null;

    status: string | null;

}



export default function SalesOrders() {


    const [orders, setOrders] = useState<SalesOrder[]>([]);



    useEffect(() => {


        axios
            .get<SalesOrder[]>(
                "http://localhost:8080/api/sales-orders"
            )
            .then((response) => {


                console.log(
                    "SALES ORDERS DATA:",
                    response.data
                );


                setOrders(response.data);


            })
            .catch((error) => {


                console.error(
                    "Sales Orders API Error:",
                    error
                );


            });


    }, []);





    return (

        <div>


            <h1
                className="
                text-3xl
                font-bold
                mb-6
                "
            >
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



                <table
                    className="
                    w-full
                    "
                >



                    <thead>


                        <tr
                            className="
                            border-b
                            "
                        >


                            <th className="p-4 text-left">
                                Customer ID
                            </th>


                            <th className="p-4 text-left">
                                Order Date
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
                                    className="
                                    border-b
                                    "
                                >



                                    <td className="p-4">

                                        {order.customerId}

                                    </td>



                                    <td className="p-4">

                                        {order.orderDate}

                                    </td>




                                    <td className="p-4">

                                        ₹ {
                                            order.totalAmount ??
                                            order.subtotal
                                        }

                                    </td>




                                    <td className="p-4">


                                        {
                                            order.status ??
                                            "Pending"
                                        }


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