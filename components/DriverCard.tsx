import Image from "next/image";
import { Card, CardHeader, CardTitle } from "./ui/card";

export default function DriverCard(props: DriverCardProps) {
	return (
		<>
			<div className="driver-name">
				<Card>
					<CardHeader>
						<Image
							src="https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png"
							alt={props.name}
							width={80}
							height={80}
						/>
						<CardTitle>{props.name}</CardTitle>
					</CardHeader>
				</Card>
			</div>
		</>
	);
}
