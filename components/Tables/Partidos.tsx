import Image from "next/image"


export const Partidos = (props:any) => {

return (
<>
<div>
<div className="md:w-full pb-2 flex justify-center pt-2 h-max">
  <table className="table-auto   border-cyan-700 font-mono ">
    <thead className="text-white ">
<tr>
<th className="py-2 bg-cyan-800">Proximos Partidos</th>
</tr>
      </thead>


      <tbody>
{props.matchs.map((a:any)  => {
return (
    <tr  key={a.game_id} className="shadow-xl shadow-black border-solid border-2 border-blue-900 flex pt-1 gap-6 font-mono text-sm  text-cyan-50 bg-gray-800">

    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-start"><Image alt="image" className='md:w-6 w-4 h-4 md:h-6' src={props.escudo(a.home.name)}></Image>{a.home.name}</td>
    <td className="text-center items-center justify-center flex py-3">vs</td>
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-center  md:justify-end">{a.away.name}<Image alt="image" className='md:w-6 w-4 h-4 md:h-6 flex justify-end' src={props.escudo(a.away.name)}></Image></td>
    <td className="text-center py-3 md:w-14 w-full border-solid border-blue-400 border-y-2 items-center bg-blue-800 flex justify-center">{props.fecha(a.time)}hs</td>
        </tr>
        
)})} 
</tbody>
</table>

</div>
</div>

</>
)
}
