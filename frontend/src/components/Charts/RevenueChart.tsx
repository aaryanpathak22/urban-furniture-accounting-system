import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";


interface Props{

    revenue:number;

}



export default function RevenueChart({
    revenue
}:Props){


const data=[

    {
        month:"Current",
        revenue:revenue
    }

];



return(

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


);

}