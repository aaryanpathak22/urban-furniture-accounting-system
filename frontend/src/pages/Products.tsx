import {
    useEffect,
    useState
} from "react";


import ActionButton from "../components/Common/ActionButton";
import SearchBar from "../components/Common/SearchBar";
import StatusBadge from "../components/Common/StatusBadge";


import {
    getProducts,
    type Product
} from "../api/services/productService";





export default function Products(){



const [
    products,
    setProducts
] = useState<Product[]>([]);




const [
    search,
    setSearch
] = useState("");




const [
    category,
    setCategory
] = useState("All Categories");






useEffect(()=>{


    const loadProducts = async()=>{


        const data = await getProducts();


        setProducts(data);


    };


    loadProducts();



},[]);







const categories = [

    "All Categories",

    ...Array.from(

        new Set(

            products.map(

                product=>product.category

            )

        )

    )

];







const filteredProducts = products.filter((product)=>{



    const matchesSearch =

        product.name

        .toLowerCase()

        .includes(

            search.toLowerCase()

        );




    const matchesCategory =

        category === "All Categories"

        ||

        product.category === category;



    return matchesSearch && matchesCategory;



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

value={category}

onChange={(e)=>
setCategory(e.target.value)
}

className="
border
rounded-lg
px-4
py-2
"

>


{

categories.map((cat)=>(


<option

key={cat}

value={cat}

>

{cat}

</option>


))


}


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

₹{product.sellingPrice}

</td>






<td className="p-4">

₹{product.purchasePrice}

</td>







<td className="p-4">


<StatusBadge


status={

product.status === "Active"

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
console.log(
"view",
product.id
)
}

/>





<ActionButton

label="Edit"

onClick={()=>
console.log(
"edit",
product.id
)
}

/>






<ActionButton

label="Delete"

onClick={()=>
console.log(
"delete",
product.id
)
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