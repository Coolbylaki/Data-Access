import { useState, useEffect } from "react";
import quizData from "../assets/quiz.json";
import Question from "./Question";

const Questions = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const convertedData = Object.entries(quizData).map(([key, value]) => ({
			id: key,
			...value,
		}));

		setData(convertedData);
	}, []);

	if (!data) {
		return <div className="text-3xl text-white">Loading...</div>;
	}

	return (
		<>
			{data.map((q) => (
				<Question key={q.question} options={q.options} question={q.question} />
			))}
		</>
	);
};

export default Questions;
