"use client";

import { ArrowBigLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/router";

export default function BackButton() {
	const router = useRouter();
	const routeToHome = () => {
		router.back();
	};
	return (
		<>
			<div>
				<Button onClick={routeToHome} className="mt-4 ml-4">
					<ArrowBigLeft /> Back
				</Button>
			</div>
		</>
	);
}
