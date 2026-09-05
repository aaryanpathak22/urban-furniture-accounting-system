export default function Settings() {


    return (

        <div>


            <h1 className="text-3xl font-bold mb-6">
                Settings
            </h1>




            <div
                className="
                bg-white
                border
                rounded-xl
                p-6
                space-y-6
                "
            >



                <div>

                    <h2 className="text-xl font-semibold mb-2">
                        Company Settings
                    </h2>


                    <p className="text-gray-500">
                        Manage your company information and preferences.
                    </p>


                </div>





                <div className="grid grid-cols-2 gap-6">



                    <div>

                        <label className="block mb-2 text-sm">
                            Company Name
                        </label>


                        <input
                            value="Urban Furniture"
                            readOnly
                            className="
                            border
                            rounded-lg
                            px-4
                            py-2
                            w-full
                            "
                        />


                    </div>




                    <div>

                        <label className="block mb-2 text-sm">
                            Currency
                        </label>


                        <input
                            value="INR ₹"
                            readOnly
                            className="
                            border
                            rounded-lg
                            px-4
                            py-2
                            w-full
                            "
                        />


                    </div>



                </div>





                <div>


                    <h2 className="text-xl font-semibold mb-2">
                        Account Preferences
                    </h2>



                    <div className="flex items-center gap-3">


                        <input
                            type="checkbox"
                            checked
                            readOnly
                        />


                        <span>
                            Enable email notifications
                        </span>


                    </div>


                </div>





                <button
                    className="
                    bg-[#714B67]
                    text-white
                    px-6
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