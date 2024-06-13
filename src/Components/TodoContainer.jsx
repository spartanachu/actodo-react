function TodoContainer()
{
    return(
        <>
         <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Activites</h1>
            <div className="flex">
            <input type="text" placeholder="Next Activity?" className="border border-black bg-transparent p-1" />
            <button className="bg-black text-white border border-black p-1">Add</button>
          </div>
          </div>
          <div>
            <h1>Today's Activity</h1>
            <ul>
              <li>Go for walk</li>
              <li>Go for walk</li>
            </ul>
          </div>
        </>
    )
}

export default TodoContainer