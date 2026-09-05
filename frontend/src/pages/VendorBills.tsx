import { useEffect, useState } from "react";
import { getVendorBills } from "../api/services/vendorBillsService";

interface VendorBill {

    id: string;
    billNumber: string;
    vendorName: string;
    date: string;
    amount: number;
    status: string;

}



export default function VendorBills() {


    const [bills, setBills] = useState<VendorBill[]>([]);



    useEffect(() => {


        const loadBills = async () => {


            const data = await getVendorBills();

            setBills(data);


        };


        loadBills();


    }, []);




    return (


        <div>


            <div className="flex justify-between items-center mb-6">


                <h1 className="text-3xl font-bold">
                    Vendor Bills
                </h1>


                <button
                    className="
                    bg-[#714B67]
                    text-white
                    px-5
                    py-2
                    rounded-lg
                    hover:opacity-90
                    "
                >
                    + Create Bill
                </button>


            </div>




            <div
                className="
                bg-white
                border
                rounded-xl
                overflow-hidden
                "
            >


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
                            bills.length > 0 ? (


                                bills.map((bill) => (


                                    <tr
                                        key={bill.id}
                                        className="border-b"
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
                                            {bill.status}
                                        </td>


                                        <td className="p-4">

                                            <span className="text-[#714B67] cursor-pointer mr-3">
                                                View
                                            </span>


                                            <span className="text-[#714B67] cursor-pointer">
                                                Edit
                                            </span>

                                        </td>


                                    </tr>


                                ))


                            ) : (


                                <tr>

                                    <td
                                        colSpan={6}
                                        className="p-6 text-center text-gray-500"
                                    >
                                        No vendor bills found
                                    </td>


                                </tr>


                            )
                        }


                    </tbody>


                </table>


            </div>


        </div>


    );

}