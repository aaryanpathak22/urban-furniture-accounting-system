import { useEffect, useState } from "react";

import {
    getProducts
} from "../api/services/productService";

import type {
    Product
} from "../api/services/productService";



export default function Products() {


    const [products, setProducts] = useState<Product[]>([]);

    const [search, setSearch] = useState("");




    const loadProducts = async () => {

        try {

            const data = await getProducts();

            setProducts(data);

        } catch (error) {

            console.error(
                "Failed to load products",
                error
            );

        }

    };





    useEffect(() => {

        const fetchProducts = async () => {

            await loadProducts();

        };


        fetchProducts();


    }, []);






    const filteredProducts =
        products.filter((product) => {


            const productName =
                product.name?.toLowerCase() || "";


            return productName.includes(
                search.toLowerCase()
            );


        });






    return (


        <div
            style={{
                padding: "30px",
                width: "100%"
            }}
        >



            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "25px"
                }}
            >


                <h1
                    style={{
                        fontSize: "28px",
                        fontWeight: "700"
                    }}
                >
                    Products
                </h1>



                <button

                    style={{
                        background: "#76506f",
                        color: "white",
                        border: "none",
                        padding: "12px 20px",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontWeight: "600"
                    }}

                    onClick={() =>
                        alert(
                            "Add Product feature coming soon"
                        )
                    }

                >

                    + Add Product

                </button>


            </div>






            <div

                style={{
                    display: "flex",
                    gap: "15px",
                    marginBottom: "25px"
                }}

            >



                <input

                    style={{
                        width: "300px",
                        padding: "12px",
                        border: "1px solid #ccc",
                        borderRadius: "8px"
                    }}

                    placeholder="Search products..."

                    value={search}

                    onChange={(e) =>
                        setSearch(e.target.value)
                    }

                />




                <select

                    style={{
                        padding: "12px",
                        border: "1px solid #ccc",
                        borderRadius: "8px"
                    }}

                >

                    <option>
                        All Categories
                    </option>


                </select>



            </div>







            <div

                style={{
                    background: "white",
                    border: "1px solid #ddd",
                    borderRadius: "12px",
                    overflow: "hidden"
                }}

            >



                <table

                    style={{
                        width: "100%",
                        borderCollapse: "collapse"
                    }}

                >



                    <thead>


                        <tr

                            style={{
                                background: "#faf7fa"
                            }}

                        >


                            <th style={head}>
                                Name
                            </th>


                            <th style={head}>
                                Type
                            </th>


                            <th style={head}>
                                Category
                            </th>


                            <th style={head}>
                                Sales Price
                            </th>


                            <th style={head}>
                                Purchase Price
                            </th>


                            <th style={head}>
                                Status
                            </th>



                        </tr>


                    </thead>







                    <tbody>


                        {
                            filteredProducts.map(
                                (product) => (


                                    <tr
                                        key={product.id}
                                    >


                                        <td style={cell}>
                                            {product.name}
                                        </td>


                                        <td style={cell}>
                                            {product.type || "-"}
                                        </td>


                                        <td style={cell}>
                                            {product.category || "-"}
                                        </td>


                                        <td style={cell}>
                                            ₹ {product.salesPrice ?? 0}
                                        </td>


                                        <td style={cell}>
                                            ₹ {product.purchasePrice ?? 0}
                                        </td>


                                        <td style={cell}>

                                            <span

                                                style={{
                                                    background: "#eee",
                                                    padding: "5px 12px",
                                                    borderRadius: "20px",
                                                    fontSize: "13px"
                                                }}

                                            >

                                                Active

                                            </span>


                                        </td>



                                    </tr>


                                )

                            )
                        }




                    </tbody>



                </table>



            </div>




        </div>


    );

}





const head = {

    textAlign: "left" as const,

    padding: "16px",

    borderBottom: "1px solid #ddd",

    fontWeight: "700"

};




const cell = {

    padding: "15px",

    borderBottom: "1px solid #eee",

    fontSize: "14px"

};