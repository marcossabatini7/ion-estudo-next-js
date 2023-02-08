export default function Filho(props: {
	falarComPai: (e: React.MouseEvent | string) => void
}) {
	return (
		<>
			<h3>Filho</h3>

			<button onClick={props.falarComPai}>[EVENTO] Falar com o pai</button>
			<button onClick={() => props.falarComPai('Fale algo com o pai')}>
				[TEXTO] Falar com o pai
			</button>
		</>
	)
}
