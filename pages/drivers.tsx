import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";

import { ArrowLeft } from "lucide-react";

export default function Drivers() {
	return (
		<>
			<BackButton />
			<div className="flex justify-center content-center">
				<h1 className="text-4xl">Drivers</h1>
			</div>
		</>
	);
}
