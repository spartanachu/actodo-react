import TodoItem from "./Todoitem"
function Addlist(props)
{
    const listitemarr=props.listitemarr
    const setlistitemarr=props.setlistitemarr
    return(
        <>
           <div className="bg-[#4988F2] rounded-md my-2 grow p-5">
            <h1 className="text-2xl font-medium mx-2">Today's Activity</h1>
            <div className="mx-2">
                {listitemarr.length===0?<p>You haven't added anything yet!</p>:""}
              {
                listitemarr.map(function(item,index)
            {
                return <TodoItem listitemarr={listitemarr} setlistitemarr={setlistitemarr} id={item.id} activity={item.activity} index={index}/>
            })
              }
            </div>
          </div>
        </>
    )
}

export default Addlist