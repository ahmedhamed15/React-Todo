import React, {useState} from "react";
import "./style.scss";

const Index = ({ addNewItem, errorMsg }) => {

    // Init Value
    const [state, setState] = useState('');

    // Submit Handle
    const submitHandle = (e) => {
        e.preventDefault();
        addNewItem(e.target.title.value);
        setState('');
    }

    return (
        <form className="todo-form" onSubmit={submitHandle}>
            <input type="text" className="todo-form__input-type" name="title" placeholder="Enter your task..." onChange={(e) => setState(e.target.value)} value={state} />
            <button type="submit" className="todo-form__button-type"> + </button>
            {errorMsg !== '' && (<div className="error-message"> {errorMsg} </div>)}
        </form>
    )
}

export default Index
