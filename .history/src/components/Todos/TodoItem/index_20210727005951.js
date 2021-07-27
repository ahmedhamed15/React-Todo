import "./style.scss"

const index = ({ task, setItemState }) => {
    return (
        <section className="todo-item">
            <label className="todo" onClick={() => setItemState(task.id)}>
                <input className="todo__state" type="checkbox" />
                
                
            
                <div className="todo__text"> {task.title} </div>

            
            </label>
            <span className="todo__delete-btn"> &times; </span>
        </section>
    )
}

export default index
