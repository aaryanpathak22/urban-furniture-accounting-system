interface ActionButtonProps {

    label: string;

    onClick: () => void;

}



export default function ActionButton({

    label,

    onClick

}: ActionButtonProps) {


    return (

        <button

            onClick={onClick}

            className="
            text-[#714B67]
            hover:underline
            cursor-pointer
            "

        >

            {label}

        </button>

    );

}