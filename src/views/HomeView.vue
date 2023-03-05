<script>
import { useGlobalStore } from "../store/GlobalStore";
export default {
  name: 'HomeView',
	setup() {
		const globalStore = useGlobalStore();
		return {
			globalStore
		}
	}
}
</script>

<template>
  <h1>Hello World</h1>
	<div class="piniaStats">
		<p>Pinia Store: {{ globalStore.pineappleCount }}</p>
		<div class="buttons">
		<button @click="globalStore.incrementPineapple()">Increment</button>
		<button @click="globalStore.decrementPineapple()">Decrement</button>
		</div>
	</div>
	<div class="pineapples">
		<img src="src/assets/pinia.svg" alt="Pinia" width="25" height="25" v-for="_ in globalStore.pineappleCount" :key="_" />
	</div>
	<router-link to="/about">About</router-link>
</template>

<style>
.piniaStats {
	font-size: 0.75em;
	color: #888;
	margin-bottom: 3em;
}
.pineapples {
	margin: auto;
	max-width: 125px;
}
</style>