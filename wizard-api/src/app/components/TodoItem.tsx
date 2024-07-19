// Lesson 1: Make a component that displays something!

export const TodoItem = () => {
    return (
        <div className="flex">
            <input type="checkbox" />
            <span className="h-5">Buy Groceries</span>
            <div className="flex">
                <button onClick={() => alert(`I will make a copy of this item and place it at the bottom of the list.`)}>Copy</button>
                <button onClick={() => alert(`I will remove this item from the app`)}>Delete</button>
            </div>
        </div>
    )
}