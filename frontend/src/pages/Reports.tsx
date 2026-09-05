import { useEffect, useState } from "react";
import { getReports } from "../api/services/reportService";


interface Report {

    id: string;
    name: string;
    period: string;
    amount: number;
    status: string;

}



export default function Reports() {


    const [reports, setReports] = useState<Report[]>([]);



    useEffect(() => {


        const loadReports = async () => {

            const data = await getReports();

            setReports(data);

        };


        loadReports();


    }, []);




    return (

        <div>


            <h1 className="text-3xl font-bold mb-6">
                Reports
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
                                Report Name
                            </th>


                            <th className="p-4 text-left">
                                Period
                            </th>


                            <th className="p-4 text-left">
                                Amount
                            </th>


                            <th className="p-4 text-left">
                                Status
                            </th>


                        </tr>

                    </thead>



                    <tbody>


                        {
                            reports.map((report) => (


                                <tr
                                    key={report.id}
                                    className="border-b"
                                >


                                    <td className="p-4">
                                        {report.name}
                                    </td>


                                    <td className="p-4">
                                        {report.period}
                                    </td>


                                    <td className="p-4">
                                        ₹{report.amount}
                                    </td>


                                    <td className="p-4">
                                        {report.status}
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