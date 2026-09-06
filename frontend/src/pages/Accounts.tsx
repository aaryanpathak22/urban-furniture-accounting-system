import {
    useEffect,
    useState
} from "react";


import SearchBar from "../components/Common/SearchBar";

import StatusBadge from "../components/Common/StatusBadge";


import {
    getAccounts
} from "../api/services/accountService";


import type {
    Account
} from "../api/services/accountService";




export default function Accounts() {


    const [accounts, setAccounts] = useState<Account[]>([]);


    const [search, setSearch] = useState("");


    const [loading, setLoading] = useState(true);




    useEffect(() => {


        const fetchAccounts = async () => {


            try {


                const data = await getAccounts();


                setAccounts(data);


            } catch (error) {


                console.error(
                    "Failed to load accounts",
                    error
                );


                setAccounts([]);


            } finally {


                setLoading(false);


            }


        };



        fetchAccounts();


    }, []);






    const filteredAccounts = accounts.filter(
        (account) =>


            account.accountName

                .toLowerCase()

                .includes(

                    search.toLowerCase()

                )

    );







    return (


        <div className="p-6">


            <h1

                className="
                text-3xl
                font-bold
                mb-6
                "

            >

                Chart of Accounts

            </h1>







            <div className="mb-6">


                <SearchBar


                    value={search}


                    onChange={setSearch}


                    placeholder="Search accounts..."


                />


            </div>









            <div

                className="
                bg-white
                border
                rounded-xl
                overflow-hidden
                "

            >



                <table className="w-full">



                    <thead>


                        <tr className="border-b">


                            <th className="p-4 text-left">

                                Account Name

                            </th>



                            <th className="p-4 text-left">

                                Type

                            </th>



                            <th className="p-4 text-left">

                                Balance

                            </th>



                            <th className="p-4 text-left">

                                Status

                            </th>



                        </tr>


                    </thead>







                    <tbody>


                        {

                            loading ? (


                                <tr>


                                    <td

                                        colSpan={4}

                                        className="
                                        p-6
                                        text-center
                                        "

                                    >

                                        Loading accounts...


                                    </td>


                                </tr>



                            ) : filteredAccounts.length === 0 ? (


                                <tr>


                                    <td

                                        colSpan={4}

                                        className="
                                        p-6
                                        text-center
                                        "

                                    >

                                        No accounts found


                                    </td>


                                </tr>



                            ) : (


                                filteredAccounts.map(

                                    (account) => (


                                        <tr

                                            key={account.id}

                                            className="border-b"


                                        >



                                            <td className="p-4">


                                                {
                                                    account.accountName
                                                }


                                            </td>





                                            <td className="p-4">


                                                {
                                                    account.accountType
                                                }


                                            </td>





                                            <td className="p-4">


                                                ₹
                                                {
                                                    account.balance
                                                }


                                            </td>







                                            <td className="p-4">


                                                <StatusBadge


                                                    status={
                                                        account.status
                                                    }


                                                />


                                            </td>




                                        </tr>


                                    )


                                )


                            )

                        }



                    </tbody>



                </table>



            </div>



        </div>


    );


}