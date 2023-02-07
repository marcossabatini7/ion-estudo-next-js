export default function jsx2() {
	const pessoas = [
		<li key={1}>Paulo</li>,
		<li key={2}>Ana</li>,
		<li key={3}>Carlos</li>,
	]
	const conteudo = (
		<div>
			<h1 style={{ paddingBottom: 10 }}>JSX #02</h1>

			<ul>{pessoas.map((pessoa) => pessoa)}</ul>
		</div>
	)

	return conteudo
}
