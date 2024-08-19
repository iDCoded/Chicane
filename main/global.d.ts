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
}
