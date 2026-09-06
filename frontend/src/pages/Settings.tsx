import {
    useEffect,
    useState
} from "react";


import {
    getSettings
} from "../api/services/settingsService";


import type {
    Setting
} from "../api/services/settingsService";



export default function Settings() {


    const [, setSettings] =
        useState<Setting[]>([]);



    const [companyName, setCompanyName] =
        useState("");



    const [currency, setCurrency] =
        useState("");



    const [emailNotification, setEmailNotification] =
        useState(true);





    useEffect(() => {


        const loadSettings = async () => {


            const data =
                await getSettings();



            setSettings(data);



            const companyDetails =
                data.find(
                    setting =>
                        setting.key === "companyDetails"
                );



            if (companyDetails) {


                setCompanyName(
                    String(
                        companyDetails.value.companyName ?? ""
                    )
                );


            }





            const paymentConfiguration =
                data.find(
                    setting =>
                        setting.key === "paymentConfiguration"
                );



            if (paymentConfiguration) {


                setCurrency(
                    String(
                        paymentConfiguration.value.currency ?? "INR ₹"
                    )
                );


            }



        };



        loadSettings();



    }, []);





    return (


        <div>


            <h1
                className="
                text-3xl
                font-bold
                mb-6
                "
            >

                Settings

            </h1>





            <div
                className="
                bg-white
                border
                rounded-xl
                p-6
                "
            >



                <h2
                    className="
                    text-xl
                    font-semibold
                    mb-6
                    "
                >

                    Company Settings

                </h2>





                <div
                    className="
                    grid
                    grid-cols-2
                    gap-5
                    "
                >




                    <div>


                        <label
                            className="
                            block
                            mb-2
                            "
                        >

                            Company Name

                        </label>



                        <input

                            value={companyName}

                            onChange={
                                e =>
                                    setCompanyName(
                                        e.target.value
                                    )
                            }


                            className="
                            w-full
                            border
                            rounded-lg
                            p-3
                            "

                        />


                    </div>






                    <div>


                        <label
                            className="
                            block
                            mb-2
                            "
                        >

                            Currency

                        </label>



                        <input

                            value={currency}

                            onChange={
                                e =>
                                    setCurrency(
                                        e.target.value
                                    )
                            }


                            className="
                            w-full
                            border
                            rounded-lg
                            p-3
                            "

                        />


                    </div>



                </div>







                <div
                    className="
                    mt-6
                    "
                >


                    <h3
                        className="
                        font-semibold
                        mb-3
                        "
                    >

                        Account Preferences

                    </h3>




                    <label>


                        <input

                            type="checkbox"

                            checked={emailNotification}


                            onChange={
                                e =>
                                    setEmailNotification(
                                        e.target.checked
                                    )
                            }


                            className="
                            mr-2
                            "

                        />


                        Enable email notifications


                    </label>


                </div>







                <button

                    className="
                    mt-6
                    bg-[#714B67]
                    text-white
                    px-5
                    py-2
                    rounded-lg
                    "

                >

                    Save Settings


                </button>





            </div>




        </div>


    );



}