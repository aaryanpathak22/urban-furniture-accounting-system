import {
    useEffect,
    useState
} from "react";


import {
    getReports
} from "../api/services/reportService";


import type {
    Report
} from "../api/services/reportService";



export default function Reports(){


    const [reports,setReports] =
        useState<Report[]>([]);




    useEffect(()=>{


        const loadReports = async()=>{


            const data =
                await getReports();


            setReports(data);


        };


        loadReports();


    },[]);





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
                    Reports
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

                    + Generate Report

                </button>


            </div>






            <div className="
                bg-white
                border
                rounded-xl
                overflow-hidden
            ">


                <table className="w-full">


                    <thead>


                        <tr className="border-b">


                            <th className="
                            p-4
                            text-left
                            ">
                                Report Name
                            </th>



                            <th className="
                            p-4
                            text-left
                            ">
                                Type
                            </th>



                            <th className="
                            p-4
                            text-left
                            ">
                                Period
                            </th>



                            <th className="
                            p-4
                            text-left
                            ">
                                Status
                            </th>



                            <th className="
                            p-4
                            text-left
                            ">
                                Actions
                            </th>



                        </tr>


                    </thead>





                    <tbody>


                    {

                    reports.map(report=>(


                        <tr
                            key={report.id}
                            className="
                            border-b
                            hover:bg-gray-50
                            "
                        >



                            <td className="p-4">

                                {report.reportName}

                            </td>




                            <td className="p-4">

                                {report.reportType}

                            </td>




                            <td className="p-4">

                                {report.period}

                            </td>





                            <td className="p-4">


                                <span
                                className="
                                bg-green-100
                                text-green-700
                                px-3
                                py-1
                                rounded-full
                                text-sm
                                "
                                >

                                    {report.status}

                                </span>


                            </td>





                            <td className="p-4">


                                <button
                                className="
                                text-[#714B67]
                                "
                                >

                                    View

                                </button>


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