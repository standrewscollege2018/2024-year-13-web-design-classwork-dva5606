<script>
let messageNumber = "0";
var icon, textType, textOutput;
icon = textType = textOutput = "0";

async function display(){
    insertHTML()
    console.log(userText, img[1]) 
    printText = await askQuestion(userText, img[1]);

    console.log(printText)
    if (printText){
        insertHTML()
        messageNumber = parseInt(messageNumber, 10);
        messageNumber =+ 1
        messageNumber = messageNumber.toString();

    }
}

function insertHTML (){

    let chatsContainer = document.getElementById("chatsContainer")
    let userText = document.getElementById("textInputField").value;
    chatsContainer.innerHTML +=   
    
    '<div class="flex flex-row">' +
        '<div class="w-[12.5%]">' +
            '<img id="' +
            icon +
            '" src="" alt="">'+
        '</div>' +
        '<div class="flex flex-row grow">' +
            '<p id="' +
            textType +
            '" class="text-base font-bold ml-2.5 w-[95%]"></p>' +
            '<img class="h-6 " src="src/lib/images/speakerLight.png" alt="">' +
        '</div>' +
    '</div>' +
    '<p id="'
    textOutput + messageNumber +
    '" class="ml-[16%]" id="displayUserText"></p>';  

    if (icon == "0" && textType == "0" && textOutput == "0") {
        document.getElementById(icon).src="src/lib/images/userIconLight.png";
        document.getElementById(textType).innerHTML="User";
        document.getElementById(textOutput + messageNumber).innerHTML = userText;
        icon = textType = textOutput = "1";
    }
    else {
        document.getElementById(icon).src="src/lib/images/openaiLight.png";
        document.getElementById(textType).innerHTML="ChatGPT";
        document.getElementById(textOutput + messageNumber).innerHTML = printText;
        icon = textType = textOutput = "0";
    }

}
</script>

  