import { useState } from "react";

import ActionButton from "../components/Common/ActionButton";
import SearchBar from "../components/Common/SearchBar";
import StatusBadge from "../components/Common/StatusBadge";


const products = [

{
 id:1,
 name:"Office Chair",
 type:"Goods",
 category:"Furniture",
 salesPrice:7000,
 purchasePrice:5000,
 active:true
},

{
 id:2,
 name:"Wooden Table",
 type:"Goods",
 category:"Furniture",
 salesPrice:15000,
 purchasePrice:11000,
 active:true
},

{
 id:3,
 name:"Executive Sofa",
 type:"Goods",
 category:"Furniture",
 salesPrice:45000,
 purchasePrice:32000,
 active:true
},

{
 id:4,
 name:"Dining Table",
 type:"Goods",
 category:"Furniture",
 salesPrice:30000,
 purchasePrice:22000,
 active:false
}

];



export default function Products(){


const [search,setSearch] = useState("");



const filteredProducts = products.filter((product)=>{

return product.name
.toLowerCase()
.includes(search.toLowerCase());

});



return (

<div className="p-6">


<div
className="
flex
justify-between
items-center
mb-6
"
>


<h1
className="
text-3xl
font-bold
"
>
Products
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

+ Add Product

</button>


</div>





<div
className="
flex
gap-4
mb-6
"
>


<SearchBar

value={search}

onChange={setSearch}

placeholder="Search products..."

/>



<select

className="
border
rounded-lg
px-4
py-2
"

>

<option>
All Categories
</option>


<option>
Furniture
</option>


</select>



</div>






<div

className="
bg-white
border
rounded-xl
overflow-hidden
"

>


<table

className="
w-full
"

>


<thead>


<tr className="border-b">


<th className="p-4 text-left">
Name
</th>


<th className="p-4 text-left">
Type
</th>


<th className="p-4 text-left">
Category
</th>


<th className="p-4 text-left">
Sales Price
</th>


<th className="p-4 text-left">
Purchase Price
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
filteredProducts.map((product)=>(


<tr

key={product.id}

className="
border-b
"

>


<td className="p-4">
{product.name}
</td>


<td className="p-4">
{product.type}
</td>


<td className="p-4">
{product.category}
</td>


<td className="p-4">
₹{product.salesPrice}
</td>


<td className="p-4">
₹{product.purchasePrice}
</td>




<td className="p-4">


<StatusBadge

status={
product.active
?
"Active"
:
"Inactive"
}

/>


</td>





<td

className="
p-4
flex
gap-3
"

>


<ActionButton

label="View"

onClick={()=>
console.log("view",product.id)
}

/>



<ActionButton

label="Edit"

onClick={()=>
console.log("edit",product.id)
}

/>



<ActionButton

label="Delete"

onClick={()=>
console.log("delete",product.id)
}

/>



</td>




</tr>


))


}



</tbody>


</table>


</div>


</div>


)

}