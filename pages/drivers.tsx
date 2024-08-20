import BackButton from "@/components/BackButton";
import DriverCard from "@/components/DriverCard";
import { useEffect, useState } from "react";

export default function Drivers() {
	type Driver = {
		session_key: number;
		meeting_key: number;
		broadcast_name: string;
		country_code: string;
		first_name: string;
		full_name: string;
		headshot_url: string;
		last_name: string;
		driver_number: number;
		team_colour: string;
		team_name: string;
		name_acronym: string;
	};

	const [drivers, setDrivers] = useState<Driver[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchDrivers = async () => {
			try {
				const res = await fetch(
					"https://api.openf1.org/v1/drivers?session_key=latest"
				);
				const data = await res.json();
				setDrivers(data);
			} catch (error) {
				console.error("Failed to fetch drivers:", error);
			} finally {
				// console.table(drivers);
				setLoading(false);
			}
		};

		fetchDrivers();
	});
	const driverFullName = (driverNumber: number) => {
		const firstName = drivers.find(
			(f) => f.driver_number === driverNumber
		)?.first_name;
		const lastName = drivers.find(
			(f) => f.driver_number === driverNumber
		)?.last_name;
		const fullName = `${firstName} ${lastName}`;
		return fullName;
	};
	if (loading)
		return (
			<>
				<p className="loading-text">Loading...</p>
			</>
		);
	return (
		<>
			<BackButton />
			<div className="flex justify-center content-center">
				<h1 className="text-4xl mt-6">Drivers</h1>
			</div>
			<div className="grid grid-cols-4 gap-12 mt-4 p-8">
				{drivers.map((driver) => (
					<DriverCard
						key={driver.driver_number}
						name={driverFullName(driver.driver_number)}
					/>
				))}
			</div>
		</>
	);
}
