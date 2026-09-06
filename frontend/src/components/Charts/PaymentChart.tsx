import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts";


interface PaymentChartProps {
  completed?: number;
  pending?: number;
  cancelled?: number;
}


export default function PaymentChart({
  completed = 0,
  pending = 0,
  cancelled = 0
}: PaymentChartProps) {


  const data = [
    {
      name: "Completed",
      value: completed
    },
    {
      name: "Pending",
      value: pending
    },
    {
      name: "Cancelled",
      value: cancelled
    }
  ];


  const hasData = data.some(
    item => item.value > 0
  );


  if(!hasData){
    return (
      <div
        style={{
          height:"250px",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        }}
      >
        No Payment Data
      </div>
    );
  }


  return (

    <ResponsiveContainer width="100%" height={250}>

      <PieChart>

        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={90}
          label
        >

        {
          data.map((entry,index)=>(
            <Cell key={index}/>
          ))
        }

        </Pie>


        <Tooltip/>


      </PieChart>

    </ResponsiveContainer>

  );

}