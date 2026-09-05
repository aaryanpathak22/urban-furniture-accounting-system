import {
  LayoutDashboard,
  Users,
  Package,
  ShoppingCart,
  FileText,
  CreditCard,
  BookOpen,
  BarChart3
} from "lucide-react";

import { useNavigate } from "react-router-dom";


const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard
  },
  {
    name: "Customers",
    path: "/customers",
    icon: Users
  },
  {
    name: "Products",
    path: "/products",
    icon: Package
  },
  {
    name: "Sales Orders",
    path: "/sales-orders",
    icon: ShoppingCart
  },
  {
    name: "Invoices",
    path: "/invoices",
    icon: FileText
  },
  {
    name: "Payments",
    path: "/payments",
    icon: CreditCard
  },
  {
    name: "Journals",
    path: "/journals",
    icon: BookOpen
  },
  {
    name: "Reports",
    path: "/reports",
    icon: BarChart3
  }
];


export default function Sidebar() {

  const navigate = useNavigate();


  return (

    <aside
      className="
      w-64
      min-h-screen
      bg-white
      border-r
      p-5
      "
    >

      <h1
        className="
        text-2xl
        font-bold
        text-[#714B67]
        mb-8
        "
      >
        Urban ERP
      </h1>


      <nav className="space-y-2">


        {
          menuItems.map((item)=>{

            const Icon = item.icon;


            return (

              <div
                key={item.name}
                onClick={() => navigate(item.path)}
                className="
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-lg
                hover:bg-[#F3EAF0]
                cursor-pointer
                "
              >

                <Icon size={20}/>

                <span>
                  {item.name}
                </span>


              </div>

            )

          })
        }


      </nav>


    </aside>

  )
}