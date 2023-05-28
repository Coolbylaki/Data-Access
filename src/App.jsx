import Button from "./components/UI/Button";
import Questions from "./components/Questions";
import { useState } from "react";

function App() {
	const [showQuestions, setShowQuestions] = useState(false);

	return (
		<>
			{!showQuestions && (
				<Button
					onClick={() => {
						setShowQuestions(true);
					}}
					className="rounded border-[3px] border-[#d3d3da] bg-[#d3d3da] p-3 text-2xl font-bold hover:bg-black hover:text-white">
					Click to start quiz
				</Button>
			)}
			{showQuestions && <Questions />}
		</>
	);
}

export default App;
