import { useEffect } from "react"
import { LoadRemove } from "./Loading"


export default function DetailsTeam (props: any) {

useEffect(()=>{
   LoadRemove()  
   })

return (
    
    <>
    {props.data.id === props.id ? 
    <div key={props.llave} className="absolute top-40 z-50   pl-5 md:pl-5  ">
    <div className="absolute w-80 rounded-2xl max-h-max border-solid border-4 border-cyan-700  bg-gray-800">
       

        <h1 className='flex justify-center items-center font-black text-white pb-2 text-xl'>{props.data.name}</h1>

        <div className="flex shadow-xl  shadow-black rounded-2xl justify-center pb-2 items-center">
        <img role={'img'} alt="logo"   src={props.data.images.urlLogo[0]}></img>
        </div>

<div className="pt-4">
        <h3 className="font-black text-white text-md">Partidos Jugados</h3>
        <h1 className="font-black text-blue-500">{Math.trunc(props.data.standing.played)}</h1>
        </div>

<div className="flex-column gap-6 items-center justify-center">
    <h3 className="font-black border-t-2 text-md text-white border-cyan-800 ">
                              Local
                           </h3>
                           <h1 className="font-black border-b-2 text-blue-500 border-cyan-800 ">
                              {Math.trunc(props.data.standing.home.played)}
                           </h1>
                        
                           <h3 className="font-black text-md text-white">
                              Visitante
                           </h3>
                           <h1 className="font-black  border-b-2 text-blue-500 border-cyan-800">
                              {Math.trunc(props.data.standing.away.played)}
                           </h1>
</div>


<div>

<h3 className="font-black text-md text-white">
                        Porcentaje de victoria
                     </h3>

                     <h1 className="font-black text-blue-500">
                        {Math.trunc( props.data.standing.wonPercentage)}
                        %
                     </h1>
                  </div>

                  <div className="text-center  rounded-lg ">
                     <div className="flex items-center justify-center p-2">
                        <div className="p-2">
                           <h3 className="font-mono font-black text-md text-white ">
                              Local
                           </h3>
                           <div>
                              <h4 className=" font-black text-black ">
                                 <span className="text-green-600">
                                    {props.data.standing.home.won}
                                 </span>
                                    {" "}/{" "}
                                 <span className="text-yellow-500 font-bold">
                                    {props.data.standing.home.drawn}
                                 </span>
                                    {" "}/{" "}
                                 <span className="text-red-500">
                                    { props.data.standing.home.lost}
                                 </span>
                              </h4>
                           </div>
                           <h1 className="font-black text-teal-100 pt-1 text-xl">
                              {Math.trunc(props.data.standing.home.wonPercentage)}%
                           </h1>
                        </div>
                        <div className="pl-8">
                           <h3 className="font-mono font-black text-md text-white ">
                              Visitante
                           </h3>
                           <div>
                              <h4 className="font-black  text-black ">
                                 <span className="text-green-600">
                                    {props.data.standing.away.won}
                                 </span>
                                    {" "}/{" "}
                                 <span className="text-yellow-500 font-bold">
                                    {props.data.standing.away.drawn}
                                 </span>
                                    {" "}/{" "}
                                 <span className="text-red-500">
                                    { props.data.standing.away.lost}
                                 </span>
                              </h4>
                           </div>
                           <h1 className="font-black  text-teal-100 pt-1 text-xl">
                              {Math.trunc(props.data.standing.away.wonPercentage)}%
                           </h1>
</div>
</div>
</div>






   
    </div>
    </div>
    : null}
    </>


)}