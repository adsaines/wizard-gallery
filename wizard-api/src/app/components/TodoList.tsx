// Lesson 2: use that thing that you can display to create a dynamic display

import { TodoItem } from "./TodoItem"

export const TodoList = () => {
    return (
        <ul>
            <li>
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </li>
        </ul>
    )
}