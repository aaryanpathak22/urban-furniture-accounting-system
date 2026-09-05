import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";


const data = [
    {
        month:"Jan",
        revenue:40000
    },
    {
        month:"Feb",
        revenue:65000
    },
    {
        month:"Mar",
        revenue:90000
    },
    {
        month:"Apr",
        revenue:120000
    },
    {
        month:"May",
        revenue:150000
    }
];


export default function RevenueChart(){


    return (

        <ResponsiveContainer width="100%" height="100%">

            <LineChart data={data}>

                <XAxis dataKey="month"/>

                <YAxis/>

                <Tooltip/>

                <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#714B67"
                    strokeWidth={3}
                />

            </LineChart>

        </ResponsiveContainer>

    )

}