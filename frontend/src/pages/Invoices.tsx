import { useEffect, useState } from "react";
import { getInvoices } from "../api/services/invoiceService";


interface Invoice {
    id: string;
    invoiceNumber: string;
    customerName: string;
    date: string;
    amount: number;
    status: string;
}


export default function Invoices() {


    const [invoices, setInvoices] = useState<Invoice[]>([]);


    useEffect(() => {

        const loadInvoices = async () => {

            const data = await getInvoices();

            setInvoices(data);

        };


        loadInvoices();

    }, []);



    return (

        <div>


            <h1 className="text-3xl font-bold mb-6">
                Invoices
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
                                Invoice Number
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
                            invoices.map((invoice) => (


                                <tr
                                    key={invoice.id}
                                    className="border-b"
                                >


                                    <td className="p-4">
                                        {invoice.invoiceNumber}
                                    </td>


                                    <td className="p-4">
                                        {invoice.customerName}
                                    </td>


                                    <td className="p-4">
                                        {invoice.date}
                                    </td>


                                    <td className="p-4">
                                        ₹{invoice.amount}
                                    </td>


                                    <td className="p-4">
                                        {invoice.status}
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