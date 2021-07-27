import React, {useState} from "react"
import "./style.scss";

const Index = ({ task, setItemState, deleteItem }) => {

    const [state, setState] = useState(task.done);
    const [editState, setEditState] = useState({
        isEdit: false
    });

    const changeEditState = () => {
        setEditState({
            isEdit: !editState.isEdit
        });
    }
    
    return (
        <section className="todo-item">
            <label className="todo">
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
                    <div> Good </div>
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
