<svelte:head>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</svelte:head>

<script>
    const now = Date.now();
      import { onMount } from 'svelte';
      import HistoryLightInactive from "../components/historyLightInactive.svelte";
      import SettingsLightInactive from "../components/settingsLightInactive.svelte";
      import OpenAI from "openai";
 
 const openai = new OpenAI({ apiKey: '[insert API key here]', dangerouslyAllowBrowser: true });
const questions = new Array();
const responses = new Array();
var frame = 0;
var messTextBase = "Hello Chatgpt, please respond with 2-3 sentence responses. You have been asked '";
var messText = ""
var url = ""  
var img = ""
var userTextExtended = ""
var printText = ""
var userText = ""
var displayConversation = ""

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




// creates onMount function to excute code after rendering the page
onMount(() => {
// creates a variable called fillInput which will store the image file
  var imageInput = document.querySelector('input[type="file"]');
  let send = document.getElementById("send")
  send.addEventListener('click', (display))

  // When fileInput changes do the following
  imageInput.addEventListener('change', () => {
    
    // creates a variable call fr which stores the new fileReader function
    var fr = new FileReader();

    // Reads the fileInput variable as a dataURL
    fr.readAsDataURL(imageInput.files[0]);

    // When the fr variable has loaded do the following
    fr.addEventListener('load', () => {

      // Set the results to a variable and display it in console
      var url = fr.result;

      console.log(url);

      document.getElementById("imageDisplay").src = url;
      img = url.split(",");
      })  

      const plusIcon = document.getElementById("plusIcon");
      plusIcon.className += "absolute opacity-60 z-50 h-[5%] mb-[45%] mr-[30%]";
    })

})

async function display(){
  console.log("rfrog")

  console.log("rat")

  
  console.log(`${Date.now() - now}ms`);
    let userText = document.getElementById("textInputField").value;  
  console.log(userText, img[1])
  console.log(`${Date.now() - now}ms`);
  
  printText = await askQuestion(userText, img[1]);
  
  console.log(`${Date.now() - now}ms`);
  console.log(printText)
  if (printText){
    console.log(printText)
    document.getElementById("displayUserText").innerHTML = printText;
    }
}
</script>
<div class="sticky top-0 border-b bg-lightModeGrey-100">
  <h1 class="text-2xl text-black font-consolas text-center my-[15px]">Chats</h1>
</div>
<div class="black" id="bg">
  <div class="m-auto w-1/2 py-6">
      <label for="image" class="flex items-center justify-center h-60 bg-white border-lightModeGrey-400 border border rounded-xl"> 
        <input id="image" type="file" accept="image/*" class="hidden" />
        <img class="w-auto h-auto rounded-xl " id="imageDisplay" src="" alt="">
        <img class="h-[60%] rounded-xl " id="plusIcon" src="src/lib/images/plusLight.png" alt="">
      </label>
  </div>
</div>
<div class="bg-lightModeGrey-200 p-3 m-2 rounded-xl">
  <code id="displayConversation" ></code>


      
      

  
     




<div class="" id="textBarAndButtonContainer">

  <div class="flex mx-[20px] border-black border-2 bg-white rounded-xl bottom-[100px] justify-centre fixed">
    <div class="w-[10%]">
      <img class="h-auto p-1" src="src/lib/images/microphoneLight.png" alt="">
    </div>

    <hr class="w-[2px] h-[25px] my-auto rounded-xl bg-lightModeGrey-600 border-0">

    <input type="text" id="textInputField" placeholder="Ask ChatGPT..."
    class="ml-[5px] focus:outline-none grow">
    
    <div id="send" class="w-[33px]">
      <img class="h-auto p-1" src="src/lib/images/sendLight.png" alt="">
    </div>

</div>

  <hr class="bg-black border border-lightModeGrey-800 w-[75%] left-[12.5%] bottom-[150px] my-[10px]">

  <div class="grid grid-cols-3 bottom-0 w-[80%] left-[8%] justify-center fixed mx-auto" id="buttonContainer">

      <HistoryLightInactive />

      <button onclick="location.href='/'" type="button" class="bg-lightModeGrey-800 border border-lightModeGrey-800 rounded-[100%] m-[12%]">
          <img class="w-[65%] mx-auto" src="src/lib/images/chatsLightActive.png" alt="">
      </button>

      <SettingsLightInactive />

  </div>
</div>
