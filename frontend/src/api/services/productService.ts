import axios from "../axios";


export interface Product {

    id:number;

    name:string;

    type:string;

    category:string;

    salesPrice:number;

    purchasePrice:number;

    active:boolean;

}




export const getProducts = async():Promise<Product[]> => {


    const response = await axios.get("/products");


    return response.data;

};





export const createProduct = async(product:Product)=>{


    const response = await axios.post(
        "/products",
        product
    );


    return response.data;

};