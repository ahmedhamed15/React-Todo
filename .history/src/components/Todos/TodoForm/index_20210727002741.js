import "./style.scss";

const index = ({ addNewItem, errorMsg }) => {

    // Submit Handle
    const submitHandle = (e) => {
        e.preventDefault();
        addNewItem(e.target.title.value);
    }

    return (
        <form className="todo-form" onSubmit={submitHandle}>
            <input type="text" className="todo-form__input-type" name="title" placeholder="Enter your task..." />
            <button type="submit" className="todo-form__button-type"> + </button>
            {errorMsg !== '' && (<div className="error-message"> {errorMsg} </div>)}
        </form>
    )
}

export default index
