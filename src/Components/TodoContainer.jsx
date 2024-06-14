import InputAdd from "./InputAdd"
import Addlist from "./Addlist"
import { useState } from "react"
function TodoContainer()
{
    const [listitem,setlistitem]=useState([{
        id:1,
        activity:"Morning go walk"
    },
    {
        id:2,
        activity:"Had Break first before 8 O Clock"
    },
    {
        id:3,
        activity:"Had Break first before 8 O Clock"
    }
])

    return(
        <>
        <div className="flex gap-2 flex-wrap">
         <InputAdd listitemarr={listitem} setlistitemarr={setlistitem}/>
          <Addlist listitemarr={listitem} setlistitemarr={setlistitem}/>
          </div>
        </>
    )
}

export default TodoContainer