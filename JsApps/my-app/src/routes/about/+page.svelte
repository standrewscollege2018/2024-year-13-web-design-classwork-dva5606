<Counter />

<script>
    import Counter from "../components/counter.svelte";
    import { Button, Alert, Card, Navbar, NavBrand, NavLi, NavUl, NavHamburger, Toast } from 'flowbite-svelte';
    import { FireOutline } from 'flowbite-svelte-icons';
    let stream;
    let videoRef;

    async function getStream() {
        try {
            stream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: false
            });
            videoRef.srcObject = stream;
        } catch (err) {
            console.error(err);
        }
        console.log(stream.getTracks()[0])
    }

    async function stopStream() {
        stream.getTracks().forEach(track => track.stop());
        videoRef.srcObject = null;
    }
</script>

<svelte:head>
  <link rel="stylesheet" href="">
</svelte:head>

<body class="bg-white-900 dark:bg-gray-900">
  

  <h1 class="dark:text-gray-400 dark:bg-blue-900 ">Welcome to SvelteKit</h1>
  <p class="dark:text-gray-400">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
  <p>chickenchickenchicken</p>



    
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

    <section class="container mx-auto px-4">
    <h1 class="text-4xl text-blue-500 my-4">Webcam Stream Mastery</h1>
    <button class="rounded-sm bg-slate-600 text-white px-4 py-2" on:click={getStream}>Start Stream</button>
    <button class="rounded-sm bg-red-600 text-white px-4 py-2" on:click={stopStream}>Stop Stream</button>

    <video class="mt-4 rounded-sm " width="640" height="480" autoplay={true} bind:this={videoRef} />

</section>
</body>

