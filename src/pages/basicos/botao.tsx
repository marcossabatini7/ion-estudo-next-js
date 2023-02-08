function acaoUm() {
	console.log('ação 1')
}

export default function Botao() {
	function acao4(e: React.MouseEvent) {
		console.info(e.altKey)
	}

	return (
		<div style={{ display: 'grid' }}>
			<button onClick={acaoUm}>Ação #1</button>
			<button
				onClick={function () {
					console.log('Ação #2')
				}}
			>
				Ação #2
			</button>
			<button onClick={() => console.error('Clique #03')}>Ação #3</button>
			<button onClick={acao4}>Ação #4</button>
		</div>
	)
}
