"use client";

import { useRouter } from "next/router";
import { Button } from "./ui/button";
import { ArrowBigRight } from "lucide-react";

export default function GetStartedButton() {
	const router = useRouter();

	const getStarted = () => {
		router.push("/drivers");
	};
	return (
		<>
			<Button className="mt-4" onClick={getStarted}>
				Get Started!
				<ArrowBigRight />{" "}
			</Button>
		</>
	);
}
