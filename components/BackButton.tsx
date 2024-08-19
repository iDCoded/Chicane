"use client";

import { ArrowBigLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/router";

export default function BackButton() {
	const router = useRouter();
	const goBack = () => {
		router.back();
	};
	return (
		<>
			<div>
				<Button onClick={goBack} className="mt-4 ml-4">
					<ArrowBigLeft /> Back
				</Button>
			</div>
		</>
	);
}
