import If from '@/components/if'

export default function CondicionalDois() {
	const numero = 2

	return (
		<>
			<h1>Condicional Dois</h1>

			<If teste={numero % 2 === 0}>
				<h3>
					<i> O número é par</i>
				</h3>
			</If>
		</>
	)
}
