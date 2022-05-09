<template>
	<div class="content">
		<router-link to="/">Home</router-link>|
		<router-link to="/guide">Guide</router-link>
		<router-view v-slot="{ Component, route }">
			<transition
				mode="out-in"
				:enter-active-class="route.meta.enterClass"
				:leave-active-class="route.meta.leaveClass"
			>
				<component :is="Component" />
			</transition>
		</router-view>
	</div>
</template>

<script>
	import "animate.css";
	export default {
		name: "App",
		data() {
			return {};
		},
	};
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}

	.content {
		width: 40%;
		min-width: 500px;
		margin: 0 auto;
		position: relative;
	}

	a {
		font-weight: bold;
		text-decoration: none;
		margin: 10px;
	}
	a:hover {
		color: rgba(34, 0, 255, 0.611);
		text-decoration: underline;
	}

	a.router-link-active {
		border-bottom: 1px solid;
		color: rgba(34, 0, 255, 0.611);
	}

	p {
		color: rgba(128, 128, 128, 0.49);
	}
</style>
