import Image from "next/image"
export default function Goles(props: any)  {


    return (
<>
<div>
<h1 className="text-2xl font-mono font-black shadow-xl rounded-xl border border-solid border-y-black bg-teal-100 flex items-center justify-center">Maximos Goleadores</h1>
<div className=" md:w-full flex justify-center h-max">
  <table className="table-auto border-2  border-cyan-700 font-mono ">
    <thead className="text-white ">
    <tr>
<th className="px-3 bg-cyan-800">#</th>
<th className="px-3 bg-cyan-800">Jugador</th>
<th className="px-3 bg-cyan-800">Goles</th>
<th className="px-3 bg-cyan-800">PJ</th>
<th className="px-3 bg-cyan-800">Prom.</th>
      </tr>
        </thead>
        <tbody className="text-center">
{props.goles.data.rank.slice(0,10).map((a:any) => {
return (
<tr key={a.id} className="text-white hover:bg-gray-900 bg-gray-800 border-b border-gray-700">

<td className="text-center px-2 w-1 border-solid border-r-2">{a.rankGoals}</td>
<td className="md:w-60 sm:w-auto border-solid border-r-2 flex items-center text-left  justify-start"><Image alt="logo" className="w-6" src={props.escudo(a.teamName)}></Image> {a.knownName} </td>
<td className="text-center px-2  border-solid border-r-2">{a.goals}</td>
<td className="text-center px-2 border-solid border-r-2">{a.games}</td>
<td className="text-center border-solid">{a.averageGoals}</td>
</tr>


)})}

</tbody>
        </table>
        </div>
        </div>

</>


    )

}

