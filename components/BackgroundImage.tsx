import Image from "next/image";

export default function BackgroundImage() {
	return (
		<>
			{/* https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Italy%20carbon.png */}
			<Image
				src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Italy%20carbon.png"
				alt={"Italy"}
				quality={100}
				fill
				sizes="100vw"
				style={{
					objectFit: "cover",
				}}
				className="z-0"
			/>
		</>
	);
}
