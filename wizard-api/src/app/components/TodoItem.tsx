// Lesson 1: Make a component that displays something!
'use client'

import { useState } from "react";

export interface TodoItemProps {
    task: string;
    completed?: boolean;
    completeByTime?: Date;
    dependentTasks?: string[];
}

export const TodoItem = ({
    task,
    completed = false,
    completeByTime = new Date(),
    dependentTasks = ['None']
}: TodoItemProps) => {

    const [myTask, setMyTask] = useState(task)

    const roundAboutSetMyTask = (str: string) => {
        console.log(`My new task value: ${str}`);
        setMyTask(str);
    }

    const taskTernaryExample = task ? task : `Undefined`
    let taskIfExample: string;

    if(task) {
        taskIfExample = task;
    } else {
        taskIfExample = 'Still Undefined'
    }

    const typescriptFun = task ?? 'value if task is undefined';

    return (
        <div className="flex">
            <div className="p-2 ">
                <input type="checkbox" checked={completed} />
            </div>
            <div className="p-2 border border-gray-300">
                <input 
                    value={myTask} 
                    onChange={(event) => {
                        console.log(event)
                        roundAboutSetMyTask(event.target.value)
                    }} 
                />
            </div>
            <div className="p-2 border border-gray-300">
                <p className="h-5">task: {task}</p>
                <p className="h-5">taskTernaryExample: {taskTernaryExample}</p>
                <p className="h-5">taskIfExample: {taskIfExample}</p>
                <p className="h-5">typescriptFun: {typescriptFun}</p>
            </div>
            <div className="p-2 border border-gray-300">
                {completeByTime.toLocaleDateString()}
            </div>
            <div className="p-2 border border-gray-300">
                <ul>
                    {
                        dependentTasks?.map((task, count) => {
                            return (
                                <li key={count}>
                                    {task}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}