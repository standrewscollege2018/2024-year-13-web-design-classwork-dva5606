<script>
	import '../app.css';
	import { DarkMode } from 'flowbite-svelte';
	import { ThumbsUpSolid, ThumbsDownSolid } from 'flowbite-svelte-icons';
	let btnClass = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2';
</script>


  
<DarkMode {btnClass} />

<slot />

