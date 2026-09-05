import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import Products from "../pages/Products";
import SalesOrders from "../pages/SalesOrders";
import Invoices from "../pages/Invoices";
import Payments from "../pages/Payments";
import Journals from "../pages/Journals";
import Reports from "../pages/Reports";
import Accounts from "../pages/Accounts";
import PurchaseOrders from "../pages/PurchaseOrders";
import VendorBills from "../pages/VendorBills";
import Ledger from "../pages/Ledger";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";


export default function AppRoutes() {

    return (

        <Routes>


            <Route
                path="/"
                element={<Dashboard />}
            />


            <Route
                path="/dashboard"
                element={<Dashboard />}
            />


            <Route
                path="/contacts"
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


            <Route
                path="/accounts"
                element={<Accounts />}
            />


            <Route
                path="/purchase-orders"
                element={<PurchaseOrders />}
            />


            <Route
                path="/vendor-bills"
                element={<VendorBills />}
            />


            <Route
                path="/ledger"
                element={<Ledger />}
            />


            <Route
                path="/profile"
                element={<Profile />}
            />


            <Route
                path="/settings"
                element={<Settings />}
            />


        </Routes>

    );

}