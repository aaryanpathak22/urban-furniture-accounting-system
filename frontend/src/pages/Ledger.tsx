import { useEffect, useState } from "react";
import { getLedger } from "../api/services/reportService";
import SearchBar from "../components/Common/SearchBar";


interface LedgerEntry {

    id: string;
    accountName: string;
    date: string;
    description: string;
    debit: number;
    credit: number;
    balance: number;

}



export default function Ledger() {


    const [ledger, setLedger] = useState<LedgerEntry[]>([]);
    const [search, setSearch] = useState("");



    useEffect(() => {


        const loadLedger = async () => {

            const data = await getLedger();

            setLedger(data);

        };


        loadLedger();


    }, []);




    const filteredLedger = ledger.filter((entry) =>


        entry.accountName
            .toLowerCase()
            .includes(search.toLowerCase())


        ||

        entry.description
            .toLowerCase()
            .includes(search.toLowerCase())


    );





    return (

        <div>


            <h1 className="
                text-3xl
                font-bold
                mb-6
            ">
                Ledger
            </h1>




            <div className="mb-5">


                <SearchBar

                    placeholder="Search ledger..."

                    value={search}

                    onChange={setSearch}

                />


            </div>





            <div className="
                bg-white
                rounded-xl
                border
                overflow-hidden
            ">


                <table className="w-full">


                    <thead>


                        <tr className="border-b">


                            <th className="p-4 text-left">
                                Account
                            </th>


                            <th className="p-4 text-left">
                                Date
                            </th>


                            <th className="p-4 text-left">
                                Description
                            </th>


                            <th className="p-4 text-left">
                                Debit
                            </th>


                            <th className="p-4 text-left">
                                Credit
                            </th>


                            <th className="p-4 text-left">
                                Balance
                            </th>


                        </tr>


                    </thead>





                    <tbody>


                        {
                            filteredLedger.map((entry)=>(


                                <tr

                                    key={entry.id}

                                    className="
                                    border-b
                                    hover:bg-gray-50
                                    "

                                >


                                    <td className="p-4">
                                        {entry.accountName}
                                    </td>


                                    <td className="p-4">
                                        {entry.date}
                                    </td>


                                    <td className="p-4">
                                        {entry.description}
                                    </td>


                                    <td className="p-4">
                                        ₹{entry.debit}
                                    </td>


                                    <td className="p-4">
                                        ₹{entry.credit}
                                    </td>


                                    <td className="p-4 font-semibold">
                                        ₹{entry.balance}
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