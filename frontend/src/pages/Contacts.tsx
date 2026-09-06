import { useEffect, useState } from "react";
import axios from "axios";


interface Contact {

    id:number;
    name:string;
    type:string;
    email:string;
    phone:string;
    status:string;

}



export default function Contacts(){


    const [contacts,setContacts] = useState<Contact[]>([]);



    useEffect(()=>{


        axios
        .get<Contact[]>(
            "http://localhost:8080/api/contacts"
        )

        .then((response)=>{


            console.log(
                "CONTACT DATA:",
                response.data
            );


            setContacts(response.data);


        })

        .catch((error)=>{


            console.error(
                "CONTACT API ERROR:",
                error
            );


        });



    },[]);





    return (

        <div>


            <h1
                className="
                text-3xl
                font-bold
                mb-6
                "
            >

                Contacts

            </h1>





            <div
                className="
                flex
                justify-between
                mb-6
                "
            >


                <div
                    className="
                    flex
                    gap-4
                    "
                >

                    <input

                        placeholder="Search contacts..."

                        className="
                        border
                        rounded-lg
                        px-4
                        py-2
                        w-52
                        "

                    />


                    <select

                        className="
                        border
                        rounded-lg
                        px-4
                        py-2
                        "

                    >

                        <option>
                            All
                        </option>


                    </select>


                </div>




                <button

                    className="
                    bg-[#714B67]
                    text-white
                    px-5
                    py-2
                    rounded-lg
                    "

                >

                    + Add Contact

                </button>



            </div>







            <div
                className="
                bg-white
                border
                rounded-xl
                overflow-hidden
                "
            >


                <table
                    className="
                    w-full
                    "
                >


                    <thead>


                        <tr
                            className="
                            border-b
                            "
                        >


                            <th className="p-4 text-left">
                                Name
                            </th>


                            <th className="p-4 text-left">
                                Type
                            </th>


                            <th className="p-4 text-left">
                                Email
                            </th>


                            <th className="p-4 text-left">
                                Phone
                            </th>


                            <th className="p-4 text-left">
                                Status
                            </th>


                            <th className="p-4 text-left">
                                Actions
                            </th>


                        </tr>


                    </thead>





                    <tbody>


                    {
                        contacts.map((contact)=>(


                            <tr
                                key={contact.id}
                                className="
                                border-b
                                "
                            >


                                <td className="p-4">

                                    {contact.name}

                                </td>



                                <td className="p-4">

                                    {contact.type}

                                </td>



                                <td className="p-4">

                                    {contact.email}

                                </td>



                                <td className="p-4">

                                    {contact.phone}

                                </td>



                                <td className="p-4">

                                    {contact.status}

                                </td>



                                <td className="p-4">


                                    <button
                                        className="
                                        text-[#714B67]
                                        mr-3
                                        "
                                    >

                                        Edit

                                    </button>



                                    <button
                                        className="
                                        text-red-500
                                        "
                                    >

                                        Delete

                                    </button>


                                </td>



                            </tr>


                        ))
                    }



                    {
                        contacts.length===0 && (

                            <tr>

                                <td
                                    colSpan={6}
                                    className="
                                    text-center
                                    p-8
                                    text-gray-500
                                    "
                                >

                                    No contacts found

                                </td>


                            </tr>

                        )
                    }



                    </tbody>



                </table>



            </div>





        </div>

    );


}