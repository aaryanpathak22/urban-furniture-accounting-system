import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend
} from "recharts";


interface Props {
    completed:number;
    pending:number;
    cancelled:number;
}


const COLORS=[
    "#714B67",
    "#F0AD4E",
    "#D9534F"
];


export default function PaymentChart({
    completed,
    pending,
    cancelled
}:Props){


    const data=[
        {
            name:"Completed",
            value:completed
        },
        {
            name:"Pending",
            value:pending
        },
        {
            name:"Cancelled",
            value:cancelled
        }
    ];



    // Prevent empty chart
    const chartData =
        data.every(item=>item.value===0)
        ?
        [
            {
                name:"No Data",
                value:1
            }
        ]
        :
        data;



    return(

        <ResponsiveContainer width="100%" height="100%">


            <PieChart>


                <Pie

                    data={chartData}

                    dataKey="value"

                    cx="50%"

                    cy="50%"

                    outerRadius={90}

                    label


                >

                    {
                        chartData.map((item,index)=>(

                            <Cell

                                key={item.name}

                                fill={
                                    item.name==="No Data"
                                    ?
                                    "#cccccc"
                                    :
                                    COLORS[index]
                                }

                            />

                        ))
                    }


                </Pie>


                <Tooltip/>

                <Legend/>


            </PieChart>


        </ResponsiveContainer>

    );

}