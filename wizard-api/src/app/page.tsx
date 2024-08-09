'use client'

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { elixirDifficulty, fetchElixirList } from "./api/wizardApi";
import { potion, TodoList } from "./components/TodoList";

export default function Home() {
	const [potions,setPotions] = useState([]as potion[])
	
	

	return (
		<>
			<div>
				<ul className="flex justify-center">
					<TodoList data={potions}/>
				</ul>
			</div>
			<div>
				We're gonna call the beginner potions up.

				<br></br>

				<button
					className="border border-red"
					onClick={() => fetchList(setPotions)}
					>
					Call for beginner potions
				</button>
			</div>
		</>
	);
}

async function fetchList(setData: Dispatch<SetStateAction<potion[]>>){
	const value = await fetchElixirList(elixirDifficulty.OneOfAKind)
	setData(value)
	console.log(value)
	
}

