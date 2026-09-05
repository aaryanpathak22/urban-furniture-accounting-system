import { useNavigate } from "react-router-dom";


const Header = () => {


const navigate = useNavigate();


return (

<div

className="
h-14
border-b
flex
items-center
justify-between
px-5
bg-white
"

>


<h3 className="font-medium">
Accounting Dashboard
</h3>



<div

className="
cursor-pointer
"

onClick={()=>navigate("/profile")}

>


<div

className="
w-10
h-10
rounded-full
bg-[#714B67]
text-white
flex
items-center
justify-center
"

>

U

</div>


</div>


</div>


)

}


export default Header;