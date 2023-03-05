<template>
	<div>
		<a href="https://vuejs.org" rel="noopener" target="_blank">Powered by <img :src="imgSrc" alt="VueJS"/></a> &amp;
		<a href="https://wordpress.org" rel="noopener" target="_blank"><img :src="wpSrc" alt="WordPress"/></a>
	</div>
</template>

<script>
export default {
	name: "PoweredByVueWp",
	data() {
		return {
			imgSrc: '/src/assets/vue.svg',
			wpSrc: '/src/assets/Wordpress-Logo.svg'
		}
	}
}
</script>

<style scoped>
div {
	position: fixed;
	bottom: 1em;
	right: 1em;
	font-size: 0.75em;
	color: #888;
}

div a {
	color: #888;
}

div img {
	width: 1em;
	height: 1em;
	margin-left: 0.25em;
	vertical-align: middle;
}
</style>