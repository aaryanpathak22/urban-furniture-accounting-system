import {
    useEffect,
    useState
} from "react";


import {
    getJournals,
    type Journal
} from "../api/services/journalService";



export default function Journals() {


    const [
        journals,
        setJournals
    ] = useState<Journal[]>([]);



    useEffect(() => {


        const loadJournals = async () => {


            const data = await getJournals();


            setJournals(data);


        };


        loadJournals();


    }, []);





    return (

        <div className="p-8">


            <h1 className="text-3xl font-bold mb-6">

                Journals

            </h1>



            <div className="border rounded-lg overflow-hidden">


                <table className="w-full">


                    <thead>


                        <tr className="bg-gray-100">


                            <th className="p-3 text-left">
                                Journal Number
                            </th>


                            <th className="p-3 text-left">
                                Date
                            </th>


                            <th className="p-3 text-left">
                                Reference
                            </th>


                            <th className="p-3 text-left">
                                Description
                            </th>


                            <th className="p-3 text-left">
                                Debit
                            </th>


                            <th className="p-3 text-left">
                                Credit
                            </th>


                        </tr>


                    </thead>



                    <tbody>


                        {

                            journals.map(

                                (journal)=>(


                                    <tr
                                        key={journal.id}
                                        className="border-t"
                                    >


                                        <td className="p-3">

                                            {journal.journalNumber}

                                        </td>



                                        <td className="p-3">

                                            {journal.date}

                                        </td>



                                        <td className="p-3">

                                            {journal.reference}

                                        </td>



                                        <td className="p-3">

                                            {journal.description}

                                        </td>



                                        <td className="p-3">

                                            ₹ {journal.debit}

                                        </td>



                                        <td className="p-3">

                                            ₹ {journal.credit}

                                        </td>


                                    </tr>


                                )

                            )

                        }


                    </tbody>



                </table>


            </div>



        </div>


    );


}