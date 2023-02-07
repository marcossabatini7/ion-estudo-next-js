function gerarLista(tamanho = 10) {
	const lista = []

	for (let index = 1; index <= tamanho; index++) {
		lista.push(<span key={index}>{index}, </span>)
	}
	return lista
}

export default function list2() {
	return (
		<>
			<div>{gerarLista(20)}</div>
			<div>{gerarLista(2)}</div>
		</>
	)
}
