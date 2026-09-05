import { useEffect, useState } from "react";
import { getJournals } from "../api/services/journalService";


interface Journal {

    id: string;
    entryNumber: string;
    date: string;
    account: string;
    description: string;
    amount: number;

}



export default function Journals() {


    const [journals, setJournals] = useState<Journal[]>([]);



    useEffect(() => {


        const loadJournals = async () => {

            const data = await getJournals();

            setJournals(data);

        };


        loadJournals();


    }, []);




    return (

        <div>


            <h1 className="text-3xl font-bold mb-6">
                Journals
            </h1>



            <div
                className="
                bg-white
                rounded-xl
                border
                overflow-hidden
                "
            >


                <table className="w-full">


                    <thead>

                        <tr className="border-b">


                            <th className="p-4 text-left">
                                Entry Number
                            </th>


                            <th className="p-4 text-left">
                                Date
                            </th>


                            <th className="p-4 text-left">
                                Account
                            </th>


                            <th className="p-4 text-left">
                                Description
                            </th>


                            <th className="p-4 text-left">
                                Amount
                            </th>


                        </tr>


                    </thead>



                    <tbody>


                        {
                            journals.map((journal) => (


                                <tr
                                    key={journal.id}
                                    className="border-b"
                                >


                                    <td className="p-4">
                                        {journal.entryNumber}
                                    </td>


                                    <td className="p-4">
                                        {journal.date}
                                    </td>


                                    <td className="p-4">
                                        {journal.account}
                                    </td>


                                    <td className="p-4">
                                        {journal.description}
                                    </td>


                                    <td className="p-4">
                                        ₹{journal.amount}
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