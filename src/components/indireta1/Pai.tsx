import Filho from './Filho'

export default function Pai() {
	function falarComPai(e: React.MouseEvent | string) {
		console.log(e)
	}

	return (
		<>
			<h2>Pai</h2>

			<Filho falarComPai={falarComPai} />
		</>
	)
}
