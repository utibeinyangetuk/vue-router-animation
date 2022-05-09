import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Guide from "../views/Guide";

const routes = [
	{
		path: "/",
		name: "home",
		component: Home,
		// set personalized animation for each route by using the meta property, then call it in the app.js.
		meta: {
			enterClass: "animate__animated animate__fadeInLeft",
			leaveClass: "animate__animated animate__fadeOutRight",
		},
	},
	{
		path: "/guide",
		name: "guide",
		component: Guide,
		meta: {
			enterClass: "animate__animated animate__fadeInRight",
			leaveClass: "animate__animated animate__fadeOutLeft",
		},
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
