// Lesson 2: use that thing that you can display to create a dynamic display
'use client'

import { TodoItem, TodoItemProps } from "./TodoItem"

export const TodoList = () => {

    const myTodoItems: TodoItemProps[] = [
        {
            task: 'Laundry',
            completeByTime: new Date('2024/7/18 12:00'),
            completed: false
        },
        {
            task: 'Shower',
            completeByTime: new Date('2024/7/18 05:00'),
            completed: false
        },
        {
            task: 'Cleanup room',
            completeByTime: new Date('2024/7/20'),
            completed: false
        }
    ]

    return (
        <ul>
            {
                myTodoItems.map((todo, count) => (
                    <li key={count} className="pb-2">
                        <TodoItem 
                            task={todo.task}
                            completeByTime={todo.completeByTime}
                        />
                        {count < myTodoItems.length - 1 && <hr style={{ borderColor: 'black' }} />}
                    </li>
                ))
            }
        </ul>
    )
}