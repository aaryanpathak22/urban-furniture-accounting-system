import { useEffect, useState } from "react";
import { getPayments } from "../api/services/paymentService";


interface Payment {

    id: string;
    paymentNumber: string;
    customerName: string;
    date: string;
    amount: number;
    status: string;

}



export default function Payments() {


    const [payments, setPayments] = useState<Payment[]>([]);



    useEffect(() => {


        const loadPayments = async () => {

            const data = await getPayments();

            setPayments(data);

        };


        loadPayments();


    }, []);




    return (

        <div>


            <h1 className="text-3xl font-bold mb-6">
                Payments
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
                                Payment Number
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
                            payments.map((payment) => (


                                <tr
                                    key={payment.id}
                                    className="border-b"
                                >


                                    <td className="p-4">
                                        {payment.paymentNumber}
                                    </td>


                                    <td className="p-4">
                                        {payment.customerName}
                                    </td>


                                    <td className="p-4">
                                        {payment.date}
                                    </td>


                                    <td className="p-4">
                                        ₹{payment.amount}
                                    </td>


                                    <td className="p-4">
                                        {payment.status}
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