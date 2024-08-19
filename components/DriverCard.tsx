interface DriverCardProps {
	rank?: number;
	points?: number;
	name: string;
	team?: string;
	country?: string;
	countryFlag?: string;
	driverImage?: string;
	driverNumber?: number;
}
export default function DriverCard(props: DriverCardProps) {
	return (
		<>
			<div className="driver-name">
				<h2 className="name text-2xl">{props.name}</h2>
			</div>
		</>
	);
}
