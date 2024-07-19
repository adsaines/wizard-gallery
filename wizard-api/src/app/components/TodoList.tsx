// Lesson 2: use that thing that you can display to create a dynamic display
'use client'

import { TodoItem, TodoItemProps } from "./TodoItem"

export const TodoList = () => {

    const myTodoItems: TodoItemProps[] = [
        {
            task: 'Laundry',
            completeByTime: new Date('2024/7/18 12:00')
        },
        {
            task: 'Shower',
            completeByTime: new Date('2024/7/18 05:00')
        },
        {
            task: 'Cleanup room',
            completeByTime: new Date('2024/7/20')
        }
    ]

    return (
        <ul>
            {
                myTodoItems.map((todo, count) => {
                    return (
                        <li key={count} className="pb-2">
                            <TodoItem 
                                task={todo.task}
                                completeByTime={todo.completeByTime}
                            />
                        </li>
                    )
                })
            }
        </ul>
    )
}