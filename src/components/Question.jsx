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
		<section className="mx-12 my-3 max-w-4xl">
			<p className="mb-1 text-xl font-bold text-blue-300 md:text-3xl">
				<span className="text-blue-500">{props.index + 1}.</span> {props.question}
			</p>
			{props.options.map((option, index) => {
				const answerName = `answerSet-${props.index}`;
				const storedValue = localStorage.getItem(answerName);

				return (
					<label
						key={index}
						className="text-lg font-[500] tracking-wide text-white md:text-xl"
						onClick={onClickHandler}>
						<input
							className="mb-[0.75rem]"
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
