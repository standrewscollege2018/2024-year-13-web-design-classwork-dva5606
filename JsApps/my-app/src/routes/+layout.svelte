<script>
	// Imports and exports a couple things and sets btnClass
	export const prerender = true
	import '../input.css';
	import { DarkMode } from 'flowbite-svelte';
	let btnClass = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2';
</script>

<!-- DarkMode is now styled with btnClass -->
<DarkMode {btnClass} />

<!-- Placeholder which I can fill withmy own markup allowing me to create multiple DOM tress -->
<slot />