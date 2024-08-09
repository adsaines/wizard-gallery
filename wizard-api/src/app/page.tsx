'use client'

import { fetchElixirList } from "./api/wizardApi";
import { TodoList } from "./components/TodoList";

export default function Home() {
	return (
		<>
			<div>
				<ul className="flex justify-center">
					<TodoList />
				</ul>
			</div>
			<div>
				We're gonna call the beginner potions up.

				<br></br>

				<button
					className="border border-red"
					onClick={() => fetchElixirList()}
					>
					Call for beginner potions
				</button>
			</div>
		</>
	);
}
