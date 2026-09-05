interface StatCardProps {

    title: string;

    value: string;

    description?: string;

}


export default function StatCard({
    title,
    value,
    description
}: StatCardProps) {


    return (

        <div
            className="
            bg-white
            rounded-xl
            border
            p-6
            shadow-sm
            "
        >

            <p className="
                text-gray-500
                text-sm
            ">
                {title}
            </p>


            <h2 className="
                text-3xl
                font-bold
                mt-2
                text-[#714B67]
            ">
                {value}
            </h2>


            {
                description && (

                    <p className="
                        text-xs
                        text-gray-500
                        mt-2
                    ">
                        {description}
                    </p>

                )
            }


        </div>

    )

}