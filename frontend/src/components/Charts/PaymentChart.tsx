import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer
} from "recharts";


const data = [

    {
        name:"Completed",
        value:70
    },

    {
        name:"Pending",
        value:20
    },

    {
        name:"Cancelled",
        value:10
    }

];


const COLORS = [
    "#714B67",
    "#F0AD4E",
    "#D9534F"
];


export default function PaymentChart(){


    return (

        <ResponsiveContainer width="100%" height="100%">


            <PieChart>

                <Pie
                    data={data}
                    dataKey="value"
                    outerRadius={100}
                    label
                >

                    {
                        data.map((_,index)=>(
                            <Cell
                                key={index}
                                fill={COLORS[index]}
                            />
                        ))
                    }

                </Pie>


                <Tooltip/>


            </PieChart>


        </ResponsiveContainer>

    )

}