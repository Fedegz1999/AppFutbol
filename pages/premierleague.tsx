import { LoadRemove } from "@/components/Loading";
import Asistencias from "@/components/Tables/Asistencias";
import Goles from "@/components/Tables/Goles";
import { Partidos } from "@/components/Tables/Partidos";
import Tablas  from "@/components/Tables/Tablas";
import arregladora from "@/utils/client";
import { useEffect } from "react";





export default function premierLeague(data: any) {

let res = data.data.data[0].rank
let partidos = data.matchs.games_pre.map((a:any) => a)
let teams = partidos.map((a:any) => a.home.id)

   const fecha = (unixTimestamp:number) => {
   var date = new Date(unixTimestamp*1000);
   return(date.getDate()+"/"+(date.getMonth()+1+"  "+date.getHours()+":"+date.getMinutes()));
   }

const logo = (team:string) => {
   let prueba = res.map((a:any)=>a.name)
   let prueba2 = res.map((a:any)=>a.alternateCommonNames)
   let r = arregladora(team)
   let coinc = prueba2.map((a:any) => a.enEN)
   for (let i = 0; i < prueba.length; i++) {
      if(prueba[i] === r) {
         let a = res.filter((a:any)=>a.name === prueba[i])
         return a.map((e:any) => e.images.urlLogo[2])
      }
  }
    for (let i = 0; i < coinc.length; i++) {
         if(coinc[i] === r) {
            let p = res.filter((a:any)=> a.alternateCommonNames.enEN === coinc[i])
            return p.map((e:any) => e.images.urlLogo[2])
         }
      }
   
   }   

  

return (

<div className="bg-cesped">
<h1 className="text-2xl font-mono font-black shadow-xl rounded-xl border border-solid border-y-black bg-teal-100 flex items-center justify-center">{data.data.data[0].classificationHead.tournament.name}</h1>


<Tablas res={res}/>

  <div className="md:flex md:flex-column md:gap-60 sm:py-5 pt-5  items-center justify-center">
<Goles goles={data.goals} escudo={logo}/>
<Asistencias asist={data.assists} escudo={logo}/>
  </div>
  {partidos.length ? 
  <Partidos matchs={partidos.slice(0,10)} escudo={logo} fecha={fecha}/>
: null}
</div> 
   
)
  }


  const key = process.env.NEXT_PUBLIC_PREMIER1
  const key2 = process.env.NEXT_PUBLIC_PREMIER2
  const key3 = process.env.NEXT_PUBLIC_PREMIER3
  const key4 = process.env.NEXT_PUBLIC_PREMIER4

  export const getStaticProps = async () => {
  const res = await fetch(`${key}`);
   const rank = await res.json();

   const res2 = await fetch(`${key2}`)
   const gol = await res2.json();

   const res3 = await fetch(`${key3}`)
   const asist = await res3.json();
   
   const res4 = await fetch(`${key4}`)
   const part = await res4.json();
   

    return {
       props: {
          data: rank, goals: gol, assists: asist, matchs: part
       },
    };
 };


 




