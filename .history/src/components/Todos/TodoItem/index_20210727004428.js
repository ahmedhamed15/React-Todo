import "./style.scss"

const index = ({ task, setItemState }) => {
    return (
        <section className="todo-item">
            <label className="todo" onClick={setItemState}>
                <input className="todo__state" type="checkbox" />
                
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 25" className="todo__icon">
                    <use xlinkHref="#todo__line" className="todo__line"></use>
                    <use xlinkHref="#todo__box" className="todo__box"></use>
                    <use xlinkHref="#todo__check" className="todo__check"></use>
                    <use xlinkHref="#todo__circle" className="todo__circle"></use>
                </svg>
            
                <div className="todo__text"> {task.title} </div>

            
            </label>
            <span className="todo__delete-btn"> &times; </span>
        </section>
    )
}

export default index
