import React, {useState} from "react";
import "./style.scss";

const index = ({ addNewItem, errorMsg }) => {

    // Init Value
    const [state, setState] = useState('');

    // Submit Handle
    const submitHandle = (e) => {
        e.preventDefault();
        setState(e.target.title.value)
        addNewItem(state);
    }

    return (
        <form className="todo-form" onSubmit={submitHandle}>
            <input type="text" className="todo-form__input-type" name="title" placeholder="Enter your task..." value={state} />
            <button type="submit" className="todo-form__button-type"> + </button>
            {errorMsg !== '' && (<div className="error-message"> {errorMsg} </div>)}
        </form>
    )
}

export default index
