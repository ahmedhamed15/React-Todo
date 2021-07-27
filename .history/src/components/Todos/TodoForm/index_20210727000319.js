import "./style.scss";

const index = ({ addNewItem }) => {
    return (
        <form className="todo-form">
            <input type="text" className="todo-form__input-type" placeholder="Enter your task..." />
            <button type="submit" className="todo-form__button-type" onClick={ addNewItem }> + </button>
        </form>
    )
}

export default index
