<svelte:head>
</svelte:head>

<!-- Tailwind CSS is used here and allows me to directly style HTML component through the classes of elements -->

<!-- Creates a header for the app that simply displays "Chats" -->
<div class="sticky top-0 border-b border-b-2 border-lightModeGrey-600 bg-lightModeGrey-100">
  <h1 class="text-2xl text-black font-consolas text-center my-[15px]">Chats</h1>
</div>

<!-- Creates the file insert -->
<div class="border-0">
  <div class="m-auto w-1/2 py-6" id="imageContainer">
      <!-- Forms a label for the input allowing me to freely style it -->
      <label for="image" class="flex items-center justify-center h-60 bg-white border-lightModeGrey-400 border border-2 rounded-xl" id="imageLabel"> 
        <input id="image" type="file" accept="image/*" class="hidden" />
        <!-- Creates a blank image where the image that is inputted will be displayed -->
        <img class="max-h-[350px] object-cover rounded-xl " id="imageDisplay" src="" alt="">
        <!-- simple plus icon -->
        <img class="h-[60%] rounded-xl " id="plusIcon" src="src/lib/images/plusLight.png" alt="">
      </label>
  </div>
</div>

<!-- Empty container for future chats, explained further in the JavaScript Area -->
<div id="chatsContainer" class="bg-lightModeGrey-200 p-3 m-2 rounded-xl invisible">

</div>

<!-- Forms the container for the the text input bar -->
<div class="z-50" id="textBarAndButtonContainer">
  <!-- seperate container specifically for the text input bar and its components -->
  <div class="flex mx-[20px] border-black border-2 bg-white rounded-xl bottom-[17%] justify-centre fixed">
    <!-- Forms a small button with a microphone as its icon -->
    <button class="w-[10%]" id="microphone">
      <img class="h-auto p-1" src="src/lib/images/microphoneLight.png" alt="">
    </button>

    <!-- small vertical line to act as a divider -->
    <hr class="w-[2px] h-[25px] my-auto rounded-xl bg-lightModeGrey-600 border-0">

    <!-- the actual field where text will be inserted to be sent to the AI -->
    <input type="text" id="textInputField" placeholder="Ask ChatGPT..." class="ml-[5px] focus:outline-none grow">
    
    <!-- a button that confirms the text within the field and sends it off to the AI -->
    <div id="send" class="w-[33px]">
      <img class="h-auto p-1" src="src/lib/images/sendLight.png" alt="">
    </div>
  <!-- Closes the div tag for specifically just the text input field -->
  </div>

  <!-- horizontal line to act as a divider -->
  <hr class="bg-lightModeGrey-700 border border-lightModeGrey-700 w-[75%] left-[12.5%] bottom-[12.4%] my-[10px] fixed">

  <!-- Forms the container which will house the three buttons in the footer -->
  <div class="grid grid-cols-3 bottom-0 w-[80%] left-[8%] justify-center fixed mx-auto" id="buttonContainer">

    <!-- Inserts the HistoryLightInactive svelte component -->
    <HistoryLightInactive />

    <!-- Creates a unique button for the current home page -->
    <button onclick="location.href='/'" type="button" class="bg-lightModeGrey-800 border border-lightModeGrey-800 rounded-[100%] m-[12%]">
        <img class="w-[65%] mx-auto" src="src/lib/images/chatsLightActive.png" alt="">
    </button>

    <!-- Inserts the SettingsLightInactive svelte component -->
    <SettingsLightInactive />

  <!-- Closes the container for just the buttons -->
  </div>
<!-- This div tag concludes the entire bottom container -->
</div>

<!-- Script tag allows me to use JavaScript across my app -->
<script lang="ts">

// Imports a couple extensions
import { onMount } from 'svelte';
import HistoryLightInactive from "../components/historyLightInactive.svelte";
import SettingsLightInactive from "../components/settingsLightInactive.svelte";
import OpenAI from "openai";

// Sets up a few variables and the OpenAI API key
const openai = new OpenAI({ apiKey: '', dangerouslyAllowBrowser: true });
const questions = new Array();
const responses = new Array();
let frame = 0;
let messTextBase = "Hello Chatgpt, please respond with 2-3 sentence responses. You have been asked '";
let messText = ""
let img = ""
let printText = ""
let userText = ""

async function callgpt(question: string,base64Image: string) {
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


async function genQuesiton(question: string){
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

async function askQuestion(question: string, base64String: string) {  
 const altQuesiton = await genQuesiton(question)


 return callgpt(altQuesiton,base64String);


}




// creates onMount function to excute code after rendering the page
onMount(() => {
// creates a variable called fillInput which will store the image file
let imageInput = document.querySelector('input[type="file"]');
let send = document.getElementById("send")
send!.addEventListener('click', (display))

// When fileInput changes do the following
imageInput!.addEventListener('change', () => {
  

  // creates a variable call fr which stores the new fileReader function
  let fr = new FileReader();

  // Reads the fileInput variable as a dataURL
  fr.readAsDataURL(imageInput!.files[0]);

  // When the fr variable has loaded do the following
  fr.addEventListener('load', () => {

    // Set the results to a variable and display it in console
    let url = fr.result;

    console.log(url);

    document.getElementById("imageDisplay")!.src = url;
    img = url!.split(",");

    const plusIcon = document.getElementById("plusIcon");
    
    plusIcon!.className += "absolute opacity-60 z-1 h-[7%] mt-[10px] ml-[10px]";
    const imageContainer = document.getElementById("imageContainer");
    imageContainer!.className = "w-max max-w-[80%] max-h-[200px] py-8 mx-auto"
    const imageLabel = document.getElementById("imageLabel");
    imageLabel!.classList.remove("items-center", "justify-center", "h-60") 

    })  
  })

})




async function audio(text: String) {
    try {
      // Send a POST request to the '/api/textToSpeech' endpoint with the provided text
      const response = await fetch('/api/textToSpeech', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // Sends text as JSON
        body: JSON.stringify({ text }) 
      });
      
      // If the audio is not returned appropriately, the error will be caught and displayed
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to fetch audio: ${response.status} - ${errorMessage}`);
      }

      // Gets the response audio in JSON and converts it into an audio format
      const { audio } = await response.json();
      const audioUrl = `data:audio/mpeg;base64,${audio}`;
      
      // Creates new audio object with the audio data URL and plays it
      const audiop = new window.Audio(audioUrl); 
      audiop.play();
      // Catches any unexpected errors that may occur during this process
    } catch (error) {
      console.error('Error creating audio:', error);
    }
  }

// Sets up a couple variables in order to dynamically add content
let iconChatGPTOrUser = "0" 
let nameChatGPTOrUser = "2"
let responseChatGPTOrUser = "4" 
let speakerChatGPTOrUser = "6"
let messageNumber = "0" 
let elementAppended = false

// Creates a display function that will run when the send button is clicked
async function display(){
  elementAppended = true
  // Gets the text that was inserted and the HTML chatsContainer and sets them to variables for later use
  userText = document.getElementById("textInputField")!.value;
  let chatsContainer = document.getElementById("chatsContainer");
  // Causes the chatsContainer to now be visible
  chatsContainer!.classList.replace("invisible", "visible");
  // Runs function that in this case will insert the user's message
  await insertHTML()
  // Returns the text from the AI
  printText = await askQuestion(userText, img[1]);
  // If its set, inserts the AI's response
  if (printText){
      await insertHTML()
      // Increments the messageNumber to keep HTML id's unique
      messageNumber = increment(messageNumber, "+");

    }
}

async function insertHTML (){
  let chatsContainer = document.getElementById("chatsContainer")
  // appends HTML by reparsing it and then adding on another segement
  chatsContainer!.innerHTML +=   

  /* The insertHTML function essentially inserts user messages and AI responses in the same function. In order
  to make this work, the inner contents of each message needs to be dynamically changed based on whether the current
  message is from the user or the AI. Element id's will consist of what the element represents followed by a 0 or 1
  depending on whether the current message is from the user or the AI and then further followed by the current message
  number*/

  // Creates the div content for the entire message
  '<div class="flex flex-row">' +
      // Creates the div container for the icon
      '<div class="w-[12.5%]">' +
          // Generates an icon with a dynamic id of "icon-" followed by iconChatGPTOrUser and messageNumber
          '<img id="icon-' +
          iconChatGPTOrUser + messageNumber +
          '" src="" alt="">'+
      '</div>' +
      
      // Creates the div container for the rest of the message
      '<div class="flex flex-row grow">' +
          // Generates a name with a dynamic id of "name-" followed by nameChatGPTOrUser and messageNumber
          '<p id="name-' +
          nameChatGPTOrUser + messageNumber +
          '" class="text-base font-bold ml-2.5 w-[95%]"></p>' +
            // Generates a speaker icon with a dynamic id of "speaker-" followed by speakerChatGPTOrUser and messageNumber
            '<img id="speaker-' +
          speakerChatGPTOrUser + messageNumber +
          // Additional data will be attached to the speaker using the "data-" prefix
          '" data-speakerID="' +
          responseChatGPTOrUser + messageNumber +
          '" class="h-6" src="src/lib/images/speakerLight.png" alt="">' +
          '</button>' +

      '</div>' +
  '</div>' +
// Generates the message contents with a dynamic id of "response-" followed by responseChatGPTOrUser and messageNumber
  '<p id="response-' +
  responseChatGPTOrUser + messageNumber +
  '" class="ml-[16%] pb-[20px]"></p>';  
  
  // Checks to see if the current message displayed should be from the user
  if (iconChatGPTOrUser == "0" && nameChatGPTOrUser == "2" && responseChatGPTOrUser == "4") {
    // Uses the dynamic id's to insert the user icon, the user name, and the users message into their respective places
    document.getElementById("icon-" + iconChatGPTOrUser + messageNumber)!.src = "src/lib/images/userIconLight.png";
    document.getElementById("name-" + nameChatGPTOrUser + messageNumber)!.innerHTML="User";
    document.getElementById("response-" + responseChatGPTOrUser + messageNumber)!.innerHTML = userText;
    // Increments these variables up to 1 to ensure the next message displayed is the AI's response
    iconChatGPTOrUser = increment (iconChatGPTOrUser, "+");
    nameChatGPTOrUser = increment (nameChatGPTOrUser, "+");
    responseChatGPTOrUser = increment (responseChatGPTOrUser, "+");
    speakerChatGPTOrUser = increment (speakerChatGPTOrUser, "+");


  }

  // Checks to see if the current message displayed should be from the AI
  else if (iconChatGPTOrUser == "1" && nameChatGPTOrUser == "3" && responseChatGPTOrUser == "5") {
    // Uses the dynamic id's to insert the AI's icon, the AI name, and the AI's message into their respective places
    document.getElementById("icon-" + iconChatGPTOrUser + messageNumber)!.src = "src/lib/images/openaiLight.png";
    document.getElementById("name-" + nameChatGPTOrUser + messageNumber)!.innerHTML="ChatGPT";
    document.getElementById("response-" + responseChatGPTOrUser + messageNumber)!.innerHTML = printText;
    // Increments these variables down to 0 to ensure the next message displayed is the users
    iconChatGPTOrUser = increment (iconChatGPTOrUser, "-");
    nameChatGPTOrUser = increment (nameChatGPTOrUser, "-");
    responseChatGPTOrUser = increment (responseChatGPTOrUser, "-");
    speakerChatGPTOrUser = increment (speakerChatGPTOrUser, "-");

  }
  // Catches errors if variables fail to increment due to an unknown bug
  else {
    console.log("An error has occured while incrementing")
  }
}

// Simple increment function that take in what's being incremented and whether it is being incremented up or down
function increment (value: string, upOrDown: string){
// The initial value is a string so that dynamic id's can be formed and so it must be converted into an integer
value = parseInt(value, 10);
// If upOrDown is a "+" the value will increment up by 1 and if upOrDown is a "-" increment the value down by 1
if (upOrDown == "+") {
  value ++
}
else {
  value --
}
// Sets the integer value back to a string and returns it
value = value.toString();
return value
}

// OnMount processes occur after components have been mounted and the page is formed to ensure elements are correctly found
onMount (() => {
  // The speaker icon can only exist if an element was appended
  if (elementAppended = true) {
    // Makes use of event delegation to check if the chatsContainer element was clicked and which specific speaker was clicked
    document.getElementById('chatsContainer')!.addEventListener('click', function(event) {
      if (event.target!.id.startsWith('speaker-')) {
        // sets the speaker button that was clicked on to a variable
        let speaker = event.target;
        // Obtains the id of the message whether that be from the user or the AI via the extra data attribute
        let responseID = speaker!.getAttribute('data-speakerID');
        // The message id is used to obtain the message content repective to the speaker id clicked
        let response = document.getElementById("response-" + responseID)!.textContent;
        console.log(response)
        // This is then passed into the audio function to convert text to voice
        audio(response)
      }
    })
  }
  let micButton = document.getElementById("microphone");
  micButton!.addEventListener('click', toggleMic);

  function audioSetup() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({
        audio: true
      })
      .then(setupStream)
      .catch(err => {
        console.log(err)
      })
    }
  }

  audioSetup();
  let recorder = null;
  let chunks = [];
  let isRecording = false;

  function setupStream(stream) {
    recorder = new MediaRecorder(stream);

    recorder.ondataavailable = e => {
      chunks.push(e.data);
    }

    recorder.onstop = async () => {
    const blob = new Blob(chunks, { type: "audio/mp3" });
    chunks = [];

    const formData = new FormData();
    formData.append('audio', blob, 'recording.mp3');

    try {
      // Save the audio file
      const saveResponse = await fetch('/api/saveAudio', {
        method: 'POST',
        body: blob
      });

      if (saveResponse.ok) {
        console.log("Audio saved successfully");
      } else {
        console.error("Failed to save audio");
        return;
      }

      // Transcribe the saved audio file
      const transcribeResponse = await fetch('/api/speechToText', {
        method: 'POST',
        body: blob
      });

      if (transcribeResponse.ok) {
        const data = await transcribeResponse.json();
        console.log("Transcription:", data.transcription);
        document.getElementById("textInputField")!.value += data.transcription
      } else {
        console.error("Failed to transcribe audio");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


  }

  function toggleMic() {
    if (isRecording == false) {
      isRecording = true;
      console.log ("Recording")
      recorder.start();
    }
    else {
      isRecording = false;
      console.log("Stopped recording")
      recorder.stop()
    }
  }
})

</script>
