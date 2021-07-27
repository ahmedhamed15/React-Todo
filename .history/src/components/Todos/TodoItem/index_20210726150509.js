import "./style.scss"

const index = () => {
    return (
        <label className="todo">
            <input className="todo__state" type="checkbox" />
            
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 25" className="todo__icon">
                <use xlinkHref="#todo__line" className="todo__line"></use>
                <use xlinkHref="#todo__box" className="todo__box"></use>
                <use xlinkHref="#todo__check" className="todo__check"></use>
                <use xlinkHref="#todo__circle" className="todo__circle"></use>
            </svg>
        
            <div className="todo__text">Do a very important task</div>

            <span className="todo__delete-btn"> X </span>
        
        </label>
    )
}

export default index
