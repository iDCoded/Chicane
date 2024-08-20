import Image from "next/image";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";

export default function DriverCard(props: DriverCardProps) {
	/**
	 *
	 * @param fullName Name of the driver.
	 * @returns URL for the image of the headshot of the driver.
	 */
	const formatDriverURL = (fullName: string) => {
		const baseURL =
			"https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers";

		let name = fullName.split(" ");
		let firstName = name[0];
		let lastName = name[1];
		let initials = `${firstName.slice(0, 3)}${lastName.slice(0, 3)}01`;

		const URL = `${baseURL}/${firstName
			.at(0)
			?.toUpperCase()}/${initials.toUpperCase()}_${firstName}_${lastName}/${initials.toLowerCase()}.png`;
		console.log(URL);
		return URL;
	};
	return (
		<>
			<div className="driver-name">
				<Card>
					<CardHeader>
						<Image
							src={formatDriverURL(props.name.toString())}
							alt={props.name}
							width={80}
							height={80}
							priority
						/>
						<CardTitle>{props.name}</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription>{props.name}</CardDescription>
					</CardContent>
				</Card>
			</div>
		</>
	);
}
