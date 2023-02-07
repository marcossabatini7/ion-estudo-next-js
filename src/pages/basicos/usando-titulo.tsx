import Title from '@/components/title'

export default function UsandoTitulo() {
	return (
		<>
			<Title title="Página de Cadastro" subtitle="Informe seu nome e e-mail" />
			<Title
				title="Página de Login"
				subtitle="Informe seu e-mail e senha"
				small={true}
			/>
		</>
	)
}
