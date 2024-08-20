/**
 * global.d.ts
 * All global TS declarations.
 */
export {};

declare global {
	interface Window {
		/**
		 * E_API : Electron Inter-Process Communication API.
		 */
		E_API: {
			on: (
				channel: string,
				callback: (event: Electron.IpcRendererEvent, ...args: any[]) => void
			) => void;
			send: (channel: string, args: any) => void;
		};
	}
	interface Driver {
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
	}
	interface DriverCardProps {
		rank?: number;
		points?: number;
		name: string;
		team?: string;
		country?: string;
		countryFlag?: string;
		driverImage?: string;
		driverNumber?: number;
		teamColor?: string;
	}
}
