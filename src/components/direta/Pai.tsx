import Filho from './Filho'

export default function Pai(props: { nome: string; familia: string }) {
	return (
		<>
			<h2>Pai</h2>

			<Filho nome="Marcos" familia={props.familia} />
			<Filho {...props} nome="Ana" familia={props.familia} />
			<Filho nome="José" {...props} />
		</>
	)
}
