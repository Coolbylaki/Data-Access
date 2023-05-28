import Button from "./components/UI/Button";
import Questions from "./components/Questions";
import Footer from "./components/UI/Footer";
import { useState } from "react";

function App() {
	const [showQuestions, setShowQuestions] = useState(false);

	return (
		<>
			<div className="mb-4 flex justify-center">
				{!showQuestions && (
					<Button
						onClick={() => {
							setShowQuestions(true);
						}}
						className="rounded border-[3px] border-[#d3d3da] bg-black p-3 text-2xl font-bold text-white hover:bg-[#d3d3da] hover:text-black">
						Click to start quiz
					</Button>
				)}
			</div>
			{!showQuestions && (
				<h1 className="max-w-md text-center text-4xl font-[600] text-white">Your answers will be saved</h1>
			)}
			{showQuestions && <Questions />}
			<Footer />
		</>
	);
}

export default App;
