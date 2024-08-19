import { Button } from "@/components/ui/button";
import { Inter, Raleway } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({
	subsets: ["latin"],
	weight: "600",
});

export default function Home() {
	return (
		<>
			<Head>
				<title>APP_NAME</title>
			</Head>
			<main className={`${raleway.className}`}>
				<div className="flex flex-col items-center justify-center min-h-screen bg-dark">
					<h1 className="content-center text-3xl">
						Welcome to <code className="font-serif">APP_NAME</code>
					</h1>
				</div>
			</main>
		</>
	);
}
