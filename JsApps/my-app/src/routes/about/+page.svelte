<Counter />
<script>
  import Counter from "../components/counter.svelte";
  import { Button, Alert, Card, Navbar, NavBrand, NavLi, NavUl, NavHamburger, Toast } from 'flowbite-svelte';
  import { FireOutline } from 'flowbite-svelte-icons';
  import { Geolocation } from '@capacitor/geolocation';
  import { Camera, CameraResultType } from '@capacitor/camera';
  import { onMount } from 'svelte';
  
  
  let loc = null;
    async function getCurrentPosition(){
      const res = await Geolocation.getCurrentPosition()
      loc = res
      console.log("frog")
    
    }
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

  onMount(() => {

    const fileInput = document.querySelector('input[type="file"]');

    fileInput.addEventListener('change', () => {
    console.log(fileInput.files)
    
    const fr = new FileReader();

    fr.readAsDataURL(fileInput.files[0]);

    fr.addEventListener('load', () => {
      const url = fr.result;
      console.log(url);
    
    })
    })

  })

  function display(){
      let themsg = document.getElementById("msg").value;
      console.log("fgrog");
      if (themsg){
          document.getElementById("showinputhere").innerHTML = themsg;
          console.log("true");
      }
      else{
          document.getElementById("showinputhere").innerHTML = "No message set";
          console.log("false");
    }
    }
  
  


</script>


<svelte:head>
  <link rel="stylesheet" href="">
  
</svelte:head>

<body class="bg-white-900 dark:bg-gray-900">

<h1 class="dark:text-gray-400">Welcome to SvelteKit</h1>
<p class="dark:text-gray-400">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div>
  <h1>Geolocation</h1>
  <p>Your location is:</p>
  <p>Latitude: {loc?.coords.latitude}</p>
  <p>Longitude: {loc?.coords.longitude}</p>

  <button on:click={getCurrentPosition}>
    Get Current Location
  </button>
</div>

  
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



<label for="picture">camera</label>
<input type="file" id="picture" name="picture" accept="image/*" capture="environment" />

<label for="picture">file</label>
<input type="file" id="picture" name="picture" accept="image/*" />


<h1>Input and Display Message</h1>

<p>Enter a message</p>

  <input type="text" id="msg" ><br>
  <button on:click = {display}>Click me</button>

<p id="showinputhere"></p>
</body>

