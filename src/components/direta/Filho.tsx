export default function Filho({
	nome,
	familia,
}: {
	nome: string
	familia: string
}) {
	return (
		<div style={{ display: 'flex' }}>
			<h2>Nome: {nome} &nbsp;</h2>
			<h2>Familia: {familia}</h2>
		</div>
	)
}
