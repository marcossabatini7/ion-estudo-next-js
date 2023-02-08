export default function SomentePar({ numero }: { numero: number }) {
	// if (props.numero % 2 === 0) return <h1>{props.numero}</h1>
	// return null

	return numero % 2 === 0 ? <h1>{numero}</h1> : null
}
