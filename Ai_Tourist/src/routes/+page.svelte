<svelte:head>
</svelte:head>

<!-- Tailwind CSS is used here and allows me to directly style HTML component through the classes of elements -->

<div id="body">
  <!-- Container for notifications -->
  <div id="notificationsContainer" class="fixed z-50 left-[5%] top-[3%]">
    <!-- Loops through each notification in the notification array -->
    {#each notifications as notification (notification.id)}
      <!-- Actual notification component -->
      <Toast transition={fly} params={{x:-200}} color="red" class="relative m-[5px]">
        <!-- Slot for the error icon -->
        <svelte:fragment slot="icon">
          <ExclamationCircleSolid class="w-5 h-5 red" />
          <span class="sr-only">Error icon</span>
        </svelte:fragment>
        <!-- Message from the notification array -->
        {notification.message}
      </Toast>
    {/each}
  </div>

  <!-- Creates a header for the app t hat simply displays "Chats" -->
  <div class="sticky z-20 top-0 border-b border-b-2 border-lightModeGrey-600 bg-lightModeGrey-100 py-4">
    <h1 class="text-2xl text-black font-consolas text-center my-auto">Chats</h1>
  </div>

  <!-- Creates the file insert -->
  <div class="border-0">
    <div class="m-auto w-1/2 py-6" id="imageContainer">
        <!-- Forms a label for the input allowing me to freely style it -->
        <label for="image" class="flex items-center justify-center bg-white h-60 border-lightModeGrey-400 border border-2 rounded-xl" id="imageLabel"> 
          <input id="image" type="file" accept="image/*" class="hidden" />
          <!-- Creates a blank image where the image that is inputted will be displayed -->
          <img class="max-h-[350px] object-cover rounded-xl" id="imageDisplay" src="" alt="">
          <!-- simple plus icon -->
          <img class="h-[60%] rounded-xl " id="plusIcon" src="src/lib/images/plusLight.png" alt="">
        </label>
    </div>
  </div>

  <!-- Empty container for future chats, explained further in the JavaScript Area -->
  <div id="chatsContainer" class="bg-lightModeGrey-200 p-3 mx-3 rounded-xl relative invisible mb-[200px] border-0">

  </div>



  <!-- Forms the container for the the text input bar -->
  <div class="fixed z-10 bottom-0 w-[100%] px-[2%] right-[50%] translate-x-2/4 bg-lightModeGrey-100 pt-[15px]" id="textBarAndButtonContainer">
    <!-- seperate container specifically for the text input bar and its components -->
    <div class="flex mx-[20px] border-black border-2 bg-white rounded-xl bottom-[17%] justify-centre">
      <!-- Forms a small button with a microphone as its icon -->
      <button class="w-[10%]">
        <img id="microphone" class="h-auto p-[5px] transition-opacity transition-transform duration-200 ease-in-out transform" src="src/lib/images/microphoneLight.png" alt="Voice to Text">
      </button>

      <!-- small vertical line to act as a divider -->
      <hr class="w-[2px] h-[24px] my-auto rounded-xl bg-black border-0">

      <!-- the actual field where text will be inserted to be sent to the AI -->
      <input type="text" id="textInputField" placeholder="Ask ChatGPT..." class="ml-[5px] focus:outline-none grow">
      
      <!-- a button that confirms the text within the field and sends it off to the AI -->
      <div id="send" class="transition-[opacity] duration-[500ms] opacity-30 w-[10%]">
        <img class=" h-auto p-1" src="src/lib/images/sendLight.png" alt="">
      </div>
    <!-- Closes the div tag for specifically just the text input field -->
    </div>

    <!-- horizontal line to act as a divider -->
    <hr class="bg-lightModeGrey-700 mx-auto border border-lightModeGrey-700 w-[75%] mt-[5%] mb-[1%]">

    <!-- Forms the container which will house the three buttons in the footer -->
    <div class="grid grid-cols-3 bottom-0 w-[80%] left-[8%]  justify-center mx-auto" id="buttonContainer">

      <!-- Inserts the HistoryLightInactive svelte component -->
      <HistoryLightInactive />

      <!-- Creates a unique button for the current home page -->
      <button type="button" class="aspect-square bg-lightModeGrey-800 border border-lightModeGrey-800 rounded-[100%] m-[12%]">
          <img class="w-[65%] mx-auto" src="src/lib/images/chatsLightActive.png" alt="">
      </button>

      <!-- Inserts the SettingsLightInactive svelte component -->
      <SettingsLightInactive />

    <!-- Closes the container for just the buttons -->
    </div>
  <!-- This div tag concludes the entire bottom container -->
  </div>
</div>
<!-- Script tag allows me to use JavaScript across my app -->
<script lang="ts">

// Imports a couple extensions
import { onMount } from 'svelte';
import HistoryLightInactive from "../components/historyLightInactive.svelte";
import SettingsLightInactive from "../components/settingsLightInactive.svelte";
import { Toast } from 'flowbite-svelte';
import { ExclamationCircleSolid } from 'flowbite-svelte-icons';
import { fly } from 'svelte/transition';



// Sets up a few variables and the OpenAI API key
let img = [""]
let printText = ""
let userText = ""

// Function to get a response from the chatgptResponseResponse server file using the question and the image
async function getResponse(userText:string, base64Image:string) {
  try {
    // Sends a request to the chatgptResponse server file
    const response = await fetch('/api/chatgptResponse', {
      // Sets up the different components of the request
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question: userText,
        base64Image: base64Image,
      }),
    });

    // Check if the reponse was unsuccessful and prints the resulting error message
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    // Parses the JSON data from the response to the data variable
    const data = await response.json();
    // Returns the answer from data which is the response from ChatGPT
    return data.answer;
  }
  // Catches errors that may occuring while processing a question
  catch (error) {
    // Errors are logged and a message will be printed where ChatGPT usually replies
    console.error('Error fetching response:', error);
    return "An error has occurred!"; // Or handle the error as you see fit
  }
}

// creates onMount function to excute code after rendering the page
onMount(() => {
  // creates a variable called fillInput which will store the image file
  let imageInput = document.querySelector('input[type="file"]') as HTMLInputElement;
  let send = document.getElementById("send") as HTMLButtonElement

  send.addEventListener('click', display)
  

  // When fileInput changes do the following
  imageInput!.addEventListener('change', () => {
    

    // creates a variable call fr which stores the new fileReader function
    let fr = new FileReader();

    // Reads the fileInput variable as a dataURL
    fr.readAsDataURL(imageInput.files![0]);

    // When the fr variable has loaded do the following
    fr.addEventListener('load', () => {

      // Set the results to a variable and preforma null check
      let url = fr.result as string;
      if (url != null) {
        // Replaces empty src img tag with the image that was inserted into the program
        let imageDisplay = document.getElementById("imageDisplay") as HTMLImageElement
        imageDisplay.src = url;
        // Obtains raw URL
        img = url.split(",");

        // Changes the look of the image insert by adjusting the styles through classes
        const plusIcon = document.getElementById("plusIcon");
        plusIcon!.className += "absolute opacity-60 z-10 h-[7%] mt-[10px] ml-[10px]";
        const imageContainer = document.getElementById("imageContainer");
        imageContainer!.className = "w-max max-w-[80%] py-8 mx-auto"
        const imageLabel = document.getElementById("imageLabel");
        imageLabel!.classList.remove("items-center", "justify-center", "h-60")
        // Inputs will be checked to see if a question can be asked 
        checkInputs()
      }
    })  
  })

  // The speaker icon can only exist if an element was appended
  if (elementAppended = true) {
    // Makes use of event delegation to check if the chatsContainer element was clicked and which specific speaker was clicked
    document.getElementById('chatsContainer')!.addEventListener('click', function(event) {
      // Sets speaker to event target which is essentially what was clicked or where the click occured
      let speaker = event.target as HTMLButtonElement;

      // If what was clicked had an id that started with "speaker-"...
      if (speaker.id.startsWith('speaker-')) {
        let speakerid = speaker.id
        let speakerButton = document.getElementById(speakerid)
        speakerButton!.classList.add('scale-110', 'opacity-70');  
        setTimeout(() => {
          speakerButton!.classList.remove('scale-110', 'opacity-70');
        }, 300);
        // Obtains the id of the message whether that be from the user or the AI via the extra data attribute
        let responseID = speaker!.getAttribute('data-speakerID');
        // The message id is used to obtain the message content repective to the speaker id clicked
        let response = document.getElementById("response-" + responseID)!.textContent;
        console.log(response)
        // This is then passed into the audio function to convert text to voice
        if (response != null) {
          audio(response)
        }
      }
    })
  }

  // Whenever anything is inputted (typed) into the text field, the program will check if a question can be asked
  let textInputField = document.getElementById("textInputField") as HTMLInputElement
  textInputField.addEventListener('input', checkInputs)

  // Checks for an image AND a truthy value in the text field
  function checkInputs() {
    // If both are present, the send button becomes active
    if (img[1] && textInputField && textInputField.value) {
      send.classList.remove ("opacity-30")
    }

    // If neither or one is missing, the send button will remain/become inactive
    else {
      send.classList.add ("opacity-30")
    }
  }

  
  // Sets up the microphone button to run toggleMic() when clicked on
  let micButton = document.getElementById("microphone") as HTMLImageElement;
  micButton!.addEventListener('click', toggleMic);

  // Check if the browser supports media devices and audio input
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Requests specifically audio permissions from the user
    navigator.mediaDevices.getUserMedia({
      audio: true
    })
    // The stream will then be setup if the promise is fullfilled (permission granted)
    .then(setupStream)
    // If an error occurs, likely from denying permissions, the error will be caught
    .catch(err => {
      console.log(err)
    })
  }

  // initializes a few variables
  let recorder: MediaRecorder | null = null;
  let chunks:Blob[] = [];
  let isRecording = false;

  // This function sets up the audio stream when microphone permissions have been granted
  function setupStream(stream: MediaStream) {
    // Creates a new MediaRecorder instance with the audio stream
    recorder = new MediaRecorder(stream);

    // Triggered whenever new data is available through the audio stream
    recorder.ondataavailable = audio => {
      // Small 'chunks' of audio are then added to the chunks array
      chunks.push(audio.data);
    }

    // triggered when the recorder stops (microphone button is clicked again)
    recorder.onstop = async () => {
      // Combines all the individual chunks from the array into one blob
      const audioBlob = new Blob(chunks, { type: "audio/mp3" });
      // Resets the chunks array
      chunks = [];
      // Trys to do the following and will catch any errors that occur here
      try {

        // The audio blob is then sent to a server file to be transcripted
        const transcribeResponse = await fetch('/api/speechToText', {
          method: 'POST',
          body: audioBlob
        });

        // If the response comes back successful...
        if (transcribeResponse.ok) {
          // Sets the fetch response to a JavaScript object
          const data = await transcribeResponse.json();
          // Appends the transcription to text input field
          (<HTMLInputElement>document.getElementById("textInputField")!).value += data.transcription
          // Manually checks to see if a question can be asked as appending does not trigger the input event listener
          checkInputs()
        }
      }
      // Catches any errors that may arise while transcripting audio to text 
      catch (error) {
        console.error("Error:", error);
      }
    }
  }

  // Function that will toggle the microphone button between it's active and inactive states
  function toggleMic() {
    // null checks
    if (recorder != null) {
      // if not recording, start recording both mechanically and visually
      if (isRecording == false) {
        // recording starts and isRecording becomes true
        isRecording = true;
        recorder.start();
        // microphone button becomes square stop button
        micButton!.src = "src/lib/images/stopLight.png"
        micButton.classList.replace("p-[5px]", "p-[7px]")
      }
      // if recording, stop recording both mechanically and visually
      else {
        // recording stops and isRecording becomes false
        isRecording = false;
        recorder.stop()
        // the square button turns back into the originally microphone button
        micButton!.src = "src/lib/images/microphoneLight.png"
        micButton.classList.replace("p-[7px]", "p-[5px]")
      }

      // Small animation to visually show the button was clicked on
      micButton.classList.add('scale-110', 'opacity-80');  
      setTimeout(() => {
        micButton.classList.remove('scale-110', 'opacity-80');
      }, 200);
    }
  }
})


// Initializes variables
let audioObject: HTMLAudioElement | null = null;
let controller: AbortController | null = null;

async function audio(text: String) {
  try {
    // If a controller already exists, call the abort 
    if (controller) {
      controller.abort();
    }

    // Creates a new abort controller
    controller = new AbortController();

    // If an audioObject is present, an mp3 file is playing so pause and reset the time
    if (audioObject) {
      audioObject.pause();
      audioObject.currentTime = 0; 
    }


    // Send a POST request to the '/api/textToSpeech' endpoint with the provided text
    const response = await fetch('/api/textToSpeech', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // Sends text as JSON
      body: JSON.stringify({ text }),
      // Attached a controller.signal to halt the request when abort is called
      signal: controller.signal,
    });
    
    // If the audio is not returned appropriately, the error will be caught and displayed
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Failed to fetch audio: ${response.status} - ${errorMessage}`);
    }

    // Gets the response audio in JSON and converts it into an audio format
    const { audio } = await response.json();
    const audioUrl = `data:audio/mpeg;base64,${audio}`;
    
    // Creates new audio object with the audio data URL
    audioObject = new window.Audio(audioUrl); 

    // When the audio object finishes playing, reset it
    audioObject.onended = () => {
      audioObject = null; // Allow new requests once the current speech finishes
    };

    // audioObject plays the audio in the window
    audioObject.play();

    // Catches any unexpected errors that may occur during this process
  } catch (error) {
    // Additional type-check before I can operate on the value
    if (error instanceof Error) {
      // If specifically an abort was called, inform that it was an abortion request
      if (error.name === 'AbortError') {
        console.log('Previous transcription request aborted.');
      } 
      // Else just print out whatever the cause for the error wasS
      else {
        console.error('Error playing audio:', error);
      }
    }
  }
}

// Sets up a couple variables in order to dynamically add content
let iconChatGPTOrUser = "0" as string
let nameChatGPTOrUser = "2" as string
let responseChatGPTOrUser = "4" as string
let speakerChatGPTOrUser = "6" as string
let messageNumber = "0" as string
let elementAppended = false as boolean

// Defines the type and structure of notification objects
type Notification = {
  id: number;
  message: string;  // Example types
};

//  Creates a notifications array with the notification type
 let notifications:Notification[] = [];

// Function to trigger a new toast notification
async function triggerToast(message:string) {
  const id = Date.now(); // Unique ID for each toast
  // Add new notification to the array
  notifications = [...notifications, { id, message }];
  console.log(notifications)
  // Automatically remove the toast after 3 seconds
  setTimeout(() => {
    // Creates a new array excluding the notification with the same id as the one added
    notifications = notifications.filter((notification) => notification.id !== id);
  }, 3000);
}

// The app is not initially displaying anything
let displaying = false as boolean
// Creates a display function that will run when the send button is clicked
async function display(){
  let textInputField = (<HTMLInputElement>document.getElementById("textInputField")!)
  if (img[1] && textInputField && textInputField.value && displaying == false) {
    // Once a question is successfully asked, the send button becomes inactive
    let send = document.getElementById("send") as HTMLButtonElement
    send.classList.add ("opacity-30")
    // Resets the text input field
    displaying = true
    // Gets the text that was inserted and the HTML chatsContainer and sets them to variables for later use
    userText = textInputField.value;
    textInputField.value = "";
    elementAppended = true
    let chatsContainer = document.getElementById("chatsContainer");
    // Causes the chatsContainer to now be visible
    chatsContainer!.classList.replace("invisible", "visible");
    // Inserts two seperate lots of HTML, one for the user and one for the AI
    await insertHTML()
    await insertHTML()
    
    // Returns the text from the AI
    printText = await getResponse(userText, img[1]) as string;  
    // Once askQuestion is finished and printText has a truthy value
    if (printText){
      // Sets the text where the AI responds to the actual response
      document.getElementById("response-" + "5" + messageNumber)!.innerHTML = printText;
      // Increments the messageNumber to keep HTML id's unique
      messageNumber = increment(messageNumber, "+");
    }

    // The app is no longer displaying and thus messages can be sent assuming other criteria are fulfilled
    displaying = false
  }
  else {
    let textInputField = document.getElementById("textInputField") as HTMLInputElement
    // If no image is inserted, create a specific error notification
    if (!img[1]) {
      await triggerToast("Error occurred! Please insert an image.")
    }
    // If no text has been inserted into the field, create a specific error notification
    if (!textInputField.value) {
      await triggerToast("Error occurred! Please ask a question.")
    }
    // If a question is already being asked/processed, create a specific error notification
    if (displaying == true) {
      await triggerToast("Error occured! Please await a reply before asking again.")
    }
  }
}

// Function that will insert each question and response as sections of HTML
async function insertHTML (){
  let chatsContainer = document.getElementById("chatsContainer")
  // appends HTML to the container
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
          '" class="h-6 transition-opacity transition-transform duration-300 ease-in-out transform" src="src/lib/images/speakerLight.png" alt="">' +
          '</button>' +
      '</div>' +
  '</div>' +
// Generates the message contents with a dynamic id of "response-" followed by responseChatGPTOrUser and messageNumber
  '<p id="response-' +
  responseChatGPTOrUser + messageNumber +
  '" class="ml-[16%] pb-[20px]"></p>'

  // Checks to see if the current message displayed should be from the user
  if (iconChatGPTOrUser == "0") {
    // Uses the dynamic id's to insert the user icon, the user name, and the users message into their respective places
    (<HTMLImageElement>document.getElementById("icon-" + iconChatGPTOrUser + messageNumber)).src = "src/lib/images/userIconLight.png";
    document.getElementById("name-" + nameChatGPTOrUser + messageNumber)!.innerHTML="User";
    document.getElementById("response-" + responseChatGPTOrUser + messageNumber)!.innerHTML = userText;
    // Increments these variables up to 1 to ensure the next message displayed is the AI's response
    [iconChatGPTOrUser, nameChatGPTOrUser, responseChatGPTOrUser, speakerChatGPTOrUser] = 
    [iconChatGPTOrUser, nameChatGPTOrUser, responseChatGPTOrUser, speakerChatGPTOrUser].map(item => increment(item, "+"));

  }

  // Checks to see if the current message displayed should be from the AI
  else if (iconChatGPTOrUser == "1") {
    // Uses the dynamic id's to insert the AI's icon, the AI name, and the AI's message into their respective places
    (<HTMLImageElement>document.getElementById("icon-" + iconChatGPTOrUser + messageNumber)).src = "src/lib/images/openaiLight.png";
    document.getElementById("name-" + nameChatGPTOrUser + messageNumber)!.innerHTML="ChatGPT";
    // Sets the current AI's response to a loading ellipse (...) while the question is being processed
    document.getElementById("response-" + responseChatGPTOrUser + messageNumber)!.innerHTML = "<div class='flex space-x-2'>" +
                                                                                              "<span class='sr-only'>Loading...</span>" +
                                                                                              "<div class='h-4 w-4 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>" +
                                                                                              "<div class='h-4 w-4 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>" +
                                                                                              "<div class='h-4 w-4 bg-black rounded-full animate-bounce'></div>" +
                                                                                              "</div>";
    // Increments these variables down to 0 to ensure the next message displayed is the users
    [iconChatGPTOrUser, nameChatGPTOrUser, responseChatGPTOrUser, speakerChatGPTOrUser] = 
    [iconChatGPTOrUser, nameChatGPTOrUser, responseChatGPTOrUser, speakerChatGPTOrUser].map(item => increment(item, "-"));
  }
  // Catches errors if variables fail to increment due to an unknown bug
  else {
    console.log("An error has occured while incrementing")
  }

}

// Simple increment function that take in what's being incremented and whether it is being incremented up or down
function increment (value:string, upOrDown: string){
  // The initial value is a string so that dynamic id's can be formed and so it must be converted into an integer
  let intValue = parseInt(value, 10);
  // If upOrDown is a "+" the value will increment up by 1 and if upOrDown is a "-" increment the value down by 1
  if (upOrDown == "+") {
    intValue ++
  }
  else {
    intValue --
  }
  // Sets the integer value back to a string and returns it
  value = intValue.toString();
  return value
}

</script>
