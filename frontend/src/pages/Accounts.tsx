const Accounts = () => {

return (

<div>

<h1 className="text-3xl font-bold">
Chart of Accounts
</h1>


<div className="mt-6 border rounded-lg">

<table className="w-full">

<thead>

<tr className="border-b">

<th className="p-4 text-left">
Account Name
</th>

<th>
Type
</th>

<th>
Balance
</th>

</tr>

</thead>


<tbody>

<tr className="border-b">

<td className="p-4">
Cash
</td>

<td>
Asset
</td>

<td>
₹0
</td>

</tr>


<tr>

<td className="p-4">
Sales Revenue
</td>

<td>
Income
</td>

<td>
₹0
</td>

</tr>


</tbody>


</table>

</div>


</div>

)

}


export default Accounts;