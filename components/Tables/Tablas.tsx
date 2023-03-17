import { useState } from "react"
import { DetailsClose } from "../DetailsClose"
import DetailsTeam from "../DetailsTeam"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { setIsModal, setIsModalopen } from "@/redux/modalSlice";
import { LoadRemove, LoadStart } from "../Loading";



export default function Tablas (props: any)  {

const dispatch = useAppDispatch()

const modal = useAppSelector(setIsModalopen);
const [select, setSelect] = useState<string>("")

function selectTeam(e:any){
  LoadStart()
  setSelect(e)
  dispatch(setIsModal(true))
}


return (
<>

<div className="md:w-full flex justify-center  pt-5 sm:px-1 text-sm h-max ">
  <table className="table-auto border-2  border-cyan-700 font-mono ">
    <thead  className="text-white ">
        <tr>
<th className="py-3 bg-cyan-800">#</th>
<th className="py-3 bg-cyan-800">Equipo</th>
<th className="py-3 bg-cyan-800">Pts</th>
<th className="py-3 bg-cyan-800">PJ</th>
<th className="py-3 bg-cyan-800">PG</th>
<th className="py-3 bg-cyan-800">PE</th>
<th className="py-3 bg-cyan-800">PP</th>
<th className="py-3 bg-cyan-800">GF</th>
<th className="py-3 bg-cyan-800">GC</th>
<th className="py-3 bg-cyan-800">Dif</th>
      </tr>
      </thead>
{props.res.map((a:any) => {
 return (
<tbody key={a.id} className="text-center">
  <>
<tr  onClick={()=>selectTeam(a.id)} className="text-white hover:bg-gray-900 cursor-pointer bg-gray-800 border-b border-gray-700">

<td className="w-1 border-solid sm:px-0.5 border-r-2 items-center border-white">{a.standing.position}</td>
<td className="md:w-60 sm:w-auto flex items-center border-solid border-r-2 text-left  justify-start"><img  className="md:w-6 w-3 " src={a.images.urlLogo[2]}></img> {a.name.slice(0, 20)}</td>
<td className="text-center md:px-2 px-1.5 w-1 border-solid border-r-2">{a.standing.points}</td>
<td className="text-center md:px-2 px-1.5 border-solid border-r-2">{a.standing.played}</td>
<td className="text-center md:px-2 px-1.5 border-solid border-r-2">{a.standing.won}</td>
<td className="text-center md:px-2 px-1.5 border-solid border-r-2">{a.standing.drawn}</td>
<td className="text-center md:px-2 px-1.5 border-solid border-r-2">{a.standing.lost}</td>
<td className="text-center md:px-2 px-1.5 border-solid border-r-2">{a.standing.for}</td>
<td className="text-center md:px-2 px-1.5 border-solid border-r-2">{a.standing.against}</td>
<td className="text-center px-1 md:px-2">{parseInt(a.standing.for) - parseInt(a.standing.against)}</td>
</tr>
 

{modal && <DetailsClose />}
{modal ? 
    <tr >
      <th >
      <DetailsTeam data={a} id={select}/>
      </th>
      </tr>
    :null}

</>
</tbody>
)})
}

  </table>
</div>     
</>

)}









