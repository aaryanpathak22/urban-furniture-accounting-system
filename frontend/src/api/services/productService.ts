import axios from "../axios";


export interface Product {

    id: string;

    name: string;

    category: string;

    type: string;

    sellingPrice: number;

    purchasePrice: number;

    status: string;

}




export const getProducts = async (): Promise<Product[]> => {


    try {


        const response = await axios.get("/products");



        if (!Array.isArray(response.data)) {

            return [];

        }



        return response.data.map(

            (product: Record<string, unknown>): Product => ({


                id:
                    String(
                        product.id ?? ""
                    ),



                name:
                    String(
                        product.name ?? "Unknown"
                    ),



                category:
                    String(
                        product.category ?? "-"
                    ),



                type:
                    String(
                        product.unit ?? "Goods"
                    ),



                sellingPrice:
                    Number(
                        product.sellingPrice ?? 0
                    ),



                purchasePrice:
                    Number(
                        product.purchasePrice ?? 0
                    ),



                status:
                    String(
                        product.status ?? "Active"
                    )



            })

        );



    }
    catch(error){


        console.error(
            "Failed to fetch products",
            error
        );


        return [];


    }


};