export default function RepeticaoUm() {
	const listaAprovados = [
		'João',
		'Maria',
		'Ana',
		'Daniel',
		'Carlos',
		'Marcos',
		'Rose',
	]

	return (
		<>
			<h1>Repetição Um</h1>
			<ul>
				{listaAprovados.map((nome, i) => (
					<li key={i}>
						{i + 1} - {nome}
					</li>
				))}
			</ul>
		</>
	)
}
