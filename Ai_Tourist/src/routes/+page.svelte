<svelte:head>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</svelte:head>

<div class="sticky top-0 border-b border-b-2 border-lightModeGrey-600 bg-lightModeGrey-100">
  <h1 class="text-2xl text-black font-consolas text-center my-[15px]">Chats</h1>
</div>

<div class="border-0">
  <div class="m-auto w-1/2 py-6">
      <label for="image" class="flex items-center justify-center h-60 bg-white border-lightModeGrey-400 border border-2 rounded-xl"> 
        <input id="image" type="file" accept="image/*" class="hidden" />
        <img class="w-auto h-auto rounded-xl " id="imageDisplay" src="" alt="">
        <img class="h-[60%] rounded-xl " id="plusIcon" src="src/lib/images/plusLight.png" alt="">
      </label>
  </div>
</div>


<div id="chatsContainer" class="bg-lightModeGrey-200 p-3 m-2 rounded-xl invisible">

</div>


<div class="z-50" id="textBarAndButtonContainer">

  <div class="flex mx-[20px] border-black border-2 bg-white rounded-xl bottom-[17%] justify-centre fixed">
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

  <hr class="bg-lightModeGrey-700 border border-lightModeGrey-700 w-[75%] left-[12.5%] bottom-[12.4%] my-[10px] fixed">

  <div class="grid grid-cols-3 bottom-0 w-[80%] left-[8%] justify-center fixed mx-auto" id="buttonContainer">

      <HistoryLightInactive />

      <button onclick="location.href='/'" type="button" class="bg-lightModeGrey-800 border border-lightModeGrey-800 rounded-[100%] m-[12%]">
          <img class="w-[65%] mx-auto" src="src/lib/images/chatsLightActive.png" alt="">
      </button>

      <SettingsLightInactive />

  </div>
</div>
<script>
  const now = Date.now();
    import { onMount } from 'svelte';
    import HistoryLightInactive from "../components/historyLightInactive.svelte";
    import SettingsLightInactive from "../components/settingsLightInactive.svelte";
    import OpenAI from "openai";

const openai = new OpenAI({ apiKey: '[insert API key here]', dangerouslyAllowBrowser: true });
const questions = new Array();
const responses = new Array();
let frame = 0;
let messTextBase = "Hello Chatgpt, please respond with 2-3 sentence responses. You have been asked '";
let messText = ""
let img = ""
let printText = ""
let userText = ""

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
let imageInput = document.querySelector('input[type="file"]');
let send = document.getElementById("send")
send.addEventListener('click', (display))

// When fileInput changes do the following
imageInput.addEventListener('change', () => {
  
  const plusIcon = document.getElementById("plusIcon");
  plusIcon.className += "absolute opacity-60 z-50 h-[6%] mb-[45%] mr-[30%]";
  // creates a variable call fr which stores the new fileReader function
  let fr = new FileReader();

  // Reads the fileInput variable as a dataURL
  fr.readAsDataURL(imageInput.files[0]);

  // When the fr variable has loaded do the following
  fr.addEventListener('load', () => {

    // Set the results to a variable and display it in console
    let url = fr.result;

    console.log(url);

    document.getElementById("imageDisplay").src = url;
    img = url.split(",");
    })  
  })

})

let upOrDown = "+"
let icon = "0" 
let textType = "2"
let textOutput = "4" 
let messageNumber = "0" 



async function display(){
  userText = document.getElementById("textInputField").value;
  let chatsContainer = document.getElementById("chatsContainer");
  chatsContainer.classList.replace("invisible", "visible");
  await insertHTML()
  console.log(userText)
  printText = await askQuestion(userText, img[1]);
  console.log(printText)
  if (printText){
      await insertHTML()
      setTimeout (() => {
      messageNumber = increment(messageNumber);
      }, 0)
    }
}

async function insertHTML (){
  console.log(messageNumber)
  let chatsContainer = document.getElementById("chatsContainer")
  chatsContainer.innerHTML +=   
  
  '<div class="flex flex-row">' +
      '<div class="w-[12.5%]">' +
          '<img id="' +
          icon + messageNumber +
          '" src="" alt="">'+
      '</div>' +
      '<div class="flex flex-row grow">' +
          '<p id="' +
          textType + messageNumber +
          '" class="text-base font-bold ml-2.5 w-[95%]"></p>' +
          '<img class="h-6 " src="src/lib/images/speakerLight.png" alt="">' +
      '</div>' +
  '</div>' +
  '<p id="' +
  textOutput + messageNumber +
  '" class="ml-[16%] pb-[20px]"></p>';  
  
  setTimeout (() => {
  console.log(messageNumber)
  if (icon == "0" && textType == "2" && textOutput == "4") {
      document.getElementById(icon + messageNumber).src = "src/lib/images/userIconLight.png";
      document.getElementById(textType + messageNumber).innerHTML="User";
      document.getElementById(textOutput + messageNumber).innerHTML = userText;
      icon = increment (icon);
      textType = increment (textType);
      textOutput = increment (textOutput);
      upOrDown = "-"


  }

  else if (icon == "1" && textType == "3" && textOutput == "5") {
      console.log(icon + messageNumber)
      console.log(textType + messageNumber)
      console.log(textOutput + messageNumber)
      document.getElementById(icon + messageNumber).src = "src/lib/images/openaiLight.png";
      document.getElementById(textType + messageNumber).innerHTML="ChatGPT";
      document.getElementById(textOutput + messageNumber).innerHTML = printText;
      icon = increment (icon);
      textType = increment (textType);
      textOutput = increment (textOutput);
      upOrDown = "+"

  }
  else {
    console.log("you suck at maths =")
    
  }
 }, 0)

}

function increment (value){
value = parseInt(value, 10);
if (upOrDown == "+") {
  value ++
}
else {
  value --
}
value = value.toString();
return value
}
</script>