<!-- Creates a counter by using the svelte component counter.svelte -->
<Counter />

<script>

const now = Date.now();

//console.log(`${Date.now() - now}ms`);

import PocketBase from 'pocketbase';

const pb = new PocketBase('https://pocketbase.io');

  import OpenAI from "openai";

  const openai = new OpenAI({ apiKey: '', dangerouslyAllowBrowser: true });
const questions = new Array();
const responses = new Array();
var frame = 0;
var messTextBase = "Hello Chatgpt, please respond with 2-3 sentence responses. You have been asked '";
var messText = ""
var url = ""  
var img = ""
var theOtherMsg = ""




  // Imports a few extensions
  import Counter from "../components/counter.svelte";
  import { Button, Alert, Card, Navbar, NavBrand, NavLi, NavUl, NavHamburger, Toast } from 'flowbite-svelte';
  import { FireOutline } from 'flowbite-svelte-icons';
  import { Geolocation } from '@capacitor/geolocation';
  import { Camera, CameraResultType } from '@capacitor/camera';
  import { onMount } from 'svelte';
  


  async function callgpt(question,base64Image) {
  // send and wait for a response from chatgpt
//   console.log(question)
  const completion = await openai.chat.completions.create({
    "model": "gpt-4-turbo",
    "messages": [
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": `${question}`,
          },
          {
            "type": "image_url",
            "image_url": {
              "url": `data:image/jpeg;base64,${base64Image}`
            }
          }
        ]
      }
    ],
    "max_tokens": 300

  });
  
  
  // recieve the answer from chatgpt and return it 
  const answer = completion.choices[0].message.content;
  console.log("\x1b[36m%s\x1b[0m"+answer)
  responses.push(answer)
  
  return answer;
}


async function genQuesiton(question){
    frame += 1;
    const userQuesiton = question

    questions.push(userQuesiton)
    if (userQuesiton == "0") {
      rl.close();

    }
    if (frame != 1){
      messText = messTextBase;
      for (var i=0; i < questions.length-1; i++){
        messText = messText+questions[i] + ","
      }
      messText = messText + "' and have answered each with "
      for (var j=0; j < responses.length; j++){
        messText = messText+responses[j] 
      }
      messText = messText + " Please answer the current question of " +userQuesiton

    }
    else {
      messText = userQuesiton;

    }
    console.log("\u001b[34m"+messText)
    return messText;

}

async function askQuestion(question, base64String) {  
    const altQuesiton = await genQuesiton(question)

    
    return callgpt(altQuesiton,base64String);
   
    
}





  // sets location to null
  let loc = null;

  // Creates the api function
  async function getCurrentPosition(){
    // Sends and await a responses from geolocation
    const res = await Geolocation.getCurrentPosition()
    loc = res

    }

  // Sets up stream and VideoRef variables
  let stream;
  let videoRef;

  // creates a getStream api function
  async function getStream() {

      // Trys code first 
      try {
        
        // sets up stream variable and sets video to true and audio to false
        stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false
        });

        // sets video reference to a source code object called stream
        videoRef.srcObject = stream;

      // If code doesn't run, log an error in console
      } catch (err) {
          console.error(err);
      }
      console.log(stream.getTracks()[0])
  }

  // Creates a stopStream api function
  async function stopStream() {
    
    // Stops the stream and sets videoRef to null
    stream.getTracks().forEach(track => track.stop());
    videoRef.srcObject = null;
  }

  // creates onMount function to excute code after rendering the page
   onMount(() => {



    // creates a variable called fillInput which will store the image file
    var fileInput = document.querySelector('input[type="file"]');

    // When fileInput changes do the following
    fileInput.addEventListener('change', () => {
      
      // creates a variable call fr which stores the new fileReader function
      var fr = new FileReader();

      // Reads the fileInput variable as a dataURL
      fr.readAsDataURL(fileInput.files[0]);

      // When the fr variable has loaded do the following
      fr.addEventListener('load', () => {
        // Set the results to a variable and display it in console
      
        url = fr.result;
        console.log(url)
        document.getElementById("displayImage").src = url;
     
        img = url.split(",");
        // console.log(img[1]);
    
    })  
    })

  })

  // creates a function called display
  async function display() {
    // lets theMsg equal whatever HTML element has the ID "msg"
    let theMsg = document.getElementById("msg").value;

    console.log(theMsg, " the image is: \n", img[1]);
    console.log(`${Date.now() - now}ms`);

    // Await the result of askQuestion
    theMsg += await askQuestion(theMsg, img[1]);
    theOtherMsg += theMsg
    theMsg = theOtherMsg
    console.log(`${Date.now() - now}ms`);
    console.log(theMsg);
   console.log(`${Date.now() - now}ms`);

    // If theMsg has a value, replace whatever HTML element that has the showinputhere ID with the message
    if (theMsg) {
        document.getElementById("showinputhere").innerHTML = theMsg;
    }
    // If theMsg is not set, display "No message set"
    else {
        document.getElementById("showinputhere").innerHTML = "No message set";
    }
}

</script>

<!-- Creates a svelte header -->
<svelte:head>
  <link rel="stylesheet" href="">
</svelte:head>
<!-- Creates the body of the website and styles it with Flowbite CSS for dark mode -->
<body class="bg-white-900 dark:bg-gray-900">

<!-- Creates a header and paragraph styled for dark mode -->
<h1 class="dark:text-gray-400">Welcome to SvelteKit</h1>
<p class="dark:text-gray-400">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<!-- Creates a small div tag for the geolocation -->
<div>

  <!-- Displays Geolocation as a header with smaller paragraph text below -->
  <h1>Geolocation</h1>
  <p>Your location is:</p>

  <!-- Displays latitude and longitude through the geoloation api in js -->
  <p>Latitude: {loc?.coords.latitude}</p>
  <p>Longitude: {loc?.coords.longitude}</p>

  <!-- Creates a button where the getCurrentPosition function is called on click -->
  <button on:click={getCurrentPosition}>
    Get Current Location
  </button>

</div>

<!-- Svelte Flowbite CSS Alert component -->
<div class="p-8">
  <Alert>
    <span class="font-medium">Info alert!</span>
    Change a few things up and try submitting again.
  </Alert>
</div>

<!-- Svelte Flowbite CSS Notification component -->
<Toast color="primary">
  <svelte:fragment slot="icon">
    <FireOutline class="w-6 h-6" />
  </svelte:fragment>
  Dismissable user notification.
</Toast>

<!-- Creates a section for the stream -->
<section class="container mx-auto px-4">
  <h1 class="text-4xl text-blue-500 my-4">Webcam Stream Mastery</h1>
  <!-- Creates and styles a start stream button and a stop stream button -->
  <button class="rounded-sm bg-slate-600 text-white px-4 py-2" on:click={getStream}>Start Stream</button>
  <button class="rounded-sm bg-red-600 text-white px-4 py-2" on:click={stopStream}>Stop Stream</button>

  <!-- Creates a video class element which displays the stream from the api -->
  <video class="mt-4 rounded-sm " width="640" height="480" autoplay={true} bind:this={videoRef} />
</section>

<!-- File input via camera -->
<label for="picture">camera</label>
<input type="file" id="picture" name="picture" accept="image/*" capture="environment" />

<!-- File input via internal storage of device -->
<label for="picture">file</label>
<input type="file" id="picture" name="picture" accept="image/*" />

<!-- Sets up and input and display message for testing purposes -->
<h1>Input and Display Message</h1>
<p>Enter a message</p>

<!-- Creates an input for text and button that calls the display function on click -->
<input type="text" id="msg" ><br>
<button on:click = {display}>Click me</button>

<!-- Shows whatever is stored within the showinputhere var in js -->
<p id="showinputhere"></p>

<img id="displayImage" src="" alt="">
</body>
