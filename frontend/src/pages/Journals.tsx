import { useEffect, useState } from "react";
import { getJournals } from "../api/services/journalService";
import SearchBar from "../components/Common/SearchBar";
import ActionButton from "../components/Common/ActionButton";


interface Journal {

    id: string;
    entryNumber: string;
    date: string;
    description: string;
    debit: number;
    credit: number;

}



export default function Journals() {


    const [journals, setJournals] = useState<Journal[]>([]);
    const [search, setSearch] = useState("");



    useEffect(() => {


        const loadJournals = async () => {

            const data = await getJournals();

            setJournals(data);

        };


        loadJournals();


    }, []);




    const filteredJournals = journals.filter((journal)=>

        journal.entryNumber
        .toLowerCase()
        .includes(search.toLowerCase())

        ||

        journal.description
        .toLowerCase()
        .includes(search.toLowerCase())

    );





    return (

        <div>


            <div className="
                flex
                justify-between
                items-center
                mb-6
            ">


                <h1 className="
                    text-3xl
                    font-bold
                ">
                    Journals
                </h1>



                <button
                    className="
                    bg-[#714B67]
                    text-white
                    px-5
                    py-2
                    rounded-lg
                    "
                >

                    + Create Entry

                </button>


            </div>





            <div className="mb-5">

                <SearchBar

                    placeholder="Search journal entries..."

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
                                Entry Number
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
                                Actions
                            </th>


                        </tr>


                    </thead>





                    <tbody>


                    {
                        filteredJournals.map((journal)=>(


                            <tr
                                key={journal.id}
                                className="
                                border-b
                                hover:bg-gray-50
                                "
                            >


                                <td className="p-4">
                                    {journal.entryNumber}
                                </td>


                                <td className="p-4">
                                    {journal.date}
                                </td>


                                <td className="p-4">
                                    {journal.description}
                                </td>


                                <td className="p-4">
                                    ₹{journal.debit}
                                </td>


                                <td className="p-4">
                                    ₹{journal.credit}
                                </td>



                                <td className="
                                    p-4
                                    flex
                                    gap-3
                                ">


                                    <ActionButton
                                        label="View"
                                        onClick={()=>{}}
                                    />


                                    <ActionButton
                                        label="Edit"
                                        onClick={()=>{}}
                                    />


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