import StatCard from "../components/Cards/StatCard";

import RevenueChart from "../components/Charts/RevenueChart";
import PaymentChart from "../components/Charts/PaymentChart";


export default function Dashboard(){


    return (

        <div>


            <h1
                className="
                text-3xl
                font-bold
                mb-6
                "
            >
                Dashboard
            </h1>



            {/* Summary Cards */}

            <div
                className="
                grid
                grid-cols-4
                gap-6
                "
            >


                <StatCard
                    title="Total Customers"
                    value="248"
                    description="Active customers"
                />


                <StatCard
                    title="Products"
                    value="126"
                    description="Furniture items"
                />


                <StatCard
                    title="Revenue"
                    value="₹12.5L"
                    description="This month"
                />


                <StatCard
                    title="Pending Payments"
                    value="₹3.2L"
                    description="Outstanding"
                />


            </div>





            {/* Charts Section */}

            <div
                className="
                mt-8
                grid
                grid-cols-2
                gap-6
                "
            >



                {/* Revenue Chart */}

                <div
                    className="
                    bg-white
                    rounded-xl
                    border
                    p-6
                    h-80
                    "
                >

                    <h3
                        className="
                        font-semibold
                        mb-4
                        "
                    >
                        Revenue Trend
                    </h3>


                    <RevenueChart />


                </div>





                {/* Payment Chart */}

                <div
                    className="
                    bg-white
                    rounded-xl
                    border
                    p-6
                    h-80
                    "
                >

                    <h3
                        className="
                        font-semibold
                        mb-4
                        "
                    >
                        Payment Overview
                    </h3>


                    <PaymentChart />


                </div>



            </div>




        </div>

    )

}