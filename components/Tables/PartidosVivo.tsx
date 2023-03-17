import Router, { useRouter } from "next/router"
import { LoadRemove, LoadStart } from "../Loading"

export function PartidosVivo (props:any) {

const router = useRouter()

  
  
    let premier = props.vivo.games_live.filter((a:any) => a.league.name === "England Premier League")
    let laLiga = props.vivo.games_live.filter((a:any) => a.league.name === "Spain Primera Liga")
    let serieA = props.vivo.games_live.filter((a:any) => a.league.name === "Italy Serie A")
    let ligue1 = props.vivo.games_live.filter((a:any) => a.league.name === "France Ligue 1")
    let bundesliga = props.vivo.games_live.filter((a:any) => a.league.name === "Germany Bundesliga I")


    let champions = props.vivo.games_live.filter((a:any) => a.league.name === "UEFA Champions League")
    let faCup = props.vivo.games_live.filter((a:any) => a.league.name === "England FA Cup")
    let franceCup = props.vivo.games_live.filter((a:any) => a.league.name === "France Cup")
    let spainCup = props.vivo.games_live.filter((a:any) => a.league.name === "Spain Copa del Rey")
   


    let primera = props.vivo.games_live.filter((a:any) => a.league.name === "Argentina Liga Profesional")
    let uruguayA = props.vivo.games_live.filter((a:any) => a.league.name === "Uruguay Apertura")
    let ColombiaA = props.vivo.games_live.filter((a:any) => a.league.name === "Colombia Primera A")
    let MexicoMX = props.vivo.games_live.filter((a:any) => a.league.name === "Mexico Liga MX")
    let ChileA = props.vivo.games_live.filter((a:any) => a.league.name ==="Chile Primera Division")
    

function onClick (id: string){
    LoadStart()
router.push(`/envivo/${id}`)
}


    return (
        
        <>



{/* PREMIER */}
{premier.length ? 
<div>
    
<div className="md:w-full  pb-2 flex justify-center pt-2 h-max">
  <table className="table-auto w-full md:w-auto border-cyan-700 font-mono ">
    <thead className="text-white ">
<tr>
<th className="py-0 flex items-center justify-center bg-red-800 font-black text-sm">Premier League (Inglaterra)</th>
</tr>
      </thead>



      <tbody>
{premier.map((a:any)  => {
    
    
    return (
        
    <tr  key={a.game_id} className="shadow-xl shadow-black border-solid border-2 border-blue-900 flex pt-1 gap-6 font-mono text-sm  text-cyan-50 bg-gray-800">
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-start"><img className='md:w-6 w-4 h-4 md:h-6' src={`https://spoyer.com/api/team_img/soccer/${a.home.id}.png`}></img>{a.home.name}</td>
    <td className="text-center items-center justify-center flex py-3">{a.timer !== "0:00" ? a.score : "- -"}</td>
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-center  md:justify-end">{a.away.name}<img className='md:w-6 w-4 h-4 md:h-6 flex justify-end' src={`https://spoyer.com/api/team_img/soccer/${a.away.id}.png`}></img></td>
    <td className="text-center py-3 md:w-14 w-full border-solid border-blue-400 border-y-2 items-center bg-blue-800 flex justify-center">{a.timer.slice(0,2).includes(":") ?  a.timer.slice(0,1) : a.timer.slice(0,2)}'</td>
    <td onClick={()=> onClick(a.game_id)} className="shadow md:shadow-white cursor-pointer absolute md:w-24 md:h-8 bg-green-600 md:mt-2 flex items-center justify-center border-2 border-solid border-green-900 font-mono font-bold hover:bg-green-500 -mt-7 right-0 md:right-1/4">EN VIVO ▶</td>
        </tr>
        
        
        )})} 
        

</tbody>

</table>

</div>
</div>
: null}


{/* ARGENTINA */}
{primera.length ? 
<div>
<div className="md:w-full  pb-2 flex justify-center pt-2 h-max">
  <table className="table-auto w-full md:w-auto border-cyan-700 font-mono ">
    <thead className="text-white ">
<tr>
<th className="py-0 flex items-center justify-center bg-red-800 font-black text-sm">Primera división (Argentina)</th>
</tr>
      </thead>



      <tbody>
{primera.map((a:any)  => {
    
    return (
        
    <tr  key={a.game_id} className="shadow-xl shadow-black border-solid border-2 border-blue-900 flex pt-1 gap-6 font-mono text-sm  text-cyan-50 bg-gray-800">
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-start"><img className='md:w-6 w-4 h-4 md:h-6' src={`https://spoyer.com/api/team_img/soccer/${a.home.id}.png`}></img>{a.home.name}</td>
    <td className="text-center items-center justify-center flex py-3">{a.timer !== "0:00" ? a.score : "- -"}</td>
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-center  md:justify-end">{a.away.name}<img className='md:w-6 w-4 h-4 md:h-6 flex justify-end' src={`https://spoyer.com/api/team_img/soccer/${a.away.id}.png`}></img></td>
    <td className="text-center py-3 md:w-14 w-full border-solid border-blue-400 border-y-2 items-center bg-blue-800 flex justify-center">{a.timer.slice(0,2).includes(":") ?  a.timer.slice(0,1) : a.timer.slice(0,2)}'</td>    
    <td onClick={()=> onClick(a.game_id)} className="shadow md:shadow-white cursor-pointer absolute md:w-24 md:h-8 bg-green-600 md:mt-2 flex items-center justify-center border-2 border-solid border-green-900 font-mono font-bold hover:bg-green-500 -mt-7 right-0 md:right-1/4">EN VIVO ▶</td>
        </tr>
        
        )})} 
 
</tbody>
</table>
</div>
</div>
: null}



{/* BUNDESLIGA */}
{bundesliga.length ? 
<div>
<div className="md:w-full pb-2 flex justify-center pt-2 h-max">
<table className="table-auto w-full md:w-auto border-cyan-700 font-mono ">
    <thead className="text-white ">
<tr>
<th className="py-0 flex items-center justify-center bg-red-800 font-black text-sm">Bundesliga (Alemania)</th>
</tr>
      </thead>
      <tbody>

{bundesliga.map((a:any)  => {
    return (
      
    <tr  key={a.game_id} className="shadow-xl shadow-black border-solid border-2 border-blue-900 flex pt-1 gap-6 font-mono text-sm  text-cyan-50 bg-gray-800">
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-start"><img className='md:w-6 w-4 h-4 md:h-6' src={`https://spoyer.com/api/team_img/soccer/${a.home.id}.png`}></img>{a.home.name}</td>
    <td className="text-center items-center justify-center flex py-3">{a.timer !== "0:00" ? a.score : "- -"}</td>
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-center  md:justify-end">{a.away.name}<img className='md:w-6 w-4 h-4 md:h-6 flex justify-end' src={`https://spoyer.com/api/team_img/soccer/${a.away.id}.png`}></img></td>
    <td className="text-center py-3 md:w-14 w-full border-solid border-blue-400 border-y-2 items-center bg-blue-800 flex justify-center">{a.timer.slice(0,2).includes(":") ?  a.timer.slice(0,1) : a.timer.slice(0,2)}'</td>
    <td onClick={()=> onClick(a.game_id)} className="shadow md:shadow-white cursor-pointer absolute md:w-24 md:h-8 bg-green-600 md:mt-2 flex items-center justify-center border-2 border-solid border-green-900 font-mono font-bold hover:bg-green-500 -mt-7 right-0 md:right-1/4">EN VIVO ▶</td>
        </tr>
        
        )})} 
</tbody>
</table>
</div>
</div>
: null}

{/* LA LIGA */}
{laLiga.length ? 
<div>
<div className="md:w-full pb-2 flex justify-center pt-2 h-max">
<table className="table-auto w-full md:w-auto border-cyan-700 font-mono ">
    <thead className="text-white ">
<tr>
<th className="py-0 flex items-center justify-center bg-red-800 font-black text-sm">La Liga (España)</th>
</tr>
      </thead>
      <tbody>
{laLiga.map((a:any)  => {
    return (
 
    <tr  key={a.game_id} className="shadow-xl shadow-black border-solid border-2 border-blue-900 flex pt-1 gap-6 font-mono text-sm  text-cyan-50 bg-gray-800">
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-start"><img className='md:w-6 w-4 h-4 md:h-6' src={`https://spoyer.com/api/team_img/soccer/${a.home.id}.png`}></img>{a.home.name}</td>
    <td className="text-center items-center justify-center flex py-3">{a.timer !== "0:00" ? a.score : "- -"}</td>
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-center  md:justify-end">{a.away.name}<img className='md:w-6 w-4 h-4 md:h-6 flex justify-end' src={`https://spoyer.com/api/team_img/soccer/${a.away.id}.png`}></img></td>
    <td className="text-center py-3 md:w-14 w-full border-solid border-blue-400 border-y-2 items-center bg-blue-800 flex justify-center">{a.timer.slice(0,2).includes(":") ?  a.timer.slice(0,1) : a.timer.slice(0,2)}'</td>
    <td onClick={()=> onClick(a.game_id)} className="shadow md:shadow-white cursor-pointer absolute md:w-24 md:h-8 bg-green-600 md:mt-2 flex items-center justify-center border-2 border-solid border-green-900 font-mono font-bold hover:bg-green-500 -mt-7 right-0 md:right-1/4">EN VIVO ▶</td>
        </tr>
        
        
        )})} 
</tbody>
</table>
</div>
</div>
: null}

{/* Ligue 1 */}
{ligue1.length ? 
<div>
<div className="md:w-full pb-2 flex justify-center pt-2 h-max">
<table className="table-auto w-full md:w-auto border-cyan-700 font-mono ">
    <thead className="text-white ">
<tr>
<th className="py-0 flex items-center justify-center bg-red-800 font-black text-sm">Ligue 1 (Francia)</th>
</tr>
      </thead>
      <tbody>
{ligue1.map((a:any)  => {
    return (
        
    <tr  key={a.game_id} className="shadow-xl shadow-black border-solid border-2 border-blue-900 flex pt-1 gap-6 font-mono text-sm  text-cyan-50 bg-gray-800">
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-start"><img className='md:w-6 w-4 h-4 md:h-6' src={`https://spoyer.com/api/team_img/soccer/${a.home.id}.png`}></img>{a.home.name}</td>
    <td className="text-center items-center justify-center flex py-3">{a.timer !== "0:00" ? a.score : "- -"}</td>
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-center  md:justify-end">{a.away.name}<img className='md:w-6 w-4 h-4 md:h-6 flex justify-end' src={`https://spoyer.com/api/team_img/soccer/${a.away.id}.png`}></img></td>
    <td className="text-center py-3 md:w-14 w-full border-solid border-blue-400 border-y-2 items-center bg-blue-800 flex justify-center">{a.timer.slice(0,2).includes(":") ?  a.timer.slice(0,1) : a.timer.slice(0,2)}'</td>
    <td onClick={()=> onClick(a.game_id)} className=" shadow md:shadow-white cursor-pointer absolute md:w-24 md:h-8 bg-green-600 md:mt-2 flex items-center justify-center border-2 border-solid border-green-900 font-mono font-bold hover:bg-green-500 -mt-7 right-0 md:right-1/4">EN VIVO ▶</td>
        </tr>
        
        )})} 
</tbody>
</table>
</div>
</div>
: null}


{/* Serie A */}
{serieA.length ? 
<div>
<div className="md:w-full  pb-2 flex justify-center pt-2 h-max">
  <table className="table-auto w-full md:w-auto border-cyan-700 font-mono ">
    <thead className="text-white ">
<tr>
<th className="py-0 flex items-center justify-center bg-red-800 font-black text-sm">Serie A (Italia)</th>
</tr>
      </thead>
      <tbody>
{serieA.map((a:any)  => {
    return (
        
    <tr  key={a.game_id} className="shadow-xl shadow-black border-solid border-2 border-blue-900 flex pt-1 gap-6 font-mono text-sm  text-cyan-50 bg-gray-800">
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-start"><img className='md:w-6 w-4 h-4 md:h-6' src={`https://spoyer.com/api/team_img/soccer/${a.home.id}.png`}></img>{a.home.name}</td>
    <td className="text-center items-center justify-center flex py-3">{a.timer !== "0:00" ? a.score : "- -"}</td>
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-center  md:justify-end">{a.away.name}<img className='md:w-6 w-4 h-4 md:h-6 flex justify-end' src={`https://spoyer.com/api/team_img/soccer/${a.away.id}.png`}></img></td>
    <td className="text-center py-3 md:w-14 w-full border-solid border-blue-400 border-y-2 items-center bg-blue-800 flex justify-center">{a.timer.slice(0,2).includes(":") ?  a.timer.slice(0,1) : a.timer.slice(0,2)}'</td>
    <td onClick={()=> onClick(a.game_id)} className="shadow md:shadow-white cursor-pointer absolute md:w-24 md:h-8 bg-green-600 md:mt-2 flex items-center justify-center border-2 border-solid border-green-900 font-mono font-bold hover:bg-green-500 -mt-7 right-0 md:right-1/4">EN VIVO ▶</td>
        </tr>
        
        )})} 
</tbody>
</table>
</div>
</div>
: null}

{/* Uruguay Apertura */}
{uruguayA.length ? 
<div>
<div className="md:w-full  pb-2 flex justify-center pt-2 h-max">
  <table className="table-auto w-full md:w-auto border-cyan-700 font-mono ">
    <thead className="text-white ">
<tr>
<th className="py-0 flex items-center justify-center bg-red-800 font-black text-sm">Uruguay Apertura (Uruguay)</th>
</tr>
      </thead>
      <tbody>
{uruguayA.map((a:any)  => {
    return (
        
    <tr  key={a.game_id} className="shadow-xl shadow-black border-solid border-2 border-blue-900 flex pt-1 gap-6 font-mono text-sm  text-cyan-50 bg-gray-800">
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-start"><img className='md:w-6 w-4 h-4 md:h-6' src={`https://spoyer.com/api/team_img/soccer/${a.home.id}.png`}></img>{a.home.name}</td>
    <td className="text-center items-center justify-center flex py-3">{a.timer !== "0:00" ? a.score : "- -"}</td>
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-center  md:justify-end">{a.away.name}<img className='md:w-6 w-4 h-4 md:h-6 flex justify-end' src={`https://spoyer.com/api/team_img/soccer/${a.away.id}.png`}></img></td>
    <td className="text-center py-3 md:w-14 w-full border-solid border-blue-400 border-y-2 items-center bg-blue-800 flex justify-center">{a.timer.slice(0,2).includes(":") ?  a.timer.slice(0,1) : a.timer.slice(0,2)}'</td>
    <td onClick={()=> onClick(a.game_id)} className="shadow md:shadow-white cursor-pointer absolute md:w-24 md:h-8 bg-green-600 md:mt-2 flex items-center justify-center border-2 border-solid border-green-900 font-mono font-bold hover:bg-green-500 -mt-7 right-0 md:right-1/4">EN VIVO ▶</td>
        </tr>
        
        )})} 
</tbody>
</table>
</div>
</div>
: null}


{/* Liga Colombiana */}
{ColombiaA.length ? 
<div>
<div className="md:w-full  pb-2 flex justify-center pt-2 h-max">
  <table className="table-auto w-full md:w-auto border-cyan-700 font-mono ">
    <thead className="text-white ">
<tr>
<th className="py-0 flex items-center justify-center bg-red-800 font-black text-sm">Colombia Primera A (Colombia)</th>
</tr>
      </thead>
      <tbody>
{ColombiaA.map((a:any)  => {
    return (
        
    <tr  key={a.game_id} className="shadow-xl shadow-black border-solid border-2 border-blue-900 flex pt-1 gap-6 font-mono text-sm  text-cyan-50 bg-gray-800">
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-start"><img className='md:w-6 w-4 h-4 md:h-6' src={`https://spoyer.com/api/team_img/soccer/${a.home.id}.png`}></img>{a.home.name}</td>
    <td className="text-center items-center justify-center flex py-3">{a.timer !== "0:00" ? a.score : " - - "}</td>
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-center  md:justify-end">{a.away.name}<img className='md:w-6 w-4 h-4 md:h-6 flex justify-end' src={`https://spoyer.com/api/team_img/soccer/${a.away.id}.png`}></img></td>
    <td className="text-center py-3 md:w-14 w-full border-solid border-blue-400 border-y-2 items-center bg-blue-800 flex justify-center">{a.timer.slice(0,2).includes(":") ?  a.timer.slice(0,1) : a.timer.slice(0,2)}'</td>
    <td onClick={()=> onClick(a.game_id)} className="shadow md:shadow-white cursor-pointer absolute md:w-24 md:h-8 bg-green-600 md:mt-2 flex items-center justify-center border-2 border-solid border-green-900 font-mono font-bold hover:bg-green-500 -mt-7 right-0 md:right-1/4">EN VIVO ▶</td>
        </tr>
        
        )})} 
</tbody>
</table>
</div>
</div>
: null}


{/* Liga Mx */}
{MexicoMX.length ? 
<div>
<div className="md:w-full  pb-2 flex justify-center pt-2 h-max">
  <table className="table-auto w-full md:w-auto border-cyan-700 font-mono ">
    <thead className="text-white ">
<tr>
<th className="py-0 flex items-center justify-center bg-red-800 font-black text-sm">Liga MX (Mexico)</th>
</tr>
      </thead>
      <tbody>
{MexicoMX.map((a:any)  => {
    return (
        
    <tr  key={a.game_id} className="shadow-xl shadow-black border-solid border-2 border-blue-900 flex pt-1 gap-6 font-mono text-sm  text-cyan-50 bg-gray-800">
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-start"><img className='md:w-6 w-4 h-4 md:h-6' src={`https://spoyer.com/api/team_img/soccer/${a.home.id}.png`}></img>{a.home.name}</td>
    <td className="text-center items-center justify-center flex py-3">{a.timer !== "0:00" ? a.score : "---"}</td>
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-center  md:justify-end">{a.away.name}<img className='md:w-6 w-4 h-4 md:h-6 flex justify-end' src={`https://spoyer.com/api/team_img/soccer/${a.away.id}.png`}></img></td>
    <td className="text-center py-3 md:w-14 w-full border-solid border-blue-400 border-y-2 items-center bg-blue-800 flex justify-center">{a.timer.slice(0,2).includes(":") ?  a.timer.slice(0,1) : a.timer.slice(0,2)}'</td>
    <td onClick={()=> onClick(a.game_id)} className="shadow md:shadow-white cursor-pointer absolute md:w-24 md:h-8 bg-green-600 md:mt-2 flex items-center justify-center border-2 border-solid border-green-900 font-mono font-bold hover:bg-green-500 -mt-7 right-0 md:right-1/4">EN VIVO ▶</td>
        </tr>
        
        )})} 
</tbody>
</table>
</div>
</div>
: null}


{/* Liga CHILENA */}
{ChileA.length ? 
<div>
<div className="md:w-full  pb-2 flex justify-center pt-2 h-max">
  <table className="table-auto w-full md:w-auto border-cyan-700 font-mono ">
    <thead className="text-white ">
<tr>
<th className="py-0 flex items-center justify-center bg-red-800 font-black text-sm">Primera división de Chile (Chile)</th>
</tr>
      </thead>
      <tbody>
{ChileA.map((a:any)  => {
    return (
        
    <tr  key={a.game_id} className="shadow-xl shadow-black border-solid border-2 border-blue-900 flex pt-1 gap-6 font-mono text-sm  text-cyan-50 bg-gray-800">
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-start"><img className='md:w-6 w-4 h-4 md:h-6' src={`https://spoyer.com/api/team_img/soccer/${a.home.id}.png`}></img>{a.home.name}</td>
    <td className="text-center items-center justify-center flex py-3">{a.timer !== "0:00" ? a.score : "---"}</td>
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-center  md:justify-end">{a.away.name}<img className='md:w-6 w-4 h-4 md:h-6 flex justify-end' src={`https://spoyer.com/api/team_img/soccer/${a.away.id}.png`}></img></td>
    <td className="text-center py-3 md:w-14 w-full border-solid border-blue-400 border-y-2 items-center bg-blue-800 flex justify-center">{a.timer.slice(0,2).includes(":") ?  a.timer.slice(0,1) : a.timer.slice(0,2)}'</td>
    <td onClick={()=> onClick(a.game_id)} className="shadow md:shadow-white cursor-pointer absolute md:w-24 md:h-8 bg-green-600 md:mt-2 flex items-center justify-center border-2 border-solid border-green-900 font-mono font-bold hover:bg-green-500 -mt-7 right-0 md:right-1/4">EN VIVO ▶</td>
        </tr>
        
        )})} 
</tbody>
</table>
</div>
</div>
: null}




{/* CHAMPIONS LEAGUE*/}
{champions.length ? 
<div>
<div className="md:w-full  pb-2 flex justify-center pt-2 h-max">
  <table className="table-auto w-full md:w-auto border-cyan-700 font-mono ">
    <thead className="text-white ">
<tr>
<th className="py-0 flex items-center justify-center bg-blue-800 font-black text-sm">CHAMPIONS LEAGUE ⭐</th>
</tr>
      </thead>
      <tbody>
{champions.map((a:any)  => {
    return (
        
    <tr  key={a.game_id} className="shadow-xl shadow-black border-solid border-2 border-blue-900 flex pt-1 gap-6 font-mono text-sm  text-cyan-50 bg-gray-800">
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-start"><img className='md:w-6 w-4 h-4 md:h-6' src={`https://spoyer.com/api/team_img/soccer/${a.home.id}.png`}></img>{a.home.name}</td>
    <td className="text-center items-center justify-center flex py-3">{a.timer !== "0:00" ? a.score : "---"}</td>
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-center  md:justify-end">{a.away.name}<img className='md:w-6 w-4 h-4 md:h-6 flex justify-end' src={`https://spoyer.com/api/team_img/soccer/${a.away.id}.png`}></img></td>
    <td className="text-center py-3 md:w-14 w-full border-solid border-blue-400 border-y-2 items-center bg-blue-800 flex justify-center">{a.timer.slice(0,2).includes(":") ?  a.timer.slice(0,1) : a.timer.slice(0,2)}'</td>
    <td onClick={()=> onClick(a.game_id)} className=" shadow md:shadow-white cursor-pointer absolute md:w-24 md:h-8 bg-green-600 md:mt-2 flex items-center justify-center border-2 border-solid border-green-900 font-mono font-bold hover:bg-green-500 -mt-7 right-0 md:right-1/4">EN VIVO ▶</td>
        </tr>
        
        )})} 
</tbody>
</table>
</div>
</div>
: null}


{/* FA CUP */}
{faCup.length ? 
<div>
<div className="md:w-full  pb-2 flex justify-center pt-2 h-max">
  <table className="table-auto w-full md:w-auto border-cyan-700 font-mono ">
    <thead className="text-white ">
<tr>
<th className="py-0 flex items-center justify-center bg-red-800 font-black text-sm">FA Cup (Inglaterra)</th>
</tr>
      </thead>
      <tbody>
{faCup.map((a:any)  => {
    return (
        
    <tr  key={a.game_id} className="shadow-xl shadow-black border-solid border-2 border-blue-900 flex pt-1 gap-6 font-mono text-sm  text-cyan-50 bg-gray-800">
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-start"><img className='md:w-6 w-4 h-4 md:h-6' src={`https://spoyer.com/api/team_img/soccer/${a.home.id}.png`}></img>{a.home.name}</td>
    <td className="text-center items-center justify-center flex py-3">{a.timer !== "0:00" ? a.score : "---"}</td>
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-center  md:justify-end">{a.away.name}<img className='md:w-6 w-4 h-4 md:h-6 flex justify-end' src={`https://spoyer.com/api/team_img/soccer/${a.away.id}.png`}></img></td>
    <td className="text-center py-3 md:w-14 w-full border-solid border-blue-400 border-y-2 items-center bg-blue-800 flex justify-center">{a.timer.slice(0,2).includes(":") ?  a.timer.slice(0,1) : a.timer.slice(0,2)}'</td>
    <td onClick={()=> onClick(a.game_id)} className=" shadow md:shadow-white cursor-pointer absolute md:w-24 md:h-8 bg-green-600 md:mt-2 flex items-center justify-center border-2 border-solid border-green-900 font-mono font-bold hover:bg-green-500 -mt-7 right-0 md:right-1/4">EN VIVO ▶</td>
        </tr>
        
        )})} 
</tbody>
</table>
</div>
</div>
: null}


{/* France Cup */}
{franceCup.length ? 
<div>
<div className="md:w-full  pb-2 flex justify-center pt-2 h-max">
  <table className="table-auto w-full md:w-auto border-cyan-700 font-mono ">
    <thead className="text-white ">
<tr>
<th className="py-0 flex items-center justify-center bg-red-800 font-black text-sm">France Cup (Francia)</th>
</tr>
      </thead>
      <tbody>
{franceCup.map((a:any)  => {
    return (
        
    <tr  key={a.game_id} className="shadow-xl shadow-black border-solid border-2 border-blue-900 flex pt-1 gap-6 font-mono text-sm  text-cyan-50 bg-gray-800">
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-start"><img className='md:w-6 w-4 h-4 md:h-6' src={`https://spoyer.com/api/team_img/soccer/${a.home.id}.png`}></img>{a.home.name}</td>
    <td className="text-center items-center justify-center flex py-3">{a.timer !== "0:00" ? a.score : "---"}</td>
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-center  md:justify-end">{a.away.name}<img className='md:w-6 w-4 h-4 md:h-6 flex justify-end' src={`https://spoyer.com/api/team_img/soccer/${a.away.id}.png`}></img></td>
    <td className="text-center py-3 md:w-14 w-full border-solid border-blue-400 border-y-2 items-center bg-blue-800 flex justify-center">{a.timer.slice(0,2).includes(":") ?  a.timer.slice(0,1) : a.timer.slice(0,2)}'</td>
    <td onClick={()=> onClick(a.game_id)} className="shadow md:shadow-white cursor-pointer absolute md:w-24 md:h-8 bg-green-600 md:mt-2 flex items-center justify-center border-2 border-solid border-green-900 font-mono font-bold hover:bg-green-500 -mt-7 right-0 md:right-1/4">EN VIVO ▶</td>
        </tr>
        
        )})} 
</tbody>
</table>
</div>
</div>
: null}

{/* Copa del Rey */}
{spainCup.length ? 
<div>
<div className="md:w-full  pb-2 flex justify-center pt-2 h-max">
  <table className="table-auto w-full md:w-auto border-cyan-700 font-mono ">
    <thead className="text-white ">
<tr>
<th className="py-0 flex items-center justify-center bg-red-800 font-black text-sm">Copa del Rey (España)</th>
</tr>
      </thead>
      <tbody>
{spainCup.map((a:any)  => {
    return (
        
    <tr  key={a.game_id} className="shadow-xl shadow-black border-solid border-2 border-blue-900 flex pt-1 gap-6 font-mono text-sm  text-cyan-50 bg-gray-800">
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-start"><img className='md:w-6 w-4 h-4 md:h-6' src={`https://spoyer.com/api/team_img/soccer/${a.home.id}.png`}></img>{a.home.name}</td>
    <td className="text-center items-center justify-center flex py-3">{a.timer !== "0:00" ? a.score : "---"}</td>
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-center  md:justify-end">{a.away.name}<img className='md:w-6 w-4 h-4 md:h-6 flex justify-end' src={`https://spoyer.com/api/team_img/soccer/${a.away.id}.png`}></img></td>
    <td className="text-center py-3 md:w-14 w-full border-solid border-blue-400 border-y-2 items-center bg-blue-800 flex justify-center">{a.timer.slice(0,2).includes(":") ?  a.timer.slice(0,1) : a.timer.slice(0,2)}'</td>
    <td onClick={()=> onClick(a.game_id)} className="shadow md:shadow-white cursor-pointer absolute md:w-24 md:h-8 bg-green-600 md:mt-2 flex items-center justify-center border-2 border-solid border-green-900 font-mono font-bold hover:bg-green-500 -mt-7 right-0 md:right-1/4">EN VIVO ▶</td>
        </tr>
        
        )})} 
</tbody>
</table>
</div>
</div>
: null}

</>
)
}


   