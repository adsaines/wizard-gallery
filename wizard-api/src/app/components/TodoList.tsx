// Lesson 2: use that thing that you can display to create a dynamic display
'use client'

import { TodoItem, TodoItemProps } from "./TodoItem"

export interface potion {
    characteristics:null
    difficulty: string
    effect: string
    id: string
    ingredients: string[]
    inventors: any[]
    manufacturer: string
    name: string
    sideEffects: string
    time: null
}

export interface toDoListProps{
    data:potion[]
}


export const TodoList = ({data}:toDoListProps) => {

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
                data.map((potion, count) => (
                    <li key={count} className="pb-2">
                        <TodoItem 
                            task={potion.name}
                            completeByTime={new Date()}
                        />
                        {count < data.length - 1 && <hr style={{ borderColor: 'black' }} />}
                    </li>
                ))
            }
        </ul>
    )
}