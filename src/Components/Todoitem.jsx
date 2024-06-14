
function TodoItem(props) {
    const listitemarr = props.listitemarr
    const setlistitemarr = props.setlistitemarr
    function handledelete(removeid) {
        var temparr = listitemarr.filter(function (item) {
            if (item.id === removeid) {
                return false
            }
            else {
                return true
            }

        }
        )
        setlistitemarr(temparr)
    }
    return (
        <>
            <div className="flex justify-between">
                <p>{props.index + 1}.{props.activity}</p>
                <button onClick={() => handledelete(props.id)} className="text-red-800">Delete</button>
            </div>
        </>
    )
}

export default TodoItem