import "./style.scss";

const index = ({ addNewItem }) => {

    // Submit Handle
    const submitHandle = (e) => {
        e.preventDefault()
    }

    return (
        <form className="todo-form" onSubmit={submitHandle}>
            <input type="text" className="todo-form__input-type" name="title" placeholder="Enter your task..." />
            <button type="submit" className="todo-form__button-type"> + </button>
        </form>
    )
}

export default index
