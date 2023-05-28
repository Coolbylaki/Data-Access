const Question = (props) => {
	return (
		<section className="my-2">
			<label htmlFor="question" className="text-3xl font-bold text-white">
				{props.question}
			</label>
		</section>
	);
};

export default Question;
