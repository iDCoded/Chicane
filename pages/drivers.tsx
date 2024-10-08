import BackButton from "@/components/BackButton";
import DriverCard from "@/components/DriverCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";

export default function Drivers() {
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
				console.table(drivers);
				setLoading(false);
			}
		};

		fetchDrivers();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
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

	return (
		<>
			<div className="fixed z-20">
				<BackButton />
			</div>
			<div className="flex justify-center content-center">
				<h1 className="text-4xl mt-6 font-bold">Drivers</h1>
			</div>
			<div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 mt-4 p-8">
				{loading ? (
					<>
						{Array.from({ length: 20 }).map((_, index) => (
							<Skeleton key={index} className="min-w-[276px] min-h-[220px]" />
						))}
					</>
				) : (
					drivers.map((driver) => (
						<DriverCard
							key={driver.driver_number}
							name={driverFullName(driver.driver_number)}
							driverNumber={driver.driver_number}
							team={driver.team_name}
							teamColor={driver.team_colour}
						/>
					))
				)}
			</div>
		</>
	);
}
