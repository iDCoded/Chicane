import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CardTitle } from "@/components/ui/card";
import BackButton from "@/components/BackButton";
import { countries } from "@/public/countries";

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

	const getDriverCountryFlag = (countryCode: string) => {
		const baseURL =
			"https://media.formula1.com/image/upload/f_auto/q_auto/v1677250024/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/";
		const URL = `${baseURL}${countries[countryCode]}-flag.png`;
		return URL;
	};

	if (!driverData) {
		return (
			<>
				<BackButton />

				<div className="flex justify-center items-center h-screen">
					<h1 className="font-bold text-lg">Fetching Driver Data...</h1>
				</div>
			</>
		);
	}

	return (
		<>
			<BackButton />
			<div className="h-screen flex flex-row">
				<div className="driver-image flex flex-col p-12">
					<Image
						className="rounded-md shadow-md"
						src={`https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/${driverData.last_name.toLowerCase()}`}
						alt={driverData.full_name}
						width={240}
						height={240}
					/>
					<div className="flex flex-row justify-between items-center">
						<h3 className="mt-1 pl-4 font-semibold text-2xl text-gray-500">
							{driverData.driver_number}
						</h3>
						<h3 className="mt-2 pl-2 font-semibold text-xl">
							{driverData.name_acronym}
						</h3>
						<div className="py-2 mt-2">
							<Image
								className="border-[1.5px] rounded-md border-[#808080] mr-2"
								src={getDriverCountryFlag(driverData.country_code)}
								alt={driverData.full_name}
								width={54}
								height={31}
							/>
						</div>
					</div>
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
				<div className="flex flex-row pt-16 ml-2">
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
