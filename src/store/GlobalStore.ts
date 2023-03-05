import { defineStore } from "pinia";

export const useGlobalStore = defineStore('global', {
	state: () => ({
		pineappleCount: 0,
	}),
	actions: {
		incrementPineapple(): void {
			this.pineappleCount++;
		},
		decrementPineapple(): void {
			this.pineappleCount--;
		}
	},
});