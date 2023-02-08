export default function Lista({
	children,
}: {
	children: (JSX.Element | string)[]
}) {
	return (
		<>
			<h1>Lista</h1>
			<ul>{children}</ul>
		</>
	)
}
