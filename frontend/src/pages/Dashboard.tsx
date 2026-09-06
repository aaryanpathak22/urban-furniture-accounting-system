import { useEffect, useState } from "react";
import axios from "axios";

import StatCard from "../components/Cards/StatCard";

import RevenueChart from "../components/Charts/RevenueChart";
import PaymentChart from "../components/Charts/PaymentChart";


interface DashboardData {

    totalProducts:number;
    totalPayments:number;
    pendingPayments:number;
    completedPayments:number;
    cancelledPayments:number;

    totalSalesOrders:number;
    totalInvoices:number;

    totalRevenue:number;
    totalInventoryItems:number;

}



export default function Dashboard() {


    const [dashboard, setDashboard] =
        useState<DashboardData | null>(null);



    useEffect(() => {


        axios
            .get<DashboardData>(
                "http://localhost:8080/api/dashboard"
            )
            .then((response) => {


                console.log(
                    "BACKEND DATA:",
                    response.data
                );


                setDashboard(response.data);


            })
            .catch((error) => {


                console.error(
                    "Dashboard API Error:",
                    error
                );


            });


    }, []);




    if (!dashboard) {

        return (

            <div className="text-xl font-semibold">

                Loading Dashboard...

            </div>

        );

    }



    return (

        <div>


            <h1 className="
                text-3xl
                font-bold
                mb-6
            ">

                Dashboard

            </h1>





            <div className="
                grid
                grid-cols-4
                gap-6
            ">


                <StatCard

                    title="Products"

                    value={String(dashboard.totalProducts)}

                    description="Furniture items"

                />



                <StatCard

                    title="Sales Orders"

                    value={String(dashboard.totalSalesOrders)}

                    description="Total orders"

                />



                <StatCard

                    title="Invoices"

                    value={String(dashboard.totalInvoices)}

                    description="Generated invoices"

                />



                <StatCard

                    title="Payments"

                    value={String(dashboard.totalPayments)}

                    description="Total payments"

                />


            </div>






            <div className="
                mt-8
                grid
                grid-cols-2
                gap-6
            ">



                <div className="
                    bg-white
                    rounded-xl
                    border
                    p-6
                    h-80
                ">


                    <h3 className="
                        font-semibold
                        mb-4
                    ">

                        Revenue Trend

                    </h3>



                    <RevenueChart
    revenue={dashboard.totalRevenue}
/>


                </div>







                <div className="
                    bg-white
                    rounded-xl
                    border
                    p-6
                    h-80
                ">


                    <h3 className="
                        font-semibold
                        mb-4
                    ">

                        Payment Overview

                    </h3>



                    <PaymentChart

completed={dashboard.completedPayments}

pending={dashboard.pendingPayments}

cancelled={dashboard.cancelledPayments}

/>


                </div>



            </div>




        </div>

    );

}