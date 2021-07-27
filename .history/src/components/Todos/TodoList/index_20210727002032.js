import React, {useState} from 'react';
import TodoItem from "../TodoItem";
import TodoFrom from "../TodoForm";
import "./style.scss"

const Index = () => {

    // Main State
    const [state, setState] = useState({
        tasks: [
            // {id: 1, title: 'The first item', active: true},
            // {id: 2, title: 'The second item', active: true},
            // {id: 3, title: 'The Third item', active: true},
            // {id: 4, title: 'The fourth item', active: true}
        ],
        error: ''
    });

    // Add A New Item
    const addNewItem = (title) => {
        if (title !== '') {
            let newItems = {
                id: 5,
                title,
                active: true
            };
            setState({
                tasks: [...state.tasks, newItems]
            });
        } else {
            setState({
                error: "You must add real value!"
            })
        }
    }

    return (
        <section className="todos-list">

            {/* General SVG code for checkbox */}
            <svg viewBox="0 0 0 0" style={ {position: 'absolute', zIndex: '-1', opacity: '0'} }>
                <defs>
                <linearGradient id="boxGradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="25" y2="25">
                    <stop offset="0%"   stopColor="#27FDC7"/>
                    <stop offset="100%" stopColor="#0FC0F5"/>
                </linearGradient>

                <linearGradient id="lineGradient">
                    <stop offset="0%"    stopColor="#0FC0F5"/>
                    <stop offset="100%"  stopColor="#27FDC7"/>
                </linearGradient>

                <path id="todo__line" stroke="url(#lineGradient)" d="M21 12.3h168v0.1z"></path>
                <path id="todo__box" stroke="url(#boxGradient)" d="M21 12.7v5c0 1.3-1 2.3-2.3 2.3H8.3C7 20 6 19 6 17.7V7.3C6 6 7 5 8.3 5h10.4C20 5 21 6 21 7.3v5.4"></path>
                <path id="todo__check" stroke="url(#boxGradient)" d="M10 13l2 2 5-5"></path>
                <circle id="todo__circle" cx="13.5" cy="12.5" r="10"></circle>
                </defs>
            </svg>


            {/* Todo From */}
            <TodoFrom addNewItem={addNewItem} />

            {/* Todos List */}
            <div className="todo-list">
                { state.error !== '' && (<div className="todo"> {state.error} </div>) }
                {/* { state.tasks.length ? state.tasks.map( (item) => <TodoItem key={item.id} task={item} /> ) : (<div className="todo"> There are no items, yet! </div>) } */}
            </div>

        </section>
    )
}

export default Index
