import {
    useEffect,
    useMemo,
    useState
} from "react";


import {
    getPurchaseOrders
} from "../api/services/purchaseOrdersService";


import type {
    PurchaseOrder
} from "../api/services/purchaseOrdersService";



export default function PurchaseOrders() {


    const [
        orders,
        setOrders
    ] = useState<PurchaseOrder[]>([]);



    const [
        search,
        setSearch
    ] = useState("");



    const [
        loading,
        setLoading
    ] = useState(true);




    useEffect(() => {


        async function loadOrders() {


            const data = await getPurchaseOrders();


            setOrders(data);


            setLoading(false);


        }



        loadOrders();



    }, []);





    const filteredOrders = useMemo(() => {


        const value = search
            .toLowerCase()
            .trim();



        if (!value) {

            return orders;

        }



        return orders.filter(
            (order) =>

                order.orderNumber
                    .toLowerCase()
                    .includes(value)

                ||

                order.vendorName
                    .toLowerCase()
                    .includes(value)

                ||

                order.status
                    .toLowerCase()
                    .includes(value)

        );


    }, [orders, search]);





    if (loading) {


        return (

            <div className="p-6">

                Loading purchase orders...

            </div>

        );


    }





    return (

        <div className="p-6">


            <div className="flex justify-between items-center mb-6">


                <h1 className="text-3xl font-bold">

                    Purchase Orders

                </h1>



                <button
                    className="
                    bg-purple-700
                    text-white
                    px-4
                    py-2
                    rounded
                    "
                >

                    + Create Purchase Order

                </button>


            </div>





            <input

                className="
                border
                rounded
                p-3
                w-full
                mb-5
                "

                placeholder="Search purchase orders..."

                value={search}

                onChange={
                    (event) =>
                        setSearch(event.target.value)
                }

            />






            <div
                className="
                bg-white
                border
                rounded-xl
                overflow-hidden
                "
            >


                <table className="w-full">


                    <thead className="bg-gray-100">


                        <tr>


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


                        </tr>


                    </thead>





                    <tbody>


                        {
                            filteredOrders.length === 0 ?

                                (

                                    <tr>

                                        <td
                                            colSpan={5}
                                            className="p-5 text-center"
                                        >

                                            No purchase orders found

                                        </td>


                                    </tr>


                                )

                                :

                                (

                                    filteredOrders.map(
                                        (order) => (

                                            <tr
                                                key={order.id}
                                                className="border-t"
                                            >


                                                <td className="p-4">

                                                    {
                                                        order.orderNumber
                                                    }

                                                </td>



                                                <td className="p-4">

                                                    {
                                                        order.vendorName
                                                    }

                                                </td>




                                                <td className="p-4">

                                                    {
                                                        order.date
                                                    }

                                                </td>




                                                <td className="p-4">

                                                    ₹ {order.amount}

                                                </td>




                                                <td className="p-4">

                                                    {
                                                        order.status
                                                    }

                                                </td>



                                            </tr>

                                        )

                                    )

                                )

                        }



                    </tbody>


                </table>


            </div>


        </div>

    );


}