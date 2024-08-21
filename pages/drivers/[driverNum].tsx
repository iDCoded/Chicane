import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CardTitle } from "@/components/ui/card";

/**
 * Dynamic Driver Page
 */
export default function DriverDetail() {
	const router = useRouter();
	const { driverNum } = router.query;
	const [driverData, setDriverData] = useState<Driver | null>(null);

	useEffect(() => {
		if (driverNum) {
			const fetchDriverData = async () => {
				const res = await fetch(
					`https://api.openf1.org/v1/drivers?driver_number=${driverNum}&session_key=latest`
				);
				const data = await res.json();

				setDriverData(data[0]);
			};
			fetchDriverData();
		}
	}, [driverNum]);

	const formatDriverHelmetURL = (driverName: string) => {
		const baseURL =
			"https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1024/content/dam/fom-website/manual/Helmets2024/";

		let lastName = driverName.split(" ")[1];

		const URL = `${baseURL}${lastName.toLowerCase()}.png`;
		return URL;
	};

	if (!driverData) {
		return (
			<>
				<div className="flex justify-center items-center h-screen">
					<h1 className="font-bold text-lg">Fetching Driver Data...</h1>
				</div>
			</>
		);
	}

	return (
		<>
			<div className="h-screen flex flex-row">
				<div className="driver-image flex flex-col p-12">
					<Image
						className="rounded-md shadow-md"
						src={`https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/${driverData.last_name.toLowerCase()}`}
						alt={driverData.full_name}
						width={240}
						height={240}
					/>
					<h3 className="mt-4 pl-2 font-semibold text-3xl">
						{driverData.name_acronym}
					</h3>
				</div>
				<div
					className="w-1 h-14 mt-[72px]"
					style={{ backgroundColor: `#${driverData.team_colour}` }}
				/>
				<div className="helmet mt-16">
					<Image
						src={formatDriverHelmetURL(driverData.full_name)}
						alt={driverData.full_name}
						width={100}
						height={100}
					/>
				</div>
				<div className="flex flex-row pt-16 ml-6">
					<div className="flex flex-col">
						<CardTitle className="font-light text-lg">
							{/* {parseFirstName(props.name)} */}
							{driverData.first_name}
						</CardTitle>
						<CardTitle className="font-semibold">
							{/* {parseLastName(props.name)} */}
							{driverData.last_name}
						</CardTitle>
					</div>
				</div>
			</div>
		</>
	);
}
