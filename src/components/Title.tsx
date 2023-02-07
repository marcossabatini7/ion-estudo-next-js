export default function Title({
	title,
	subtitle,
	small,
}: {
	title: string
	subtitle: string
	small?: boolean
}) {
	console.log({ small })

	return small ? (
		<>
			<h3>{title}</h3>
			<h4>{subtitle}</h4>
		</>
	) : (
		<>
			<h1>{title}</h1>
			<h2>{subtitle}</h2>
		</>
	)
}
