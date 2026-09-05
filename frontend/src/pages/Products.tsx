import { useEffect, useState } from "react";
import { getProducts } from "../api/services/productService";


interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    quantity: number;
}


export default function Products() {


    const [products, setProducts] = useState<Product[]>([]);



    useEffect(() => {

        const fetchProducts = async () => {

            const data = await getProducts();

            setProducts(data);

        };


        fetchProducts();

    }, []);



    return (

        <div>


            <h1 className="text-3xl font-bold mb-6">
                Products
            </h1>



            <div
                className="
                    bg-white
                    rounded-xl
                    border
                    overflow-hidden
                "
            >


                <table className="w-full">


                    <thead>

                        <tr className="border-b">


                            <th className="p-4 text-left">
                                Name
                            </th>


                            <th className="p-4 text-left">
                                Category
                            </th>


                            <th className="p-4 text-left">
                                Price
                            </th>


                            <th className="p-4 text-left">
                                Stock
                            </th>


                        </tr>

                    </thead>



                    <tbody>


                        {
                            products.map((product) => (

                                <tr
                                    key={product.id}
                                    className="border-b"
                                >


                                    <td className="p-4">
                                        {product.name}
                                    </td>


                                    <td className="p-4">
                                        {product.category}
                                    </td>


                                    <td className="p-4">
                                        ₹{product.price}
                                    </td>


                                    <td className="p-4">
                                        {product.quantity}
                                    </td>


                                </tr>

                            ))
                        }


                    </tbody>


                </table>


            </div>


        </div>

    );

}