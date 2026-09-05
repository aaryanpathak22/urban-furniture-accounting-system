interface Props {
    status:string;
}


export default function StatusBadge({
    status
}:Props){


    return (

        <span
            className="
            px-3
            py-1
            rounded-full
            text-sm
            bg-green-100
            text-green-700
            "
        >

            {status}

        </span>

    );

}