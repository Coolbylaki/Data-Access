const Question = (props) => {
	const onClickHandler = (e) => {
		const value = e.target.value;
		const answerName = e.target.name;

		if (localStorage.getItem(answerName) === value) {
			localStorage.removeItem(answerName);
		} else {
			localStorage.setItem(answerName, value);
		}
	};

	return (
		<section className="my-2">
			<p className="text-3xl font-bold text-blue-300">
				<span className="text-blue-500">{props.index + 1}.</span> {props.question}
			</p>
			{props.options.map((option, index) => {
				const answerName = `answerSet-${props.index}`;
				const storedValue = localStorage.getItem(answerName);

				return (
					<label key={index} className="text-xl text-white" onClick={onClickHandler}>
						<input
							className="mb-2"
							type="radio"
							name={answerName}
							value={option}
							defaultChecked={storedValue === option}
						/>{" "}
						{option}
						<br />
					</label>
				);
			})}
		</section>
	);
};

export default Question;
