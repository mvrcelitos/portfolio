import "@/globals.css";
import { Inter } from "next/font/google";

import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
	title: {
		default: "Home | mvrch",
		template: "%s | mvrch",
	},
	description: "just a portfolio page!",
};

interface IRootLayout {
	children: React.ReactNode;
	modals: React.ReactNode;
}

export default function RootLayout({ children }: IRootLayout) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header variant="dark" />
				{children}
			</body>
		</html>
	);
}
