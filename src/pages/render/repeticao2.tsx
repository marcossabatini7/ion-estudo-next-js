import listaProdutos from '@/data/listaProdutos'
import { formater } from '@/utils/currency'

export default function RepeticaoDois() {
	return (
		<>
			<h1>Repeticao Dois</h1>

			<table>
				<thead>
					<tr>
						<th>Código</th>
						<th>Nome</th>
						<th>Preço</th>
					</tr>
				</thead>
				<tbody>
					{listaProdutos.map((prod) => (
						<tr key={prod.id}>
							<td># {prod.id}</td>
							<td>{prod.nome}</td>
							<td>{formater.format(prod?.preco)}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}
