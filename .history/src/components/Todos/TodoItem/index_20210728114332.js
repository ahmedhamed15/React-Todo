import React, {useEffect, useState} from "react"
import "./style.scss";
import editImg from '../../../assets/images/edit.png';

const Index = ({ task, setItemState, deleteItem, updateItem }) => {

    // Done State
    const [state, setState] = useState(task.done);

    // Editing Value
    const [editVal, setEditVal] = useState(task.title);

    // Editing Error
    const [editErr, seteEditErr] = useState('');

    // Check if it editing mode or not
    const [editState, setEditState] = useState({
        isEdit: false
    });

    // Change editing mode
    const changeEditState = () => {
        setEditState({
            isEdit: !editState.isEdit
        });
    }

    // Editing handle
    const editHandle = (e) => {
        e.preventDefault();
        if (editVal !== '') {
            changeEditState();
            updateItem(task.id, editVal);
        } else {
            seteEditErr("You must add a real value!")
        }
    }
    
    return (
        <section className={ !editState.isEdit ? "todo-item" : "todo-item edit-mode"}>
            <label className={ !editState.isEdit ? "todo" : "todo edit-mode"}>
                { !editState.isEdit ? (
                    <>
                        <input className="todo__state" type="checkbox" onChange={() => setState(task.done)} checked={state} />
                
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 25" className="todo__icon" onClick={() => setItemState(task.id)}>
                            <use xlinkHref="#todo__line" className="todo__line"></use>
                            <use xlinkHref="#todo__box" className="todo__box"></use>
                            <use xlinkHref="#todo__check" className="todo__check"></use>
                            <use xlinkHref="#todo__circle" className="todo__circle"></use>
                        </svg>
                    
                        <div className="todo__text"> {task.title} </div>
                    </>
                ) : (
                    <form className="todo-form edit-form" onSubmit={editHandle}>
                        <input type="text" className="todo-form__input-type" name="title" placeholder="Edit your task..." defaultValue={task.title} onChange={ (e) => setEditVal(e.target.value) } />
                        <button type="submit" className="todo-form__button-type"> <img src={editImg} alt="edit img" /> </button>
                        {editErr !== '' && (<div className="error-message"> {editErr} </div>)}
                    </form>
                )}
                

            
            </label>

            { !editState.isEdit && (
                <>
                    <span className="todo__delete-btn" onClick={ () => deleteItem(task.id)}> &times; </span>
                    <span className="todo__edit-btn" onClick={ changeEditState }> <img src={window.location.origin + '/edit.png'} alt="edit img" /> </span>
                </>
            )}
            
        </section>
    )
}

export default Index
