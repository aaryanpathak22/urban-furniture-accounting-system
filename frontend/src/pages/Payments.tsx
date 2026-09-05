import { useEffect, useState } from "react";
import { getPayments } from "../api/services/paymentService";
import SearchBar from "../components/Common/SearchBar";
import ActionButton from "../components/Common/ActionButton";
import StatusBadge from "../components/Common/StatusBadge";


interface Payment {

    id: string;
    paymentNumber: string;
    customerName: string;
    date: string;
    amount: number;
    method: string;
    status: string;

}



export default function Payments() {


    const [payments, setPayments] = useState<Payment[]>([]);
    const [search, setSearch] = useState("");



    useEffect(() => {


        const loadPayments = async () => {

            const data = await getPayments();

            setPayments(data);

        };


        loadPayments();


    }, []);




    const filteredPayments = payments.filter((payment) =>

        payment.paymentNumber
            .toLowerCase()
            .includes(search.toLowerCase())

        ||

        payment.customerName
            .toLowerCase()
            .includes(search.toLowerCase())

    );




    return (

        <div>


            <div className="
                flex
                justify-between
                items-center
                mb-6
            ">


                <h1 className="
                    text-3xl
                    font-bold
                ">
                    Payments
                </h1>



                <button
                    className="
                    bg-[#714B67]
                    text-white
                    px-5
                    py-2
                    rounded-lg
                    "
                >

                    + Record Payment

                </button>


            </div>





            <div className="mb-5">

                <SearchBar

                    placeholder="Search payments..."

                    value={search}

                    onChange={setSearch}

                />

            </div>







            <div className="
                bg-white
                rounded-xl
                border
                overflow-hidden
            ">


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
                                Method
                            </th>


                            <th className="p-4 text-left">
                                Status
                            </th>


                            <th className="p-4 text-left">
                                Actions
                            </th>


                        </tr>


                    </thead>





                    <tbody>


                        {
                            filteredPayments.map((payment)=>(


                                <tr

                                    key={payment.id}

                                    className="
                                    border-b
                                    hover:bg-gray-50
                                    "

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
                                        {payment.method}
                                    </td>


                                    <td className="p-4">

                                        <StatusBadge
                                            status={payment.status}
                                        />

                                    </td>



                                    <td className="
                                        p-4
                                        flex
                                        gap-3
                                    ">


                                        <ActionButton
                                            label="View"
                                            onClick={()=>{}}
                                        />


                                        <ActionButton
                                            label="Edit"
                                            onClick={()=>{}}
                                        />


                                        <ActionButton
                                            label="Delete"
                                            onClick={()=>{}}
                                        />


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