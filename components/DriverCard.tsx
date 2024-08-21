import Image from "next/image";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";
import Link from "next/link";

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

	const parseFirstName = (driverName: string) => {
		const name = driverName.split(" ");
		const firstName = name[0];
		return firstName;
	};
	const parseLastName = (driverName: string) => {
		const name = driverName.split(" ");
		const lastName = name[1];
		return lastName;
	};
	return (
		<>
			<div className="driver-name min-w-[276px] overflow-hidden">
				<Link href={`/drivers/${props.driverNumber}`}>
					<Card className="min-h-[220px] flex flex-col h-full">
						<CardHeader className="flex flex-row flex-shrink-0">
							<div
								className="w-1 h-14 mr-2"
								style={{ backgroundColor: `#${props.teamColor}` }}
							/>
							<div className="flex flex-col">
								<CardTitle className="font-light text-lg">
									{parseFirstName(props.name)}
								</CardTitle>
								<CardTitle className="font-semibold">
									{parseLastName(props.name)}
								</CardTitle>
							</div>
						</CardHeader>
						<div className="px-5">
							<Separator />
						</div>

						<CardContent className="relative my-2 flex-grow overflow-hidden">
							<CardDescription>{props.team}</CardDescription>
							<div className="absolute top-0 right-4">
								<Image
									src={formatDriverURL(props.name.toString())}
									alt={props.name}
									width={100}
									height={100}
									priority
								/>
							</div>
							<div className="number">
								<Image
									className="absolute top-8 left-4 drop-shadow-lg"
									src={formatDriverNumberURL(props.name.toString())}
									alt={props.driverNumber.toString()}
									width={80}
									height={80}
								/>
							</div>
						</CardContent>
					</Card>
				</Link>
			</div>
		</>
	);
}
