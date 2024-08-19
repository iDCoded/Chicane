const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("E_API", {
	on: (channel, callback) => {
		ipcRenderer.on(channel, callback);
	},
	send: (channel, args) => {
		ipcRenderer.send(channel, args);
	},
});
