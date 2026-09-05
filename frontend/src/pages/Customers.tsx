import { useEffect, useState } from "react";
import { getCustomers } from "../api/services/customerService";


interface Customer {
    id: string;
    name: string;
    type: string;
    email: string;
    phone: string;
}


export default function Customers() {

    const [customers, setCustomers] = useState<Customer[]>([]);



    useEffect(() => {

    const fetchCustomers = async () => {
        const data = await getCustomers();
        setCustomers(data);
    };

    fetchCustomers();

}, []);



    return (

        <div>


            <h1 className="text-3xl font-bold mb-6">
                Customers
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
                                Name
                            </th>


                            <th className="p-4 text-left">
                                Type
                            </th>


                            <th className="p-4 text-left">
                                Email
                            </th>


                            <th className="p-4 text-left">
                                Phone
                            </th>


                        </tr>

                    </thead>



                    <tbody>


                        {
                            customers.map((customer) => (

                                <tr
                                    key={customer.id}
                                    className="border-b"
                                >

                                    <td className="p-4">
                                        {customer.name}
                                    </td>


                                    <td className="p-4">
                                        {customer.type}
                                    </td>


                                    <td className="p-4">
                                        {customer.email}
                                    </td>


                                    <td className="p-4">
                                        {customer.phone}
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