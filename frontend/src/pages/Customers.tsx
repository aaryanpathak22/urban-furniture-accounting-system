import { useEffect, useState } from "react";

import { getCustomers } from "../api/services/customerService";

import SearchBar from "../components/Common/SearchBar";
import StatusBadge from "../components/Common/StatusBadge";
import ActionButton from "../components/Common/ActionButton";


interface Customer {

    id: string;
    name: string;
    type: string;
    email: string;
    phone: string;
    city?: string;
    active?: boolean;

}



export default function Customers() {


    const [customers, setCustomers] = useState<Customer[]>([]);

    const [search, setSearch] = useState("");

    const [filter, setFilter] = useState("ALL");



    useEffect(() => {


        const loadCustomers = async () => {

            const data = await getCustomers();

            setCustomers(data);

        };


        loadCustomers();


    }, []);





    const filteredCustomers = customers.filter((customer)=>{


        const matchesSearch =
            customer.name
            .toLowerCase()
            .includes(search.toLowerCase());



        const matchesFilter =
            filter === "ALL"
            ||
            customer.type === filter;



        return matchesSearch && matchesFilter;


    });





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
                    Contacts
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
                    + Add Contact

                </button>


            </div>





            <div className="
                flex
                gap-4
                mb-6
            ">


                <SearchBar

                    value={search}

                    onChange={setSearch}

                    placeholder="Search contacts..."

                />



                <select

                    value={filter}

                    onChange={(e)=>setFilter(e.target.value)}

                    className="
                    border
                    rounded-lg
                    px-4
                    "

                >

                    <option value="ALL">
                        All
                    </option>


                    <option value="CUSTOMER">
                        Customer
                    </option>


                    <option value="VENDOR">
                        Vendor
                    </option>


                </select>


            </div>





            <div className="
                bg-white
                border
                rounded-xl
                overflow-hidden
            ">


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
                        filteredCustomers.map((customer)=>(


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



                                <td className="p-4">

                                    <StatusBadge

                                        status={
                                            customer.active === false
                                            ?
                                            "Inactive"
                                            :
                                            "Active"
                                        }

                                    />

                                </td>




                                <td className="
                                    p-4
                                    flex
                                    gap-3
                                ">


                                    <ActionButton

                                        label="View"

                                        onClick={()=>
                                            console.log(customer.id)
                                        }

                                    />



                                    <ActionButton

                                        label="Edit"

                                        onClick={()=>
                                            console.log("edit",customer.id)
                                        }

                                    />



                                    <ActionButton

                                        label="Delete"

                                        onClick={()=>
                                            console.log("delete",customer.id)
                                        }

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