import { useLocation, useNavigate } from "react-router-dom"
import Header from "../Components/Header"
import Card from "../Components/Card"
import TodoContainer from "../Components/TodoContainer"

function Landingpage()
{
    const navigate=useNavigate()
    const data=useLocation()
    console.log(data.state.username)
    function handlelogout()
    {
        navigate("/")
    }
    return(
    <>
 <div className="bg-black p-16">
      <div className="bg-[#efefef] p-10 border rounded-md ">
     
        <Header data={data.state.username}/>
        
     
        <div className="flex justify-between gap-7 my-5 flex-wrap">
          <Card bgcolor={"#685BAE"} title={"23"} subtitle={"Chennai"}/>
          <Card bgcolor={"#CA524E"} title={"20 December"} subtitle={"14:02:34"}/>
          <Card bgcolor={"#CA8201"} title={"Built Using"} subtitle={"React"}/>
        
        </div>
        <TodoContainer/>
      </div>
      <button className="border rounded-md bg-green-500 border-black p-1 hover:bg-red-200" onClick={handlelogout}>Logout</button>
      </div>

    {/* no changes */}
    {/* <div className="bg-black p-10">
        <div className="bg-white p-5 rounded-md">
    <h1>
        Hi Dude! {data.state.username}
    </h1>
        <div className="my-16">
    <button className="border rounded-md bg-green-500 border-black p-1 hover:bg-red-200" onClick={handlelogout}>Logout</button>
    </div>
    </div>
    </div> */}
    </>
    )
}

export default Landingpage