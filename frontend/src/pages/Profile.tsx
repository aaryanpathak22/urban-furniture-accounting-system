export default function Profile() {


    return (

        <div>


            <h1 className="
                text-3xl
                font-bold
                mb-6
            ">
                My Profile
            </h1>




            <div
                className="
                bg-white
                border
                rounded-xl
                p-8
                "
            >



                <div className="
                    flex
                    items-center
                    gap-6
                    mb-8
                ">


                    <div
                        className="
                        w-20
                        h-20
                        rounded-full
                        bg-[#714B67]
                        text-white
                        flex
                        items-center
                        justify-center
                        text-3xl
                        font-bold
                        "
                    >
                        U
                    </div>



                    <div>

                        <h2 className="
                            text-2xl
                            font-semibold
                        ">
                            Admin User
                        </h2>


                        <p className="text-gray-500">
                            Administrator
                        </p>

                    </div>


                </div>





                <div className="
                    grid
                    grid-cols-2
                    gap-6
                ">


                    <div>

                        <label className="text-gray-500">
                            Name
                        </label>

                        <p className="font-semibold">
                            Admin User
                        </p>

                    </div>



                    <div>

                        <label className="text-gray-500">
                            Email
                        </label>

                        <p className="font-semibold">
                            admin@urbanerp.com
                        </p>

                    </div>




                    <div>

                        <label className="text-gray-500">
                            Role
                        </label>

                        <p className="font-semibold">
                            ADMIN
                        </p>

                    </div>




                    <div>

                        <label className="text-gray-500">
                            Status
                        </label>

                        <p className="font-semibold text-green-600">
                            Active
                        </p>

                    </div>



                </div>





                <div className="
                    mt-8
                    flex
                    gap-4
                ">


                    <button
                        className="
                        bg-[#714B67]
                        text-white
                        px-5
                        py-2
                        rounded-lg
                        "
                    >
                        Edit Profile
                    </button>



                    <button
                        className="
                        border
                        px-5
                        py-2
                        rounded-lg
                        "
                    >
                        Change Password
                    </button>



                </div>



            </div>


        </div>

    );

}