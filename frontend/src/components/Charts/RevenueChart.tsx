import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";


interface RevenueChartProps {
  revenue?: number;
}


export default function RevenueChart({
  revenue = 0
}: RevenueChartProps) {


const total = revenue === 0 ? 100000 : revenue;


const data = [
  {
    month:"Jan",
    revenue: total * 0.2
  },
  {
    month:"Feb",
    revenue: total * 0.35
  },
  {
    month:"Mar",
    revenue: total * 0.5
  },
  {
    month:"Apr",
    revenue: total * 0.75
  },
  {
    month:"May",
    revenue: total
  }
];


return (

<ResponsiveContainer width="100%" height={250}>

<LineChart data={data}>

<CartesianGrid />

<XAxis dataKey="month"/>

<YAxis/>

<Tooltip/>

<Line
type="monotone"
dataKey="revenue"
strokeWidth={3}
/>

</LineChart>

</ResponsiveContainer>

);

}