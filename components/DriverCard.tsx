import Image from "next/image";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";

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
		return URL;
	};

	const formatDriverNumberURL = (driverName: string) => {
		const baseURL =
			"https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/";
		let name = driverName.split(" ");
		let firstName = name[0];
		let lastName = name[1];
		let initials = `${firstName.slice(0, 3)}${lastName.slice(0, 3)}01`;

		const URL = `${baseURL}${initials.toUpperCase()}.png`;
		return URL;
	};
	return (
		<>
			<div className="driver-name min-w-[214px]">
				<Card className="min-h-[180px]">
					<CardHeader className="flex flex-row">
						<div
							className="w-1 h-8 mr-2"
							style={{ backgroundColor: `#${props.teamColor}` }}
						/>
						<CardTitle>{props.name}</CardTitle>
					</CardHeader>
					<div className="overflow-hidden px-4">
						<Separator />
					</div>

					<CardContent className="relative my-4">
						<CardDescription>{props.team}</CardDescription>
						<div className="absolute top-0 right-2">
							<Image
								src={formatDriverURL(props.name.toString())}
								alt={props.name}
								width={80}
								height={80}
								priority
							/>
						</div>
						<div className="number">
							<Image
								className="absolute top-6 left-4"
								src={formatDriverNumberURL(props.name.toString())}
								alt={""}
								width={80}
								height={80}
							/>
						</div>
					</CardContent>
				</Card>
			</div>
		</>
	);
}
