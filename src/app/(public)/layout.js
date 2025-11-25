export const metadata = {
	title: "",
	description: "",
};

export default function layout({ children }) {
	return (
		<html>
			<body className="antialiased bg-black text-white">
                {children}
			</body>
		</html>
	);
}

