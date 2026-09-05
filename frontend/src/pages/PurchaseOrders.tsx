import { useEffect, useState } from "react";
import { getPurchaseOrders } from "../api/services/purchaseOrdersService";
import SearchBar from "../components/Common/SearchBar";
import ActionButton from "../components/Common/ActionButton";
import StatusBadge from "../components/Common/StatusBadge";


interface PurchaseOrder {

    id: string;
    orderNumber: string;
    vendorName: string;
    date: string;
    amount: number;
    status: string;

}



export default function PurchaseOrders() {


    const [orders, setOrders] = useState<PurchaseOrder[]>([]);
    const [search, setSearch] = useState("");



    useEffect(() => {


        const loadOrders = async () => {

            const data = await getPurchaseOrders();

            setOrders(data);

        };


        loadOrders();


    }, []);





    const filteredOrders = orders.filter((order)=>

        order.orderNumber
        .toLowerCase()
        .includes(search.toLowerCase())

        ||

        order.vendorName
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
                    Purchase Orders
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

                    + Create Purchase Order

                </button>


            </div>





            <div className="mb-5">

                <SearchBar

                    placeholder="Search purchase orders..."

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
                                Order Number
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
                            filteredOrders.map((order)=>(


                                <tr

                                    key={order.id}

                                    className="
                                    border-b
                                    hover:bg-gray-50
                                    "

                                >


                                    <td className="p-4">
                                        {order.orderNumber}
                                    </td>


                                    <td className="p-4">
                                        {order.vendorName}
                                    </td>


                                    <td className="p-4">
                                        {order.date}
                                    </td>


                                    <td className="p-4">
                                        ₹{order.amount}
                                    </td>


                                    <td className="p-4">

                                        <StatusBadge
                                            status={order.status}
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