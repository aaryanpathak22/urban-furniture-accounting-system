import { useEffect, useState } from "react";

import {
    getLedger,
} from "../api/services/ledgerService";

import type {
    LedgerEntry,
} from "../api/services/ledgerService";

import SearchBar from "../components/Common/SearchBar";


export default function Ledger() {

    const [ledgerEntries, setLedgerEntries] = useState<LedgerEntry[]>([]);
    const [search, setSearch] = useState("");


    useEffect(() => {

        const loadLedger = async () => {

            const data = await getLedger();

            setLedgerEntries(data);

        };

        loadLedger();

    }, []);



    const filteredEntries = ledgerEntries.filter((entry) =>
        JSON.stringify(entry)
            .toLowerCase()
            .includes(search.toLowerCase())
    );


    return (

        <div className="p-6">

            <div className="flex justify-between items-center mb-6">

                <h1 className="text-3xl font-bold">
                    Ledger
                </h1>

            </div>


            <SearchBar
                value={search}
                onChange={setSearch}
            />


            <div className="
                bg-white
                border
                rounded-xl
                mt-6
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

                            <th className="p-4 text-right">
                                Debit
                            </th>

                            <th className="p-4 text-right">
                                Credit
                            </th>

                            <th className="p-4 text-right">
                                Balance
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        {
                            filteredEntries.map((entry, index) => (

                                <tr
                                    key={entry.id ?? index}
                                    className="border-b"
                                >

                                    <td className="p-4">
                                        {entry.accountName ?? "-"}
                                    </td>


                                    <td className="p-4">
                                        {
                                            entry.transactionDate
                                            ??
                                            "-"
                                        }
                                    </td>


                                    <td className="p-4">
                                        {
                                            entry.description
                                            ??
                                            "-"
                                        }
                                    </td>


                                    <td className="p-4 text-right">
                                        ₹
                                        {
                                            entry.debit
                                            ??
                                            0
                                        }
                                    </td>


                                    <td className="p-4 text-right">
                                        ₹
                                        {
                                            entry.credit
                                            ??
                                            0
                                        }
                                    </td>


                                    <td className="p-4 text-right">
                                        ₹
                                        {
                                            entry.balance
                                            ??
                                            0
                                        }
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