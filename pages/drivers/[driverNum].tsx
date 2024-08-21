import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
			<div className="h-screen">
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
			</div>
		</>
	);
}
