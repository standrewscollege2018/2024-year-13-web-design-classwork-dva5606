<script>
    import Counter from "../components/counter.svelte";
    import { Button, Alert, Card, Navbar, NavBrand, NavLi, NavUl, NavHamburger, Toast } from 'flowbite-svelte';
    import { FireOutline } from 'flowbite-svelte-icons';
</script>

<h1 class="dark:text-gray-400 dark:bg-blue-900 ">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>chickenchickenchicken</p>

<Counter />

  
  <div class="p-8">
    <Alert>
      <span class="font-medium">Info alert!</span>
      Change a few things up and try submitting again.
    </Alert>
  </div>

  <Toast color="primary">
    <svelte:fragment slot="icon">
      <FireOutline class="w-6 h-6" />
    </svelte:fragment>
    Dismissable user notification.
  </Toast>