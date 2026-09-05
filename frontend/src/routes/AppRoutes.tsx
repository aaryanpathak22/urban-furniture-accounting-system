import { Routes, Route } from "react-router-dom";


import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import Products from "../pages/Products";
import SalesOrders from "../pages/SalesOrders";
import Invoices from "../pages/Invoices";
import Payments from "../pages/Payments";
import Journals from "../pages/Journals";
import Reports from "../pages/Reports";


export default function AppRoutes(){

    return (

        <Routes>


            <Route 
                path="/dashboard"
                element={<Dashboard />}
            />


            <Route 
                path="/customers"
                element={<Customers />}
            />


            <Route 
                path="/products"
                element={<Products />}
            />


            <Route 
                path="/sales-orders"
                element={<SalesOrders />}
            />


            <Route 
                path="/invoices"
                element={<Invoices />}
            />


            <Route 
                path="/payments"
                element={<Payments />}
            />


            <Route 
                path="/journals"
                element={<Journals />}
            />


            <Route 
                path="/reports"
                element={<Reports />}
            />


        </Routes>

    )

}