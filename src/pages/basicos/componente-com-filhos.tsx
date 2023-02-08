import ItemLista from '@/components/ItemLista'
import Lista from '@/components/Lista'

export default function ComponenteComFilhos() {
	return (
		<>
			<h1>Componente Com Filhos</h1>

			<Lista>
				<ItemLista key={1} content="conteudo 1" />
				<ItemLista key={2} content="conteudo 2" />
				<ItemLista key={3} content="conteudo 3" />
				<ItemLista key={4} content="conteudo 4" />
				Isso é um teste
			</Lista>
		</>
	)
}
