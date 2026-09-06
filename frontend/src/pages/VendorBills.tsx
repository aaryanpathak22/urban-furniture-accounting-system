import { useEffect, useState } from "react";

import { getVendorBills } from "../api/services/vendorBillsService";

import type { VendorBill } from "../api/services/vendorBillsService";

import ActionButton from "../components/Common/ActionButton";




export default function VendorBills() {


    const [vendorBills, setVendorBills] = useState<VendorBill[]>([]);



    useEffect(() => {


        const loadBills = async () => {


            const data = await getVendorBills();


            setVendorBills(data);


        };


        loadBills();


    }, []);




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
                    Vendor Bills
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
                    + Create Bill
                </button>


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
                                Bill Number
                            </th>


                            <th className="p-4 text-left">
                                Vendor
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


                            <th className="p-4 text-left">
                                Actions
                            </th>


                        </tr>


                    </thead>





                    <tbody>


                        {
                            vendorBills.map((bill) => (


                                <tr
                                    key={bill.id}
                                    className="
                                    border-b
                                    hover:bg-gray-50
                                    "
                                >


                                    <td className="p-4">
                                        {bill.billNumber}
                                    </td>



                                    <td className="p-4">
                                        {bill.vendorName}
                                    </td>



                                    <td className="p-4">
                                        {bill.date}
                                    </td>



                                    <td className="p-4">
                                        ₹{bill.amount}
                                    </td>



                                    <td className="p-4">

                                        <span className="
                                            bg-green-100
                                            text-green-700
                                            px-3
                                            py-1
                                            rounded-full
                                            text-sm
                                        ">
                                            {bill.status || "Pending"}
                                        </span>

                                    </td>




                                    <td className="
                                        p-4
                                        flex
                                        gap-3
                                    ">


                                        <ActionButton
                                            label="View"
                                            onClick={() => {}}
                                        />


                                        <ActionButton
                                            label="Edit"
                                            onClick={() => {}}
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