export default function If({
	teste,
	children,
}: {
	teste: boolean
	children: JSX.Element | string
}) {
	return teste ? <>children</> : null
}
