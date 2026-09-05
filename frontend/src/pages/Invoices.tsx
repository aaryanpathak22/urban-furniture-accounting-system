import { useEffect, useState } from "react";
import { getInvoices } from "../api/services/invoiceService";
import SearchBar from "../components/Common/SearchBar";
import ActionButton from "../components/Common/ActionButton";
import StatusBadge from "../components/Common/StatusBadge";


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
    const [search, setSearch] = useState("");



    useEffect(() => {


        const loadInvoices = async () => {

            const data = await getInvoices();

            setInvoices(data);

        };


        loadInvoices();


    }, []);




    const filteredInvoices = invoices.filter((invoice)=>


        invoice.invoiceNumber
        .toLowerCase()
        .includes(search.toLowerCase())


        ||

        invoice.customerName
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
                    Invoices
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

                    + Create Invoice

                </button>


            </div>





            <div className="
                mb-5
            ">


                <SearchBar

                    placeholder="Search invoices..."

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


                            <th className="p-4 text-left">
                                Actions
                            </th>



                        </tr>


                    </thead>






                    <tbody>


                        {
                            filteredInvoices.map((invoice)=>(


                                <tr

                                    key={invoice.id}

                                    className="
                                    border-b
                                    hover:bg-gray-50
                                    "

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

                                        <StatusBadge
                                            status={invoice.status}
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