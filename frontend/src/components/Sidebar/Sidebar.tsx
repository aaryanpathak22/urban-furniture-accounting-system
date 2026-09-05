import {
  LayoutDashboard,
  Users,
  Package,
  ShoppingCart,
  FileText,
  CreditCard,
  BookOpen,
  BarChart3,
  WalletCards,
  UserCircle,
  Settings
} from "lucide-react";

import { useLocation, useNavigate } from "react-router-dom";


const menu = [

  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard
  },

  {
    name: "Master Data",
    children: [
      {
        name: "Contacts",
        path: "/contacts",
        icon: Users
      },
      {
        name: "Products",
        path: "/products",
        icon: Package
      },
      {
        name: "Accounts",
        path: "/accounts",
        icon: WalletCards
      }
    ]
  },

  {
    name: "Sales",
    children: [
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
      }
    ]
  },

  {
    name: "Purchase",
    children: [
      {
        name: "Purchase Orders",
        path: "/purchase-orders",
        icon: ShoppingCart
      },
      {
        name: "Vendor Bills",
        path: "/vendor-bills",
        icon: FileText
      }
    ]
  },

  {
    name: "Accounting",
    children: [
      {
        name: "Journals",
        path: "/journals",
        icon: BookOpen
      },
      {
        name: "Ledger",
        path: "/ledger",
        icon: BookOpen
      }
    ]
  },


  {
    name: "Profile",
    path: "/profile",
    icon: UserCircle
  },


  {
    name: "Reports",
    path: "/reports",
    icon: BarChart3
  },


  {
    name: "Settings",
    path: "/settings",
    icon: Settings
  }

];



export default function Sidebar() {

  const navigate = useNavigate();
  const location = useLocation();


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


        {menu.map((item) => {


          if (item.children) {


            return (

              <div key={item.name}>


                <div
                  className="
                  text-sm
                  text-gray-500
                  mt-5
                  mb-2
                  "
                >
                  {item.name}
                </div>


                {
                  item.children.map((child) => {


                    const ChildIcon = child.icon;

                    const active =
                      location.pathname === child.path;



                    return (

                      <div

                        key={child.path}

                        onClick={() =>
                          navigate(child.path)
                        }


                        className={`

                        flex
                        items-center
                        gap-3
                        px-4
                        py-3
                        rounded-lg
                        cursor-pointer
                        transition


                        ${
                          active
                          ?
                          "bg-[#F3EAF0] text-[#714B67] font-semibold"
                          :
                          "hover:bg-gray-100"
                        }

                        `}

                      >

                        <ChildIcon size={18}/>


                        <span>
                          {child.name}
                        </span>


                      </div>

                    );

                  })
                }


              </div>

            );

          }



          const ItemIcon = item.icon;


          const active =
            location.pathname === item.path;



          return (

            <div

              key={item.path}

              onClick={() =>
                navigate(item.path!)
              }


              className={`

              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-lg
              cursor-pointer


              ${
                active
                ?
                "bg-[#F3EAF0] text-[#714B67] font-semibold"
                :
                "hover:bg-gray-100"
              }

              `}

            >

              {
                ItemIcon &&
                <ItemIcon size={18}/>
              }


              <span>
                {item.name}
              </span>


            </div>

          );


        })}


      </nav>


    </aside>

  );

}