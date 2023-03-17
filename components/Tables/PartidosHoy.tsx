import { fecha } from "@/utils/client"

export const PartidosHoy = (props: any) => {




let premier = props.hoy.games_pre.filter((a:any) => a.league.name === "England Premier League")
    let laLiga = props.hoy.games_pre.filter((a:any) => a.league.name === "Spain Primera Liga")
    let serieA = props.hoy.games_pre.filter((a:any) => a.league.name === "Italy Serie A")
    let ligue1 = props.hoy.games_pre.filter((a:any) => a.league.name === "France Ligue 1")
    let bundesliga = props.hoy.games_pre.filter((a:any) => a.league.name === "Germany Bundesliga I")

    let champions = props.hoy.games_pre.filter((a:any) => a.league.name === "UEFA Champions League")
    let faCup = props.hoy.games_pre.filter((a:any) => a.league.name === "England FA Cup")
    let franceCup = props.hoy.games_pre.filter((a:any) => a.league.name === "France Cup")
    let spainCup = props.hoy.games_pre.filter((a:any) => a.league.name === "Spain Copa del Rey")
   

    let primera = props.hoy.games_pre.filter((a:any) => a.league.name === "Argentina Liga Profesional")
    let uruguayA = props.hoy.games_pre.filter((a:any) => a.league.name === "Uruguay Apertura")
    let ColombiaA = props.hoy.games_pre.filter((a:any) => a.league.name === "Colombia Primera A")
    let MexicoMX = props.hoy.games_pre.filter((a:any) => a.league.name === "Mexico Liga MX")
    let ChileA = props.hoy.games_pre.filter((a:any) => a.league.name ==="Chile Primera Division")

return (
<div className="mt-10">


{/* CHAMPIONS */}
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
    <td className="text-center items-center justify-center flex py-3">{fecha(a.time)}</td>
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-center  md:justify-end">{a.away.name}<img className='md:w-6 w-4 h-4 md:h-6 flex justify-end' src={`https://spoyer.com/api/team_img/soccer/${a.away.id}.png`}></img></td>

        </tr>
        
        )})} 
</tbody>
</table>
</div>
</div>
: null}


{/* PREMIER */}
{premier.length ? 
<div>
<div className="md:w-full  pb-2 flex justify-center pt-2 h-max">
  <table className="table-auto w-full md:w-auto border-cyan-700 font-mono ">
    <thead className="text-white ">
<tr>
<th className="py-0 flex items-center justify-center bg-blue-800 font-black text-sm">PREMIER LEAGUE </th>
</tr>
      </thead>
      <tbody>
{premier.map((a:any)  => {
    return (
        
    <tr  key={a.game_id} className="shadow-xl shadow-black border-solid border-2 border-blue-900 flex pt-1 gap-6 font-mono text-sm  text-cyan-50 bg-gray-800">
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-start"><img className='md:w-6 w-4 h-4 md:h-6' src={`https://spoyer.com/api/team_img/soccer/${a.home.id}.png`}></img>{a.home.name}</td>
    <td className="text-center items-center justify-center flex py-3">{fecha(a.time)}</td>
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-center  md:justify-end">{a.away.name}<img className='md:w-6 w-4 h-4 md:h-6 flex justify-end' src={`https://spoyer.com/api/team_img/soccer/${a.away.id}.png`}></img></td>

        </tr>
        
        )})} 
</tbody>
</table>
</div>
</div>
: null}


{/*LA LIGA */}
{laLiga.length ? 
<div>
<div className="md:w-full  pb-2 flex justify-center pt-2 h-max">
  <table className="table-auto w-full md:w-auto border-cyan-700 font-mono ">
    <thead className="text-white ">
<tr>
<th className="py-0 flex items-center justify-center bg-blue-800 font-black text-sm">LA LIGA</th>
</tr>
      </thead>
      <tbody>
{laLiga.map((a:any)  => {
    return (
        
    <tr  key={a.game_id} className="shadow-xl shadow-black border-solid border-2 border-blue-900 flex pt-1 gap-6 font-mono text-sm  text-cyan-50 bg-gray-800">
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-start"><img className='md:w-6 w-4 h-4 md:h-6' src={`https://spoyer.com/api/team_img/soccer/${a.home.id}.png`}></img>{a.home.name}</td>
    <td className="text-center items-center justify-center flex py-3">{fecha(a.time)}</td>
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-center  md:justify-end">{a.away.name}<img className='md:w-6 w-4 h-4 md:h-6 flex justify-end' src={`https://spoyer.com/api/team_img/soccer/${a.away.id}.png`}></img></td>

        </tr>
        
        )})} 
</tbody>
</table>
</div>
</div>
: null}


{/*LIGUE 1 */}
{ligue1.length ? 
<div>
<div className="md:w-full  pb-2 flex justify-center pt-2 h-max">
  <table className="table-auto w-full md:w-auto border-cyan-700 font-mono ">
    <thead className="text-white ">
<tr>
<th className="py-0 flex items-center justify-center bg-blue-800 font-black text-sm">LIGUE 1</th>
</tr>
      </thead>
      <tbody>
{ligue1.map((a:any)  => {
    return (
        
    <tr  key={a.game_id} className="shadow-xl shadow-black border-solid border-2 border-blue-900 flex pt-1 gap-6 font-mono text-sm  text-cyan-50 bg-gray-800">
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-start"><img className='md:w-6 w-4 h-4 md:h-6' src={`https://spoyer.com/api/team_img/soccer/${a.home.id}.png`}></img>{a.home.name}</td>
    <td className="text-center items-center justify-center flex py-3">{fecha(a.time)}</td>
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-center  md:justify-end">{a.away.name}<img className='md:w-6 w-4 h-4 md:h-6 flex justify-end' src={`https://spoyer.com/api/team_img/soccer/${a.away.id}.png`}></img></td>

        </tr>
        
        )})} 
</tbody>
</table>
</div>
</div>
: null}

{/*SERIE A*/}
{serieA.length ? 
<div>
<div className="md:w-full  pb-2 flex justify-center pt-2 h-max">
  <table className="table-auto w-full md:w-auto border-cyan-700 font-mono ">
    <thead className="text-white ">
<tr>
<th className="py-0 flex items-center justify-center bg-blue-800 font-black text-sm">SERIE A</th>
</tr>
      </thead>
      <tbody>
{serieA.map((a:any)  => {
    return (
        
    <tr  key={a.game_id} className="shadow-xl shadow-black border-solid border-2 border-blue-900 flex pt-1 gap-6 font-mono text-sm  text-cyan-50 bg-gray-800">
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-start"><img className='md:w-6 w-4 h-4 md:h-6' src={`https://spoyer.com/api/team_img/soccer/${a.home.id}.png`}></img>{a.home.name}</td>
    <td className="text-center items-center justify-center flex py-3">{fecha(a.time)}</td>
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-center  md:justify-end">{a.away.name}<img className='md:w-6 w-4 h-4 md:h-6 flex justify-end' src={`https://spoyer.com/api/team_img/soccer/${a.away.id}.png`}></img></td>

        </tr>
        
        )})} 
</tbody>
</table>
</div>
</div>
: null}


{/*BUNDESLIGA*/}
{bundesliga.length ? 
<div>
<div className="md:w-full  pb-2 flex justify-center pt-2 h-max">
  <table className="table-auto w-full md:w-auto border-cyan-700 font-mono ">
    <thead className="text-white ">
<tr>
<th className="py-0 flex items-center justify-center bg-blue-800 font-black text-sm">BUNDESLIGA</th>
</tr>
      </thead>
      <tbody>
{bundesliga.map((a:any)  => {
    return (
        
    <tr  key={a.game_id} className="shadow-xl shadow-black border-solid border-2 border-blue-900 flex pt-1 gap-6 font-mono text-sm  text-cyan-50 bg-gray-800">
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-start"><img className='md:w-6 w-4 h-4 md:h-6' src={`https://spoyer.com/api/team_img/soccer/${a.home.id}.png`}></img>{a.home.name}</td>
    <td className="text-center items-center justify-center flex py-3">{fecha(a.time)}</td>
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-center  md:justify-end">{a.away.name}<img className='md:w-6 w-4 h-4 md:h-6 flex justify-end' src={`https://spoyer.com/api/team_img/soccer/${a.away.id}.png`}></img></td>

        </tr>
        
        )})} 
</tbody>
</table>
</div>
</div>
: null}

{/*FA CUP*/}
{faCup.length ? 
<div>
<div className="md:w-full  pb-2 flex justify-center pt-2 h-max">
  <table className="table-auto w-full md:w-auto border-cyan-700 font-mono ">
    <thead className="text-white ">
<tr>
<th className="py-0 flex items-center justify-center bg-blue-800 font-black text-sm">FA CUP</th>
</tr>
      </thead>
      <tbody>
{faCup.map((a:any)  => {
    return (
        
    <tr  key={a.game_id} className="shadow-xl shadow-black border-solid border-2 border-blue-900 flex pt-1 gap-6 font-mono text-sm  text-cyan-50 bg-gray-800">
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-start"><img className='md:w-6 w-4 h-4 md:h-6' src={`https://spoyer.com/api/team_img/soccer/${a.home.id}.png`}></img>{a.home.name}</td>
    <td className="text-center items-center justify-center flex py-3">{fecha(a.time)}</td>
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-center  md:justify-end">{a.away.name}<img className='md:w-6 w-4 h-4 md:h-6 flex justify-end' src={`https://spoyer.com/api/team_img/soccer/${a.away.id}.png`}></img></td>

        </tr>
        
        )})} 
</tbody>
</table>
</div>
</div>
: null}

{/*COPA DEL REY*/}
{spainCup.length ? 
<div>
<div className="md:w-full  pb-2 flex justify-center pt-2 h-max">
  <table className="table-auto w-full md:w-auto border-cyan-700 font-mono ">
    <thead className="text-white ">
<tr>
<th className="py-0 flex items-center justify-center bg-blue-800 font-black text-sm">COPA DEL REY</th>
</tr>
      </thead>
      <tbody>
{spainCup.map((a:any)  => {
    return (
        
    <tr  key={a.game_id} className="shadow-xl shadow-black border-solid border-2 border-blue-900 flex pt-1 gap-6 font-mono text-sm  text-cyan-50 bg-gray-800">
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-start"><img className='md:w-6 w-4 h-4 md:h-6' src={`https://spoyer.com/api/team_img/soccer/${a.home.id}.png`}></img>{a.home.name}</td>
    <td className="text-center items-center justify-center flex py-3">{fecha(a.time)}</td>
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-center  md:justify-end">{a.away.name}<img className='md:w-6 w-4 h-4 md:h-6 flex justify-end' src={`https://spoyer.com/api/team_img/soccer/${a.away.id}.png`}></img></td>

        </tr>
        
        )})} 
</tbody>
</table>
</div>
</div>
: null}

{/*COPA DE FRANCIA*/}
{franceCup.length ? 
<div>
<div className="md:w-full  pb-2 flex justify-center pt-2 h-max">
  <table className="table-auto w-full md:w-auto border-cyan-700 font-mono ">
    <thead className="text-white ">
<tr>
<th className="py-0 flex items-center justify-center bg-blue-800 font-black text-sm">FRANCE CUP</th>
</tr>
      </thead>
      <tbody>
{franceCup.map((a:any)  => {
    return (
        
    <tr  key={a.game_id} className="shadow-xl shadow-black border-solid border-2 border-blue-900 flex pt-1 gap-6 font-mono text-sm  text-cyan-50 bg-gray-800">
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-start"><img className='md:w-6 w-4 h-4 md:h-6' src={`https://spoyer.com/api/team_img/soccer/${a.home.id}.png`}></img>{a.home.name}</td>
    <td className="text-center items-center justify-center flex py-3">{fecha(a.time)}</td>
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-center  md:justify-end">{a.away.name}<img className='md:w-6 w-4 h-4 md:h-6 flex justify-end' src={`https://spoyer.com/api/team_img/soccer/${a.away.id}.png`}></img></td>

        </tr>
        
        )})} 
</tbody>
</table>
</div>
</div>
: null}

{/*PRIMERA ARG*/}
{primera.length ? 
<div>
<div className="md:w-full  pb-2 flex justify-center pt-2 h-max">
  <table className="table-auto w-full md:w-auto border-cyan-700 font-mono ">
    <thead className="text-white ">
<tr>
<th className="py-0 flex items-center justify-center bg-blue-800 font-black text-sm">PRIMERA DIVISION</th>
</tr>
      </thead>
      <tbody>
{primera.map((a:any)  => {
    return (
        
    <tr  key={a.game_id} className="shadow-xl shadow-black border-solid border-2 border-blue-900 flex pt-1 gap-6 font-mono text-sm  text-cyan-50 bg-gray-800">
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-start"><img className='md:w-6 w-4 h-4 md:h-6' src={`https://spoyer.com/api/team_img/soccer/${a.home.id}.png`}></img>{a.home.name}</td>
    <td className="text-center items-center justify-center flex py-3">{fecha(a.time)}</td>
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-center  md:justify-end">{a.away.name}<img className='md:w-6 w-4 h-4 md:h-6 flex justify-end' src={`https://spoyer.com/api/team_img/soccer/${a.away.id}.png`}></img></td>

        </tr>
        
        )})} 
</tbody>
</table>
</div>
</div>
: null}

{/*LIGA MX*/}
{MexicoMX.length ? 
<div>
<div className="md:w-full  pb-2 flex justify-center pt-2 h-max">
  <table className="table-auto w-full md:w-auto border-cyan-700 font-mono ">
    <thead className="text-white ">
<tr>
<th className="py-0 flex items-center justify-center bg-blue-800 font-black text-sm">LIGA MX</th>
</tr>
      </thead>
      <tbody>
{MexicoMX.map((a:any)  => {
    return (
        
    <tr  key={a.game_id} className="shadow-xl shadow-black border-solid border-2 border-blue-900 flex pt-1 gap-6 font-mono text-sm  text-cyan-50 bg-gray-800">
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-start"><img className='md:w-6 w-4 h-4 md:h-6' src={`https://spoyer.com/api/team_img/soccer/${a.home.id}.png`}></img>{a.home.name}</td>
    <td className="text-center items-center justify-center flex py-3">{fecha(a.time)}</td>
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-center  md:justify-end">{a.away.name}<img className='md:w-6 w-4 h-4 md:h-6 flex justify-end' src={`https://spoyer.com/api/team_img/soccer/${a.away.id}.png`}></img></td>

        </tr>
        
        )})} 
</tbody>
</table>
</div>
</div>
: null}

{/*PRIMERA CHILE*/}
{ChileA.length ? 
<div>
<div className="md:w-full  pb-2 flex justify-center pt-2 h-max">
  <table className="table-auto w-full md:w-auto border-cyan-700 font-mono ">
    <thead className="text-white ">
<tr>
<th className="py-0 flex items-center justify-center bg-blue-800 font-black text-sm">PRIMERA A CHILE</th>
</tr>
      </thead>
      <tbody>
{ChileA.map((a:any)  => {
    return (
        
    <tr  key={a.game_id} className="shadow-xl shadow-black border-solid border-2 border-blue-900 flex pt-1 gap-6 font-mono text-sm  text-cyan-50 bg-gray-800">
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-start"><img className='md:w-6 w-4 h-4 md:h-6' src={`https://spoyer.com/api/team_img/soccer/${a.home.id}.png`}></img>{a.home.name}</td>
    <td className="text-center items-center justify-center flex py-3">{fecha(a.time)}</td>
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-center  md:justify-end">{a.away.name}<img className='md:w-6 w-4 h-4 md:h-6 flex justify-end' src={`https://spoyer.com/api/team_img/soccer/${a.away.id}.png`}></img></td>

        </tr>
        
        )})} 
</tbody>
</table>
</div>
</div>
: null}

{/*PRIMERA COL*/}
{ColombiaA.length ? 
<div>
<div className="md:w-full  pb-2 flex justify-center pt-2 h-max">
  <table className="table-auto w-full md:w-auto border-cyan-700 font-mono ">
    <thead className="text-white ">
<tr>
<th className="py-0 flex items-center justify-center bg-blue-800 font-black text-sm">PRIMERA A COLOMBIA</th>
</tr>
      </thead>
      <tbody>
{ColombiaA.map((a:any)  => {
    return (
        
    <tr  key={a.game_id} className="shadow-xl shadow-black border-solid border-2 border-blue-900 flex pt-1 gap-6 font-mono text-sm  text-cyan-50 bg-gray-800">
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-start"><img className='md:w-6 w-4 h-4 md:h-6' src={`https://spoyer.com/api/team_img/soccer/${a.home.id}.png`}></img>{a.home.name}</td>
    <td className="text-center items-center justify-center flex py-3">{fecha(a.time)}</td>
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-center  md:justify-end">{a.away.name}<img className='md:w-6 w-4 h-4 md:h-6 flex justify-end' src={`https://spoyer.com/api/team_img/soccer/${a.away.id}.png`}></img></td>

        </tr>
        
        )})} 
</tbody>
</table>
</div>
</div>
: null}

{/*LIGA URUGUAYA*/}
{uruguayA.length ? 
<div>
<div className="md:w-full  pb-2 flex justify-center pt-2 h-max">
  <table className="table-auto w-full md:w-auto border-cyan-700 font-mono ">
    <thead className="text-white ">
<tr>
<th className="py-0 flex items-center justify-center bg-blue-800 font-black text-sm">APERTURA URUGUAY</th>
</tr>
      </thead>
      <tbody>
{uruguayA.map((a:any)  => {
    return (
        
    <tr  key={a.game_id} className="shadow-xl shadow-black border-solid border-2 border-blue-900 flex pt-1 gap-6 font-mono text-sm  text-cyan-50 bg-gray-800">
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-start"><img className='md:w-6 w-4 h-4 md:h-6' src={`https://spoyer.com/api/team_img/soccer/${a.home.id}.png`}></img>{a.home.name}</td>
    <td className="text-center items-center justify-center flex py-3">{fecha(a.time)}</td>
    <td className="text-center py-3 md:w-40 w-full  items-center bg-cyan-800 flex justify-center  md:justify-end">{a.away.name}<img className='md:w-6 w-4 h-4 md:h-6 flex justify-end' src={`https://spoyer.com/api/team_img/soccer/${a.away.id}.png`}></img></td>

        </tr>
        
        )})} 
</tbody>
</table>
</div>
</div>
: null}

</div>
)
}