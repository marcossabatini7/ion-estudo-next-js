export default function jsx4() {
	const subtitulo = 'Estou no JavaScript'

	return (
		<>
			<h1>Integração JS e JSX</h1>
			<h2>{subtitulo}</h2>
			<h2>3*3 = {3 * 3}</h2>
			<h2>Quem é maior, 13 ou 39? {Math.max(13, 39)}</h2>
		</>
	)
}
