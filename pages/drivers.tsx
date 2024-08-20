import BackButton from "@/components/BackButton";
import DriverCard from "@/components/DriverCard";

export default function Drivers() {
	return (
		<>
			<BackButton />
			<div className="flex justify-center content-center">
				<h1 className="text-4xl mt-6">Drivers</h1>
			</div>
			<div className="flex flex-row gap-12 mt-4 p-8">
				<DriverCard name="Charles Leclerc" rank={3} />
				<DriverCard name="Carlos Sainz" />
				<DriverCard name="Alexander Albon" />
				<DriverCard name="Sergio Perez" />
			</div>
		</>
	);
}
