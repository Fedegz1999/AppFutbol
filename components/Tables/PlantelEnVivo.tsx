import { useEffect } from "react"
import { LoadRemove } from "../Loading"

export const PlantelEnVivo = (props:any) =>{

    useEffect(()=>{
        LoadRemove()  
        })
        
    return ( 
        <div className="md:flex gap-10 pb-10 justify-center">
<div>

<div className=" md:w-full w-40 pt-5 ml-5 md:ml-0 md:flex md:gap-10 justify-center h-max">

  <table className="table-auto border-2 mt-6 border-cyan-700 font-mono ">
    <thead className="text-white ">

    <tr className="h-8 border-solid border-2 border-teal-900">
            <td colSpan={3} className="bg-teal-900 font-mono text-xl md:px-28 px-16 text-left w-40">EQUIPO LOCAL</td>
        </tr>
        
        <tr className="h-7 border-solid border-2 border-teal-900">
            <td colSpan={3} className="bg-teal-700 font-mono text-sm md:px-36 px-24 text-left w-40">Titulares</td>
        </tr>
        
    <tr>
<th className="px-2 bg-cyan-800">Pos</th>
<th className="px-2 bg-cyan-800">Num</th>
<th className="px-4 bg-cyan-800">Nombre</th>

      </tr>
        </thead>
        <tbody className="text-center">
        {props.data.equipos.results.away ? props.data.equipos.results.home.startinglineup.map((a:any) => {
            return (
                <tr key={a.player.id} className="text-white hover:bg-gray-900 bg-gray-800 border-b border-gray-700">

{a.pos === "Guard" ? 
<>
<td className="text-center px-2 w-1 border-solid text-yellow-500 text-sm border-r-2">Arq</td>
<td className="border-solid border-r-2 flex items-center text-sm text-left justify-center"> {a.shirtnumber} </td>
<td className="text-start px-2 md:w-60  text-sm ">{a.player.name}</td>
</>
 :null}
</tr>
    )
}): null}

            
{props.data.equipos.results.away ? props.data.equipos.results.home.startinglineup.map((a:any) => {
    return (
        <tr key={a.player.id} className="text-white hover:bg-gray-900 bg-gray-800 border-b border-gray-700">

{a.pos === "Defender" ? 
<>
<td className="text-center px-2 w-1 border-solid  text-cyan-500 text-sm border-r-2">Def</td>
<td className="border-solid border-r-2 flex items-center text-sm text-left justify-center"> {a.shirtnumber} </td>
<td className="text-start px-2 md:w-60 text-sm ">{a.player.name}</td>
</>
 :null}
</tr>
    )
}): null}

{props.data.equipos.results.away ? props.data.equipos.results.home.startinglineup.map((a:any) => {
    return (
        <tr key={a.player.id} className="text-white hover:bg-gray-900 bg-gray-800 border-b border-gray-700">

{a.pos === "Midfielder" ? 
<>
<td className="text-center px-2 w-1 border-solid text-green-500  text-sm border-r-2">Med</td>
<td className="border-solid border-r-2 flex items-center text-sm text-left justify-center"> {a.shirtnumber} </td>
<td className="text-start px-2 md:w-60 text-sm ">{a.player.name}</td>
</>
 :null}
</tr>
    )
}): null}

{props.data.equipos.results.away ? props.data.equipos.results.home.startinglineup.map((a:any) => {
    return (
        <tr key={a.player.id} className="text-white hover:bg-gray-900 bg-gray-800 border-b border-gray-700">

{a.pos === "Forward" ? 
<>
<td className="text-center px-2 w-1 border-solid text-red-500 text-sm border-r-2">Del</td>
<td className="border-solid border-r-2 flex items-center text-sm text-left justify-center"> {a.shirtnumber} </td>
<td className="text-start px-2 md:w-60 text-sm ">{a.player.name}</td>

</>
 :null}
</tr>
    )
}): null}
</tbody>
</table>


</div>
<div className="md:flex md:ml-0 ml-5 justify-center ">
<table className="border-2  border-cyan-700 font-mono ">
    <thead className="text-white">
<tr className="h-7 border-solid border-2  border-t-orange-900 border-teal-900">
            <td colSpan={3} className="bg-teal-700 font-mono text-sm md:px-36 px-24 text-white text-left w-40">Suplentes</td>
        </tr>
        </thead>
        
        <tbody className="">
        {props.data.equipos.results.away ? props.data.equipos.results.home.substitutes.map((a:any) => {
    return (
<tr key={a.player.id} className="text-white  hover:bg-gray-900 bg-gray-800 border-b border-gray-700">

{a.pos === "Guard" ? 
<>
<td className=" text-center px-2 w-1 border-solid text-yellow-500 text-sm border-r-2">Arq</td>
<td className=" border-solid border-r-2 flex items-center text-sm text-left justify-center"> {a.shirtnumber} </td>
<td className="text-start px-2 md:w-60  text-sm ">{a.player.name}</td>
</>
 :null}
</tr>
    )
}): null}

{props.data.equipos.results.away ? props.data.equipos.results.home.substitutes.map((a:any) => {
    return (
<tr key={a.player.id} className="text-white hover:bg-gray-900 bg-gray-800 border-b border-gray-700">

{a.pos === "Defender" ? 
<>
<td className=" text-center px-2 w-1 border-solid  text-cyan-500 text-sm border-r-2">Def</td>
<td className="border-solid border-r-2 flex items-center text-sm text-left justify-center"> {a.shirtnumber} </td>
<td className="text-start px-2 md:w-60 text-sm ">{a.player.name}</td>
</>
 :null}
</tr>
    )
}): null}

{props.data.equipos.results.away ? props.data.equipos.results.home.substitutes.map((a:any) => {
    return (
<tr key={a.player.id} className="text-white hover:bg-gray-900 bg-gray-800 border-b border-gray-700">

{a.pos === "Midfielder" ? 
<>
<td className=" text-center px-2 w-1 border-solid text-green-500  text-sm border-r-2">Med</td>
<td className="border-solid border-r-2 flex items-center text-sm text-left justify-center"> {a.shirtnumber} </td>
<td className="text-start px-2 md:w-60 text-sm ">{a.player.name}</td>
</>
 :null}
</tr>
    )
}): null}

{props.data.equipos.results.away ? props.data.equipos.results.home.substitutes.map((a:any) => {
    return (
<tr key={a.player.id} className="text-white hover:bg-gray-900 bg-gray-800 border-b border-gray-700">

{a.pos === "Forward" ? 
<>
<td className=" text-center px-2 w-1 border-solid text-red-500 text-sm border-r-2">Del</td>
<td className="border-solid border-r-2 flex items-center text-sm text-left justify-center"> {a.shirtnumber} </td>
<td className="text-start px-2 md:w-60 text-sm ">{a.player.name}</td>
</>
 :null}
</tr>
    )
}): null}
</tbody>
</table>
</div>
  
  

<table className="table-auto border-2 mt-0 md:ml-3 ml-6  border-cyan-700 font-mono ">
    <thead className="text-white ">


        
        <tr className="h-7 border-solid border-2 border-teal-900">
            <td colSpan={3} className="bg-cyan-700 font-mono text-sm md:px-40 pl-28 text-left md:w-80">DT</td>
        </tr>
        
        </thead>
        <tbody className="text-center">
        {props.data.vivo.results ? props.data.vivo.results.map((a:any) => {
    return (
<tr key={a.id} className="text-white hover:bg-gray-900 bg-gray-800 border-b border-gray-700">
<>
<td className="text-center px-2 w-64 border-solid text-yellow-500 text-md">{a.extra.home_manager ? a.extra.home_manager.name : null}</td>
</>
 
</tr>
    )
}): null}
</tbody>
</table>
  
        </div>




{/*VISITANTE*/}
        <div>

<div className=" md:w-full w-40 pt-5 ml-5 md:ml-0 md:flex md:gap-10 justify-center h-max">

  <table className="table-auto border-2 mt-6 border-cyan-700 font-mono ">
    <thead className="text-white ">

    <tr className="h-8 border-solid border-2 border-teal-900">
            <td colSpan={3} className="bg-teal-900 font-mono text-xl md:px-20 px-8 text-left w-40">EQUIPO VISITANTE</td>
        </tr>
        
        <tr className="h-7 border-solid border-2 border-teal-900">
            <td colSpan={3} className="bg-teal-700 font-mono text-sm md:px-36 px-24 text-left w-40">Titulares</td>
        </tr>
        
    <tr>
<th className="px-2 bg-cyan-800">Pos</th>
<th className="px-2 bg-cyan-800">Num</th>
<th className="px-4 bg-cyan-800">Nombre</th>

      </tr>
        </thead>
        <tbody className="text-center">
        {props.data.equipos.results.away ? props.data.equipos.results.away.startinglineup.map((a:any) => {
    return (
<tr key={a.player.id} className="text-white hover:bg-gray-900 bg-gray-800 border-b border-gray-700">

{a.pos === "Guard" ? 
<>
<td className="text-center px-2 w-1 border-solid text-yellow-500 text-sm border-r-2">Arq</td>
<td className="border-solid border-r-2 flex items-center text-sm text-left justify-center"> {a.shirtnumber} </td>
<td className="text-start px-2 md:w-60  text-sm ">{a.player.name}</td>
</>
 :null}
</tr>
    )
}): null}

            
{props.data.equipos.results.away ? props.data.equipos.results.away.startinglineup.map((a:any) => {
    return (
<tr key={a.player.id} className="text-white hover:bg-gray-900 bg-gray-800 border-b border-gray-700">

{a.pos === "Defender" ? 
<>
<td className="text-center px-2 w-1 border-solid  text-cyan-500 text-sm border-r-2">Def</td>
<td className="border-solid border-r-2 flex items-center text-sm text-left justify-center"> {a.shirtnumber} </td>
<td className="text-start px-2 md:w-60 text-sm ">{a.player.name}</td>
</>
 :null}
</tr>
    )
}): null}

{props.data.equipos.results.away ? props.data.equipos.results.away.startinglineup.map((a:any) => {
    return (
<tr key={a.player.id} className="text-white hover:bg-gray-900 bg-gray-800 border-b border-gray-700">

{a.pos === "Midfielder" ? 
<>
<td className="text-center px-2 w-1 border-solid text-green-500  text-sm border-r-2">Med</td>
<td className="border-solid border-r-2 flex items-center text-sm text-left justify-center"> {a.shirtnumber} </td>
<td className="text-start px-2 md:w-60 text-sm ">{a.player.name}</td>
</>
 :null}
</tr>
    )
}): null}

{props.data.equipos.results.away ? props.data.equipos.results.away.startinglineup.map((a:any) => {
    return (
<tr key={a.player.id} className="text-white hover:bg-gray-900 bg-gray-800 border-b border-gray-700">

{a.pos === "Forward" ? 
<>
<td className="text-center px-2 w-1 border-solid text-red-500 text-sm border-r-2">Del</td>
<td className="border-solid border-r-2 flex items-center text-sm text-left justify-center"> {a.shirtnumber} </td>
<td className="text-start px-2 md:w-60 text-sm ">{a.player.name}</td>
</>
 :null}
</tr>
    )
}): null}
</tbody>
</table>


</div>
<div className="md:flex md:ml-0 ml-5 justify-center ">
<table className="border-2  border-cyan-700 font-mono ">
    <thead className="text-white">
<tr className="h-7 border-solid border-2  border-t-orange-900 border-teal-900">
            <td colSpan={3} className="bg-teal-700 font-mono text-sm md:px-36 px-24 text-white text-left w-40">Suplentes</td>
        </tr>
        </thead>
        
        <tbody className="">
        {props.data.equipos.results.away ? props.data.equipos.results.away.substitutes.map((a:any) => {
    return (
<tr key={a.player.id} className="text-white  hover:bg-gray-900 bg-gray-800 border-b border-gray-700">

{a.pos === "Guard" ? 
<>
<td className=" text-center px-2 w-1 border-solid text-yellow-500 text-sm border-r-2">Arq</td>
<td className=" border-solid border-r-2 flex items-center text-sm text-left justify-center"> {a.shirtnumber} </td>
<td className="text-start px-2 md:w-60  text-sm ">{a.player.name}</td>
</>
 :null}
</tr>
    )
}): null}

{props.data.equipos.results.away ? props.data.equipos.results.away.substitutes.map((a:any) => {
    return (
<tr key={a.player.id} className="text-white hover:bg-gray-900 bg-gray-800 border-b border-gray-700">

{a.pos === "Defender" ? 
<>
<td className=" text-center px-2 w-1 border-solid  text-cyan-500 text-sm border-r-2">Def</td>
<td className="border-solid border-r-2 flex items-center text-sm text-left justify-center"> {a.shirtnumber} </td>
<td className="text-start px-2 md:w-60 text-sm ">{a.player.name}</td>
</>
 :null}
</tr>
    )
}): null}

{props.data.equipos.results.away ? props.data.equipos.results.away.substitutes.map((a:any) => {
    return (
<tr key={a.player.id} className="text-white hover:bg-gray-900 bg-gray-800 border-b border-gray-700">

{a.pos === "Midfielder" ? 
<>
<td className=" text-center px-2 w-1 border-solid text-green-500  text-sm border-r-2">Med</td>
<td className="border-solid border-r-2 flex items-center text-sm text-left justify-center"> {a.shirtnumber} </td>
<td className="text-start px-2 md:w-60 text-sm ">{a.player.name}</td>
</>
 :null}
</tr>
    )
}): null}

{props.data.equipos.results.away ? props.data.equipos.results.away.substitutes.map((a:any) => {
    return (
<tr key={a.player.id} className="text-white hover:bg-gray-900 bg-gray-800 border-b border-gray-700">

{a.pos === "Forward" ? 
<>
<td className=" text-center px-2 w-1 border-solid text-red-500 text-sm border-r-2">Del</td>
<td className="border-solid border-r-2 flex items-center text-sm text-left justify-center"> {a.shirtnumber} </td>
<td className="text-start px-2 md:w-60 text-sm ">{a.player.name}</td>
</>
 :null}
</tr>
    )
}): null}
</tbody>
</table>
</div>
  
<table className="table-auto border-2 mt-0 md:ml-3 ml-6  border-cyan-700 font-mono ">
    <thead className="text-white ">


        
        <tr className="h-7 border-solid border-2 border-teal-900">
            <td colSpan={3} className="bg-cyan-700 font-mono text-sm md:px-40 pl-28 text-left md:w-80">DT</td>
        </tr>
        
        </thead>
        <tbody className="text-center">
        {props.data.vivo.results ? props.data.vivo.results.map((a:any) => {
    return (
<tr key={a.id} className="text-white hover:bg-gray-900 bg-gray-800 border-b border-gray-700">
<>
<td className="text-center px-2 w-64 border-solid text-yellow-500 text-md">{a.extra.away_manager ? a.extra.away_manager.name : null}</td>
</>
 
</tr>
    )
}): null}
</tbody>
</table>

        </div>



</div>

    )
}


