export default function Title({
	title,
	subtitle,
}: {
	title: string
	subtitle: string
}) {
	return (
		<>
			<h1>{title}</h1>
			<h2>{subtitle}</h2>
		</>
	)
}
