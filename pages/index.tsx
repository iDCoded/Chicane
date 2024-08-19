import GetStartedButton from "@/components/GetStartedButton";

export default function Home() {
	return (
		<>
			<main>
				<div className="flex flex-col items-center justify-center min-h-screen bg-dark">
					<h1 className="content-center text-3xl">
						Welcome to <code className="font-serif">APP_NAME</code>
					</h1>
					<GetStartedButton />
				</div>
			</main>
		</>
	);
}
