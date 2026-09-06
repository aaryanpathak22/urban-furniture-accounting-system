import { useEffect, useState } from "react";

import { getPayments } from "../api/services/paymentService";

import SearchBar from "../components/Common/SearchBar";
import ActionButton from "../components/Common/ActionButton";
import StatusBadge from "../components/Common/StatusBadge";


interface Payment {

    id: string;

    paymentNumber: string;

    type: string | null;

    referenceId: string | null;

    paymentDate: string;

    amount: number;

    method: string | null;

    status: string | null;

}





export default function Payments(){


    const [payments,setPayments] =
        useState<Payment[]>([]);


    const [search,setSearch] =
        useState("");





    useEffect(()=>{


        const loadPayments = async()=>{


            try{


                const data =
                    await getPayments();



                console.log(
                    "PAYMENT DATA:",
                    data
                );


                setPayments(data);



            }
            catch(error){

                console.error(
                    "Payment Error:",
                    error
                );

            }



        };



        loadPayments();



    },[]);







    const filteredPayments =
        payments.filter(payment=>

            payment.paymentNumber
            .toLowerCase()
            .includes(
                search.toLowerCase()
            )


            ||

            (payment.referenceId ?? "")
            .toLowerCase()
            .includes(
                search.toLowerCase()
            )


        );









    return (


        <div>



            <div
                className="
                flex
                justify-between
                items-center
                mb-6
                "
            >


                <h1
                    className="
                    text-3xl
                    font-bold
                    "
                >

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






            <SearchBar

                placeholder="Search payments..."

                value={search}

                onChange={setSearch}

            />







            <div
                className="
                bg-white
                rounded-xl
                border
                overflow-hidden
                mt-5
                "
            >



            <table className="w-full">



            <thead>

            <tr className="border-b">


                <th className="p-4 text-left">
                    Payment Number
                </th>


                <th className="p-4 text-left">
                    Type
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
                filteredPayments.map(payment=>(



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

                        {payment.type ?? "-"}

                    </td>





                    <td className="p-4">

                        {payment.paymentDate}

                    </td>





                    <td className="p-4">

                        ₹{payment.amount}

                    </td>





                    <td className="p-4">

                        {payment.method ?? "-"}

                    </td>





                    <td className="p-4">


                        <StatusBadge

                            status={
                                payment.status
                                ??
                                "Pending"
                            }

                        />


                    </td>





                    <td className="p-4 flex gap-3">


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