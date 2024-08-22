import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CardTitle } from "@/components/ui/card";
import BackButton from "@/components/BackButton";
import { countries } from "@/public/countries";
import { biographies } from "@/public/biography";

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

		let lastName =
			driverName != "ZHOU Guanyu" ? driverName.split(" ")[1] : "Zhou";

		const URL = `${baseURL}${lastName.toLowerCase()}.png`;
		return URL;
	};

	const getDriverCountryFlag = (countryCode: string) => {
		const baseURL =
			"https://media.formula1.com/image/upload/f_auto/q_auto/v1677250024/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/";
		const URL = `${baseURL}${countries[countryCode]}-flag.png`;
		return URL;
	};

	const getDriverBio = (driverAcronym: string) => {
		return biographies[driverAcronym];
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
				<div className="driver-image flex flex-col p-12 pr-2 min-w-[240px]">
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
						<h3 className="mt-2 pl-2 px-6 font-semibold text-xl">
							{driverData.name_acronym}
						</h3>
					</div>
					<div className="flex flex-row pt-4 ml-2 min-w-[120px]">
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
					<div className="helmet mt-16 h-full w-full object-cover">
						<Image
							src={formatDriverHelmetURL(driverData.full_name)}
							alt={driverData.full_name}
							width={180}
							height={180}
						/>
					</div>
				</div>

				<div className="mx-8 leading-8">
					<div className="flex">
						<h3 className="font-bold text-4xl ">Biography</h3>
						<div className="ml-8  pt-1">
							<Image
								className="border-[1.5px] rounded-md border-[#808080] mr-2"
								src={getDriverCountryFlag(driverData.country_code)}
								alt={driverData.full_name}
								width={54}
								height={31}
							/>
						</div>
					</div>
					<p className="mt-6 text-md text-balance">
						{getDriverBio(driverData.name_acronym)}
					</p>
				</div>
			</div>
		</>
	);
}
