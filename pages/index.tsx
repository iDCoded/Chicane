import { Inter, Raleway } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({
	subsets: ["latin"],
	weight: "600",
});

export default function Home() {
	return (
		<>
			<Head>
				<title>Chicane</title>
			</Head>
			<main className={raleway.className}>
				<div className="h-screen flex justify-center">
					<h1 className="content-center text-3xl">Welcome to Chicane!</h1>
				</div>
			</main>
		</>
	);
}
