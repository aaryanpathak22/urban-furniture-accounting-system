interface SearchBarProps {

    value: string;

    onChange: (value: string) => void;

    placeholder?: string;

}



export default function SearchBar({

    value,

    onChange,

    placeholder="Search..."

}: SearchBarProps) {


    return (

        <input

            type="text"

            value={value}

            onChange={(e)=>
                onChange(e.target.value)
            }

            placeholder={placeholder}

            className="
            border
            rounded-lg
            px-4
            py-2
            w-64
            outline-none
            "

        />

    );

}