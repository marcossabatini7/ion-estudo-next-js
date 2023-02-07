export default function list2() {
	const itens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

	return (
		<div>
			{itens.map((item) => (
				<span key={item}>{item}, </span>
			))}
		</div>
	)
}
