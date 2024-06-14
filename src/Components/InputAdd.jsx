import TodoContainer from "./TodoContainer"
import {useState} from "react"

function InputAdd(props)
{
  const listitemarr = props.listitemarr
  const setlistitemarr = props.setlistitemarr
    const [txt,settxt]=useState("")
    function handletxt(event)
    {
      settxt(event.target.value)
    }
    function handleadd()
    {
      setlistitemarr([...listitemarr,{id:listitemarr.length+1,activity:txt}])
      settxt("")
      
    }
return(
    <>
    <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Activites</h1>
            <div className="flex">
            <input value={txt} onChange={handletxt} type="text" placeholder="Next Activity?" className="border border-black bg-transparent p-1" />
            <button onClick={handleadd} className="bg-black text-white border border-black p-1">Add</button>
          </div>
          </div>
    </>
)
}

export default InputAdd