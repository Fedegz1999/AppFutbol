import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { setIsModal } from "@/redux/modalSlice"


export function DetailsClose  (props:any)  {

    const dispatch = useAppDispatch()

    const modalClose = () => {
        dispatch(setIsModal(false))
    }


return (
<>
<tr  className="h-screen w-full left-0 top-0 fixed bg-gray-800 opacity-10" onClick={modalClose}/> 
</>
)
}