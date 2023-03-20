import { LoadRemove } from '@/components/Loading';
import { PartidosHoy } from '@/components/Tables/PartidosHoy';
import { PartidosVivo } from '@/components/Tables/PartidosVivo';
import React, { useEffect } from 'react'



const key = process.env.NEXT_PUBLIC_INDEX1
const key2 = process.env.NEXT_PUBLIC_INDEX2



export default function Home(props:any) {

  useEffect(()=>{
    LoadRemove()  
   })




  return (
    <>
    <div className='bg-cesped h-full w-full'>
<PartidosVivo vivo={props.vivo} />
<PartidosHoy hoy={props.hoy}/>
</div>
 </>   
  )
}




export const getStaticProps = async () => {
  const res = await fetch(`${key}`);
   const live = await res.json();

   const res3 = await fetch(`${key2}`)
   const today = await res3.json()
   
    return {
       props: {
          vivo: live, hoy: today, fallback: false
       },
       revalidate: 60
    };
 };


