import React from 'react'

const index = () => {
    return (
        <label class="todo">
            <input class="todo__state" type="checkbox" />
            
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 25" class="todo__icon">
                <use xlink:href="#todo__line" class="todo__line"></use>
                <use xlink:href="#todo__box" class="todo__box"></use>
                <use xlink:href="#todo__check" class="todo__check"></use>
                <use xlink:href="#todo__circle" class="todo__circle"></use>
            </svg>
        
            <div class="todo__text">Do a very important task</div>
        
        </label>
    )
}

export default index
