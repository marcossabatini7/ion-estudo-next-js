export default function SomaUm(props: { numero: number }) {
	// props.numero++

	return (
		<>
			<h2>Componente Soma1</h2>
			<h1>{props.numero + 1}</h1>
		</>
	)
}
