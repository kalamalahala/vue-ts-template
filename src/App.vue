<script>
import { defineComponent } from "vue";
import PoweredByVueWp from "./components/PoweredByVueWp.vue";

export default defineComponent( {
	components: { PoweredByVueWp }
} )
</script>

<template>
	<router-view :key="$route.fullPath"></router-view>
	<powered-by-vue-wp />
</template>

<style scoped>
router-view {
	display: block;
	z-index: 1;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: #fff;
}

powered-by-vue-wp {
	position: absolute;
	bottom: 0;
	right: 0;
	z-index: 2;
}
</style>
